import { useState } from "react";
import Notes from "./Notes";

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

function CardButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="
        block
        w-52
        border
        border-zinc-800
        p-4
        text-zinc-100
        hover:border-zinc-500
        transition-colors
      "
    >
      {children}
    </button>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  if (page === "notes") {
    return <Notes onBack={() => setPage("home")} />;
  }

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

        <CardButton onClick={() => setPage("notes")}>
          Notes
        </CardButton>
      </section>
    </main>
  );
}