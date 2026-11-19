import { useState } from "react";
import { CONTACT_EMAIL } from "~/data/profile";

const field =
  "w-full rounded-md border border-line bg-bg px-3 py-2.5 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-signal";
const label = "mb-1.5 block font-mono text-xs text-dim";

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [opened, setOpened] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || `Hello from ${name}`;
    const message = String(data.get("message") ?? "").trim();
    const body = `${message}\n\n— ${name}${email ? ` <${email}>` : ""}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 font-mono text-xs">
        <span className="text-faint">
          POST <span className="text-ink">mailto:{CONTACT_EMAIL}</span>
        </span>
        <button
          type="button"
          onClick={copyEmail}
          className="shrink-0 rounded border border-line px-2 py-1 text-dim transition-colors hover:border-signal hover:text-signal"
        >
          {copied ? "copied ✓" : "copy"}
        </button>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
        <div>
          <label htmlFor="name" className={label}>
            name
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Ada Lovelace" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            reply_to
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ada@company.com"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className={label}>
            subject
          </label>
          <input id="subject" name="subject" placeholder="Backend role / contract work / just saying hi" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            body
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="What are you building, and where can I help?"
            className={`${field} resize-y`}
          />
        </div>
        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-faint">
            {opened ? "→ opened in your mail app. Didn't open? Use copy above." : "Opens your mail app with this pre-filled."}
          </p>
          <button
            type="submit"
            className="rounded-md bg-signal px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            send →
          </button>
        </div>
      </form>
    </div>
  );
}
