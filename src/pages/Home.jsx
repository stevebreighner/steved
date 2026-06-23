function CardLink({ href, children }) {
  return (
    <a
      href={href}
      className="
        block
        w-52
        border
        border-zinc-800
        p-4
        text-zinc-100
        no-underline
        hover:border-zinc-500
        transition-colors
      "
    >
      {children}
    </a>
  );
}

import { Link } from "react-router-dom";

function CardButton({ to, children }) {
  return (
    <Link
      to={to}
      className="
        block
        w-52
        border
        border-zinc-800
        p-4
        text-zinc-100
        no-underline
        hover:border-zinc-500
        transition-colors
      "
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Steve Drawings</h1>
        <p className="mt-1 text-zinc-500">Portal</p>
      </header>

      <section className="grid justify-center gap-4">
        <CardLink href="https://www.stephenbreighner.com">
          Artwork
        </CardLink>

        <CardLink href="https://www.tiktok.com/@stevedrawings2">
          TikTok
        </CardLink>

        <CardButton to="/notes">
          Notes
        </CardButton>
      </section>
    </main>
  );
}