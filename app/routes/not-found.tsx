import { Link, useLocation } from "react-router";
import type { Route } from "./+types/not-found";

export function meta(_: Route.MetaArgs) {
  return [{ title: "404 · festusyuma" }];
}

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <main className="mx-auto flex min-h-[70dvh] max-w-3xl flex-col justify-center px-4 font-mono sm:px-6">
      <p className="text-sm text-faint">$ curl -I {pathname}</p>
      <h1 className="mt-4 text-5xl font-bold text-warn">HTTP 404</h1>
      <p className="mt-3 text-dim">No route matches this path.</p>
      <Link to="/" className="mt-8 text-signal hover:underline">
        ← cd ~
      </Link>
    </main>
  );
}
