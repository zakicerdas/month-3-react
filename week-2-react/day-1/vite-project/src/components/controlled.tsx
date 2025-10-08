import React, { useState } from "react";

function ControlledForm() {
  const [nama, setNama] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hai, ${nama}! Form berhasil dikirim`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-center mt-12"
    >
      <h2 className="mb-3">Controlled Component</h2>
      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Masukkan nama kamu..."
        className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100'
      />
      <button
        type="submit"
        className='flex-1 w-full py-2 mt-2 bg-blue-500 text-white p-1 rounded-lg hover:bg-blue-600 transition'
      >
        Kirim
      </button>
      <p>Nama: {nama}</p>
    </form>
  );
}

export default ControlledForm;