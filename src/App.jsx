import { useState } from "react";

export default function App() {
  const [showBio, setShowBio] = useState(false);

  return (
    <main>
      <h1>Steve Drawings</h1>

      <p>Artist. Cyclist. Projects.</p>

      <button onClick={() => setShowBio(!showBio)}>
        {showBio ? "Hide Intro" : "Show Intro"}
      </button>

      {showBio && (
        <div>
          <p>
            Welcome to my corner of the internet.
          </p>

          <p>
            Here you'll find artwork, photography,
            cycling adventures, and whatever else
            I'm working on.
          </p>
        </div>
      )}

      <hr />

      <a href="https://www.stephenbreighner.com">Artwork</a>
      <br />
      <a href="https://www.tiktok.com/@stevedrawings2">TikTok</a>
      <br />
    
    </main>
  );
}