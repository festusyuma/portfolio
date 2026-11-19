import {GetCallerIdentityCommand, STSClient} from "@aws-sdk/client-sts";
import {FullStackConstruct} from "@fy-stack/fullstack-construct";
import {AppType} from "@fy-stack/types";
import {type} from "arktype";
import * as cdk from "aws-cdk-lib";
import type {Construct} from "constructs";

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};

const params = type({ENVIRONMENT: "string"})(process.env);
if (params instanceof type.errors) throw params;

const environment = params.ENVIRONMENT;
const appName = "festusyuma";

class AppStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: cdk.StackProps & { ownerArn: string }) {
        super(scope, id, props);

        const isProduction = environment === "production";

        new FullStackConstruct(this, "App", {
            environment,
            name: appName,
            ownerArn: props.ownerArn,
            static: {
                landing: {
                    output: "./build/client",
                    type: AppType.STATIC_WEBSITE,
                },
            },
            domain: {domain: "festusyuma.com", records: isProduction ? ["*", "www"] : [environment]},
            storage: {retainOnDelete: isProduction},
            cdn: {
                routes: {
                    "/*": {$resource: "landing"},
                    "/uploads": {$resource: "storage"},
                }
            },
            secret: {},
            outputs: true,
        });
    }
}

const sts = new STSClient();
const caller = await sts.send(new GetCallerIdentityCommand());
if (!caller.Arn) throw new Error("caller not found");

const app = new cdk.App();

new AppStack(app, "infra", {
    env,
    stackName: `${appName}-${environment}`,
    ownerArn: caller.Arn,
});
