import React from "react";

function Card({ mode }) {
  return (
    <div className="text-center mt-4">
      {mode === "admin" ? (
        <p>Aku admin kau <strong className="line-through font-normal">budak</strong> member.</p>
      ) : (
        <p>Halo member.</p>
      )}
    </div>
  );
}

export default Card;