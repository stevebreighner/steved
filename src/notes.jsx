import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/notes.json")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch(() => setNotes([]));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-xl flex items-center gap-4 mb-8">
        <Link
          to="/"
          className="
            border
            border-zinc-800
            px-3
            py-2
            hover:border-zinc-500
            transition-colors
          "
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-semibold">Notes</h1>
      </header>

      {/* Notes list */}
      <section className="w-full max-w-xl flex flex-col gap-4">
        {notes.length === 0 && (
          <p className="text-zinc-500">No notes yet</p>
        )}

        {notes.map((n, i) => (
          <div
            key={i}
            className="
              border
              border-zinc-800
              p-4
              hover:border-zinc-600
              transition-colors
            "
          >
            <div>{n.text}</div>

            <div className="mt-1 text-sm text-zinc-500">
              {n.time}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}