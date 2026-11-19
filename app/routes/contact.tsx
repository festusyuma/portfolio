import { ContactForm } from "~/components/ContactForm";
import { CONTACT_EMAIL, profile } from "~/data/profile";
import type { Route } from "./+types/contact";

export function meta(_: Route.MetaArgs) {
  return [
    { title: `Contact · ${profile.name}` },
    { name: "description", content: `Email ${profile.name} at ${CONTACT_EMAIL}.` },
  ];
}

export default function Contact() {
  return (
    <main className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-mono text-sm text-dim">
            <span className="text-signal">$</span> mail -s "hello" {CONTACT_EMAIL}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Get in touch</h1>
          <p className="mt-4 max-w-md text-dim">
            Tell me about the role, the product or the system that's giving you trouble. I usually reply within a day or
            two.
          </p>
          <dl className="mt-10 space-y-4 font-mono text-sm">
            <div>
              <dt className="text-xs text-faint">email</dt>
              <dd>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink hover:text-signal">
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-faint">location</dt>
              <dd className="text-ink">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-xs text-faint">elsewhere</dt>
              <dd className="flex gap-4">
                <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-ink hover:text-signal">
                  github ↗
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-ink hover:text-signal">
                  linkedin ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
