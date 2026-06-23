import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Note from "./pages/Note";

// import Bio from "./pages/Bio";

export default function AppRoutes() {
  return (
    <Routes>      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} /><Route path="/notes/:id" element={<Note />} />
</Route>
    </Routes>
  );
}
