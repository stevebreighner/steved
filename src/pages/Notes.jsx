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
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="
            inline-block
            border
            border-zinc-800
            px-3
            py-2
            hover:border-zinc-500
            transition-colors
            mb-6
          "
        >
          ← Home
        </Link>

        <h1 className="text-3xl font-semibold text-center mb-8">
          Notes
        </h1>

        <section className="flex flex-col gap-4">
          {notes.length === 0 && (
            <p className="text-zinc-500">No notes yet</p>
          )}

          {notes.map((n, i) => (
            <Link
              key={i}
              to={`/notes/${i}`}
              className="
                block
                border
                border-zinc-800
                p-4
                hover:border-zinc-500
                transition-colors
                no-underline
                text-zinc-100
              "
            >
              <div>
                {n.text.length > 120
                  ? n.text.slice(0, 120) + "..."
                  : n.text}
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                {n.time}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}