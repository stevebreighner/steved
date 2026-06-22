import { useEffect, useState } from "react";

export default function Notes({ onBack }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/notes.json")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch(() => setNotes([]));
  }, []);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <button onClick={onBack} style={styles.back}>
          ← Back
        </button>

        <h1>Notes</h1>
      </header>

      <section style={styles.list}>
        {notes.length === 0 && <p style={{ opacity: 0.6 }}>No notes yet</p>}

        {notes.map((n, i) => (
          <div key={i} style={styles.note}>
            <div>{n.text}</div>
            <div style={styles.time}>{n.time}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

const styles = {
  page: {
    background: "#0f0f0f",
    color: "#f2f2f2",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "sans-serif",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  header: {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },

  back: {
    background: "none",
    border: "1px solid #333",
    color: "#f2f2f2",
    padding: "0.4rem 0.7rem",
    cursor: "pointer",
  },

  list: {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  note: {
    padding: "1rem",
    border: "1px solid #333",
  },

  time: {
    fontSize: "0.8rem",
    opacity: 0.6,
    marginTop: "0.3rem",
  },
};