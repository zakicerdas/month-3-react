import React, { useState } from "react";

function SyntheticEvent() {
  const [inputValue, setInputValue] = useState("");

  const handleLinkClick = (e) => {
    e.preventDefault(); 
    alert("mau kemana bre 😎");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='text-center mt-12'>
      <h2>Synthetic Event</h2>
      <a href="https://google.com" onClick={handleLinkClick}>
        Klik link
      </a>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ketik sesuatu..."
        className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100'

      />
      <p>hasil: {inputValue}</p>
    </div>
  );
}

export default SyntheticEvent;