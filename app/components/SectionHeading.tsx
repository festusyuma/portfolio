export function SectionHeading({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs tracking-widest text-signal uppercase">
        {index} <span className="text-faint">//</span>
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {lede && <p className="mt-3 text-dim">{lede}</p>}
    </div>
  );
}

export function Tag({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "rust" }) {
  return (
    <span
      className={`inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[11px] ${
        tone === "rust" ? "border-rust/40 text-rust" : "border-line text-dim"
      }`}
    >
      {children}
    </span>
  );
}
