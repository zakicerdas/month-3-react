import React, { lazy, Suspense } from "react";
import { usePage } from "../hooks/usePage";

// Lazy import halaman
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Warning = lazy(() => import("../pages/warning"));

export default function LazyNavWithHook() {
  const { page, changePage } = usePage("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "warning":
        return <Warning />;
      default:
        return <div className="text-gray-500">Halaman tidak ditemukan.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-blue-600 text-white p-3">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <h1 className="font-semibold">🌸 Lazy Load Demo (usePage Hook)</h1>
          <div className="space-x-2">
            <button
              onClick={() => changePage("home")}
              className={`px-3 py-1 rounded ${
                page === "home" ? "bg-white text-blue-600" : "hover:bg-blue-500"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => changePage("about")}
              className={`px-3 py-1 rounded ${
                page === "about" ? "bg-white text-blue-600" : "hover:bg-blue-500"
              }`}
            >
              About
            </button>
            <button
              onClick={() => changePage("warning")}
              className={`px-3 py-1 rounded ${
                page === "warning" ? "bg-white text-blue-600" : "hover:bg-blue-500"
              }`}
            >
              Warning
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 p-6 max-w-3xl mx-auto">
        <Suspense fallback={<div className="text-gray-500">Loading halaman...</div>}>
          {renderPage()}
        </Suspense>
      </main>
    </div>
  );
}