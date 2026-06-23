import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Outlet />

        <footer className="mt-16 pt-6 border-t border-zinc-800 text-center text-sm text-zinc-500">
          © 2026 Stephen Breighner
        </footer>
      </div>
    </main>
  );
}
