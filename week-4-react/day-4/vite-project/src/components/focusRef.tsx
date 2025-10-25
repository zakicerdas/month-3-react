import { useRef } from "react";

const FocusRefDemo = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <h1 className="text-xl font-bold mb-4 text-sky-700">useRef – Fokus Input Simpel</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Klik tombol di bawah untuk fokus"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
      />

      <button
        onClick={handleFocus}
        className="mt-4 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md shadow"
      >
        Fokus ke Input
      </button>
    </div>
  );
};

export default FocusRefDemo;
