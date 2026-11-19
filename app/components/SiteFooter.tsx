import { CONTACT_EMAIL, profile } from "~/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-signal">
            {CONTACT_EMAIL}
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-signal">
            github
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal">
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
