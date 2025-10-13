import React, { useState } from "react";

function InputComp({sharedText, onTextChange}){
    return(
        <div className="bg-indigo-100 p-4 rounded-xl shadow-md w-full">
      <h2 className="font-semibold text-indigo-800 mb-2">Input Component</h2>
      <input
        type="text"
        value={sharedText}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="tulis something boss..."
        className="w-full border border-indigo-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
      />
    </div>
    );
}

function DisplayComp({sharedText}) {
    return(
           <div className="bg-green-100 p-4 rounded-xl shadow-md w-full">
      <h2 className="font-semibold text-green-800 mb-2">Display Component</h2>
      <p className="text-lg">
        Isi saat ini:{" "}
        <span className="font-bold text-green-700">
          {sharedText || "Belum ada teks"}
        </span>
      </p>
    </div>
    );
}

export default function Parents() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-100 p-6 space-y-6 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">
        Komponen Sibling
      </h1>

      <InputComp sharedText={text} onTextChange={setText} />

      <DisplayComp sharedText={text} />
    </div>
  );
}