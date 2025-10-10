import React, { useState, useEffect } from "react";

export default function MultipleEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");


  useEffect(() => {
    document.title = `total:${count}`; 
    console.log(`hitungan: ${count}`);
  }, [count]); 

  useEffect(() => {
    if (name !== "") {
      console.log(` Nama diganti: ${name}`);
    }
  }, [name]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-indigo-600 mb-4">
        Multiple useEffect
      </h1>

      <div className="bg-white p-5 rounded-xl shadow-md text-center w-72">
        <p className="mb-2">Count: {count}</p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition mb-4"
        >
          Tambah 
        </button>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ketik nama..."
          className="border rounded-lg p-2 w-full"
        />
        <p className="mt-2 text-gray-600">Nama: {name || "-"}</p>
      </div>
    </div>
  );
}