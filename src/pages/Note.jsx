import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Note() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetch("/notes.json")
      .then((res) => res.json())
      .then((data) => {
        setNote(data[Number(id)]);
      })
      .catch(() => setNote(null));
  }, [id]);

  if (!note) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/notes"
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
            ← Notes
          </Link>

          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/notes"
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
          ← Notes
        </Link>

        <div className="text-sm text-zinc-500 mb-6">
          {note.time}
        </div>

        <article className="whitespace-pre-wrap leading-relaxed">
          {note.text}
        </article>
      </div>
    </main>
  );
}
