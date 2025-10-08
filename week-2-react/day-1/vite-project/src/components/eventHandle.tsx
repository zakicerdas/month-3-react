import React, { useState } from "react";

function EventHandler() {
  const [message, setMessage] = useState("Arahkan mouse ke tombol");
  const [imgSize, setImgSize] = useState(1);

  const handleClick = () => {
    setMessage("");
  };

  const handleMouseEnter = () => {
    setMessage("💗ྀི💗ྀི💗ྀི💗ྀི💗ྀི💗ྀི");
    setImgSize(1);
  };

  const handleMouseLeave = () => {
    setMessage("my istri 💗ྀི");
    setImgSize(0.3);
  };

  return (
    <div  className="text-center mt-12">
      <h2 className="mb-1">Event Handler Sederhana</h2>
      <img
        src="https://image-cdn.flowgpt.com/trans-images/1754801401371-622b1b8d-b01c-4008-b94c-045deba779f1.default.webp"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{transform: `scale(${imgSize})`}}
        className="rounded-xl shadow-lg cursor-pointer transition-transform duration-200 ease-in-out hover:shadow-2xl"/>

      <p className="mt-10">{message}</p>
    </div>
  );
}

export default EventHandler;