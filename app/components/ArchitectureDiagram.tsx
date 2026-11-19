type Node = { name: string; detail: string; accent?: "rust" | "signal" };

const tiers: { label: string; nodes: Node[] }[] = [
  {
    label: "clients",
    nodes: [
      { name: "Reader web", detail: "React Router · SSR" },
      { name: "Author & admin dashboards", detail: "React Router · SSR" },
      { name: "Creator site", detail: "React Router · SSR" },
    ],
  },
  {
    label: "edge",
    nodes: [
      { name: "CloudFront", detail: "routes /api/* → API, /* → web apps" },
      { name: "Cognito", detail: "auth, groups, Google sign-in" },
    ],
  },
  {
    label: "compute",
    nodes: [
      { name: "Axum API", detail: "Rust · Tokio · ECS Fargate", accent: "rust" },
      { name: "Event channel", detail: "SQS listener · retries · idempotent", accent: "rust" },
    ],
  },
  {
    label: "state",
    nodes: [
      { name: "PostgreSQL", detail: "RDS · sqlx" },
      { name: "S3", detail: "signed uploads → notifications" },
      { name: "Secrets Manager", detail: "config at boot" },
    ],
  },
];

export function ArchitectureDiagram() {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 font-mono text-xs">
        <span className="text-faint">lomics/infra.ts</span>
        <span className="text-dim">
          provisioned with <span className="text-signal">fy-stack</span>
        </span>
      </div>
      <div className="relative p-4 sm:p-8">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
        <ol className="relative space-y-3">
          {tiers.map((tier, i) => (
            <li key={tier.label}>
              <div className="grid gap-3 sm:grid-cols-[96px_1fr] sm:items-center">
                <span className="font-mono text-[11px] tracking-widest text-faint uppercase">{tier.label}</span>
                <div className={`grid gap-3 ${tier.nodes.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                  {tier.nodes.map((node) => (
                    <div
                      key={node.name}
                      className={`rounded-lg border bg-raised/90 px-4 py-3 ${
                        node.accent === "rust" ? "border-rust/40" : "border-line"
                      }`}
                    >
                      <p className={`font-mono text-sm ${node.accent === "rust" ? "text-rust" : "text-ink"}`}>
                        {node.name}
                      </p>
                      <p className="mt-0.5 text-xs text-dim">{node.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              {i < tiers.length - 1 && (
                <div className="grid sm:grid-cols-[96px_1fr]" aria-hidden>
                  <span />
                  <div className="flex justify-center py-1">
                    <span className="h-5 w-px bg-gradient-to-b from-signal/70 to-signal/10" />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="border-t border-line px-4 py-3 text-xs text-dim sm:px-6">
        The same blueprint runs Lowspen and my other apps: one typed contract shared by every client, a Rust service
        doing the work, and background events kept off the request path.
      </figcaption>
    </figure>
  );
}
