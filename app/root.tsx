import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0c0f" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-dvh font-sans">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <div className="min-h-dvh bg-bg" />;
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let code = "500";
  let details = "Something went wrong.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    code = String(error.status);
    details = error.status === 404 ? "No route matches this path." : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-4 font-mono sm:px-6">
      <p className="text-sm text-faint">$ curl -I {typeof window !== "undefined" ? window.location.pathname : "/"}</p>
      <h1 className="mt-4 text-5xl font-bold text-warn">HTTP {code}</h1>
      <p className="mt-3 text-dim">{details}</p>
      {stack && (
        <pre className="mt-6 overflow-x-auto rounded-lg border border-line bg-surface p-4 text-xs text-dim">
          <code>{stack}</code>
        </pre>
      )}
      <Link to="/" className="mt-8 text-signal hover:underline">
        ← cd ~
      </Link>
    </main>
  );
}
