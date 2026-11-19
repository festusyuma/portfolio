import { Link } from "react-router";
import { ArchitectureDiagram } from "~/components/ArchitectureDiagram";
import { AvatarLightbox } from "~/components/AvatarLightbox";
import { ContactForm } from "~/components/ContactForm";
import { HlsVideo } from "~/components/HlsVideo";
import { SectionHeading, Tag } from "~/components/SectionHeading";
import { clientWork, community, experience, metrics, openSource, profile, skills } from "~/data/profile";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: `${profile.name} · ${profile.title}` },
    { name: "description", content: profile.summary },
  ];
}

const container = "mx-auto max-w-6xl px-4 sm:px-6";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="experience" className={`${container} py-24`}>
        <SectionHeading
          index="01"
          title="Experience"
          lede="Most of my work lives behind an API: services, queries, queues and the infrastructure under them."
        />
        <Experience />
      </section>
      <section id="open-source" className="border-y border-line bg-surface/40">
        <div className={`${container} py-24`}>
          <SectionHeading
            index="02"
            title="Open source"
            lede="Tools I built to stop solving the same infrastructure and API problems on every project."
          />
          <OpenSourceGrid />
        </div>
      </section>
      <section id="architecture" className={`${container} py-24`}>
        <SectionHeading
          index="03"
          title="How I ship a product"
          lede="The infrastructure behind Lomics, from the browser down to storage. I reuse the same setup across my other apps."
        />
        <ArchitectureDiagram />
      </section>
      <section id="client-work" className="border-y border-line bg-surface/40">
        <div className={`${container} py-24`}>
          <SectionHeading
            index="04"
            title="Client work"
            lede="Products I've designed and built end to end as an independent contractor: backend, infrastructure, web and mobile."
          />
          <ClientWork />
        </div>
      </section>
      <section id="community" className={`${container} py-24`}>
        <SectionHeading
          index="05"
          title="Community"
          lede="Time spent helping the next generation find their way into tech."
        />
        <Community />
      </section>
      <section id="stack" className="border-y border-line bg-surface/40">
        <div className={`${container} py-24`}>
          <SectionHeading index="06" title="Stack" />
          <Stack />
        </div>
      </section>
      <section id="contact">
        <div className={`${container} grid gap-10 py-24 lg:grid-cols-[1fr_1.4fr]`}>
          <div>
            <SectionHeading
              index="07"
              title="Let's talk"
              lede="Hiring for a backend or platform role, need a product built, or want a second pair of eyes on your infrastructure? Send a message."
            />
            <ul className="space-y-2 font-mono text-sm text-dim">
              <li>
                <span className="text-signal">→</span> full-time backend / platform roles
              </li>
              <li>
                <span className="text-signal">→</span> contract product builds
              </li>
              <li>
                <span className="text-signal">→</span> AWS cost & performance reviews
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className={`${container} relative grid gap-12 pt-16 pb-24 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-center`}>
        <div>
          <p className="caret font-mono text-sm text-dim">
            <span className="text-signal">festus@lagos</span>:<span className="text-warn">~</span>$ whoami
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-3 block text-2xl font-normal text-dim sm:text-3xl lg:text-4xl">
              backend systems, cloud infrastructure &amp; the plumbing in between.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-dim">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <Link
              to="/contact"
              className="rounded-md bg-signal px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90"
            >
              send an email
            </Link>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-5 py-2.5 transition-colors hover:border-signal hover:text-signal"
            >
              github ↗
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-5 py-2.5 transition-colors hover:border-signal hover:text-signal"
            >
              linkedin ↗
            </a>
          </div>
        </div>
        <StatusPanel />
      </div>
    </section>
  );
}

