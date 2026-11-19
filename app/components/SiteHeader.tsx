import { Link, NavLink } from "react-router";

const nav = [
  { to: "/#experience", label: "experience" },
  { to: "/#open-source", label: "open-source" },
  { to: "/#architecture", label: "architecture" },
  { to: "/#client-work", label: "client work" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-signal">~/</span>festusyuma
        </Link>
        <nav className="flex items-center gap-1 font-mono text-[13px]">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hidden rounded-md px-2.5 py-1.5 text-dim transition-colors hover:bg-raised hover:text-ink md:block"
            >
              {item.label}
            </Link>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `ml-1 rounded-md border px-3 py-1.5 transition-colors ${
                isActive
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-line text-ink hover:border-signal hover:text-signal"
              }`
            }
          >
            contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
