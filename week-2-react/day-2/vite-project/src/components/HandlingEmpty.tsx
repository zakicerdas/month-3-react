import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]); 
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        daftar barang
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="tambahkan barang..."
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Tambah
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500 italic">
          Barangnya kosong nih, Tambahkan satu yuk~
        </p>
      ) : (
        <ul className="bg-white rounded-lg shadow-md p-4 w-80">
          {items.map((item, index) => (
            <li key={index} className="border-b py-2 last:border-none">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;