function StatusPanel() {
  return (
    <div className="rounded-xl border border-line bg-surface/90 font-mono text-sm shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-faint">systemctl status festusyuma</span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <AvatarLightbox src="/avatar.jpg" alt={profile.name} />
          <div className="min-w-0">
            <p className="truncate text-ink">● festusyuma.service</p>
            <p className="truncate text-xs text-dim">{profile.title}</p>
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs">
          <span className="live-dot size-2 rounded-full bg-signal" />
          <span className="text-dim">Active:</span>
          <span className="text-signal">active (running)</span>
          <span className="text-faint">· open to work</span>
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
          {metrics.map((m) => (
            <div key={m.label} className="bg-raised px-3 py-3">
              <dt className="text-[11px] leading-tight text-faint">{m.label}</dt>
              <dd className="mt-1 text-xl font-bold text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-faint">
          Loaded: <span className="text-dim">rust · node.js · aws · postgres</span>
        </p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-10">
      {experience.map((job, i) => (
        <li key={job.company} className="relative">
          <span
            className={`absolute top-1.5 -left-[29px] size-2.5 rounded-full ring-4 ring-bg sm:-left-[45px] ${
              i === 0 ? "live-dot bg-signal" : "bg-faint"
            }`}
          />
          <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
            <div className="font-mono text-sm">
              <p className="text-ink">{job.period}</p>
              <p className="text-faint">
                {job.earlier ? `${job.role} · ` : ""}
                {job.mode}
              </p>
              {job.earlier?.map((e) => (
                <div key={e.period} className="mt-3 border-l border-line pl-3">
                  <p className="text-dim">{e.period}</p>
                  <p className="text-faint">
                    {e.role} · {e.mode}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                {job.role} <span className="text-dim">@ {job.company}</span>
              </h3>
              <ul className="mt-4 space-y-2.5 text-[15px] text-dim">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-[9px] h-px w-3 shrink-0 bg-signal" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <Tag key={s} tone={s === "Rust" ? "rust" : "default"}>
                    {s}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function OpenSourceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {openSource.map((repo, i) => (
        <a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className={`group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-signal/60 ${
            i === 0 ? "md:col-span-2" : ""
          }`}
        >
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-lg text-ink group-hover:text-signal">{repo.name}</p>
                <p className="text-sm text-dim">{repo.tagline}</p>
              </div>
              <span
                className={`flex shrink-0 items-center gap-1.5 font-mono text-xs ${
                  repo.language === "Rust" ? "text-rust" : "text-[#7aa2f7]"
                }`}
              >
                <span className="size-2 rounded-full bg-current" />
                {repo.language}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-dim">{repo.description}</p>
          </div>
          <pre className="mt-auto overflow-x-auto border-t border-line bg-bg px-5 py-4 font-mono text-[12px] leading-relaxed text-dim sm:px-6">
            <code>{repo.snippet}</code>
          </pre>
          <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-3 sm:px-6">
            <div className="flex flex-wrap gap-1.5">
              {repo.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <span className="shrink-0 font-mono text-xs text-faint group-hover:text-signal">view repo ↗</span>
          </div>
        </a>
      ))}
    </div>
  );
}

function ClientWork() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {clientWork.map((b) => (
        <article key={b.name} className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
          <div className="flex items-center gap-3 border-b border-line bg-raised px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-line" />
              <span className="size-2.5 rounded-full bg-line" />
              <span className="size-2.5 rounded-full bg-line" />
            </div>
            <div className="min-w-0 flex-1 truncate rounded bg-bg px-3 py-1 font-mono text-xs text-dim">
              {b.host}
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <p className="font-mono text-xs tracking-widest text-signal uppercase">{b.kind}</p>
            <h3 className="mt-1 text-2xl font-semibold">{b.name}</h3>
            <p className="mt-3 text-dim">{b.description}</p>
            <p className="mt-6 font-mono text-xs text-faint">what I built</p>
            <ul className="mt-2 space-y-2 text-sm text-dim">
              {b.built.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-signal">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {b.stack.map((s) => (
                <Tag key={s} tone={s === "Rust" ? "rust" : "default"}>
                  {s}
                </Tag>
              ))}
            </div>
            <a
              href={b.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-sm transition-colors hover:border-signal hover:text-signal"
            >
              visit {b.host} ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function Community() {
  return (
    <div className="space-y-6">
      {community.map((event) => (
        <article key={event.title} className="overflow-hidden rounded-xl border border-line bg-surface">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 font-mono text-xs">
            <span className="truncate text-faint">{event.host}</span>
            <span className="shrink-0 rounded border border-signal/40 px-1.5 py-0.5 text-[10px] tracking-wider text-signal uppercase">
              talk
            </span>
          </div>
          <div className="grid lg:grid-cols-[1.6fr_1fr]">
            <div className="border-b border-line lg:border-r lg:border-b-0">
              <HlsVideo src={event.video.src} poster={event.video.poster} title={event.title} />
              <div className="p-5 sm:p-6">
                <p className="font-mono text-xs tracking-widest text-signal uppercase">audience · {event.audience}</p>
                <h3 className="mt-1 text-2xl font-semibold">{event.title}</h3>
                <p className="mt-3 text-dim">{event.description}</p>
              </div>
            </div>
            <picture className="block">
              <source media="(min-width: 1024px)" srcSet={event.photo.web} />
              <img
                src={event.photo.mobile}
                alt={event.photo.alt}
                loading="lazy"
                className="aspect-[4/3] size-full object-cover lg:aspect-auto"
              />
            </picture>
          </div>
        </article>
      ))}
    </div>
  );
}

function Stack() {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((s) => (
        <div key={s.group} className="bg-surface p-5">
          <p className="font-mono text-xs tracking-widest text-faint uppercase">{s.group}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {s.items.map((item) => (
              <Tag key={item} tone={item === "Rust" ? "rust" : "default"}>
                {item}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
