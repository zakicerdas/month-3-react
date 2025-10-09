import { useState } from "react";

function UserStatus() {
  const [status, setStatus] = useState("guest");

  let message; 

  switch (status) {
    case "noble":
      message = (
        <p className="text-blue-600 font-semibold">
           selamat datang Count!
        </p>
      );
      break;

    case "slave":
      message = (
        <p className="text-red-600 font-semibold">
          kerja woi budak!
        </p>
      );
      break;

    case "king":
      message = (
        <p className="text-yellow-500 italic">
          WELCOME KING!
        </p>
      );
      break;

    default:
      message = <p className="text-gray-500">Siapa kau?</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">
        👥 Switch Statement di React
      </h2>

      {message}

      <div className="flex gap-2">
        <button
          onClick={() => setStatus("king")}
          className="px-3 py-2 bg-yellow-300 text-white rounded hover:translate-y-2 hover:bg-yellow-400 transition"
        >
          king
        </button>
        <button
          onClick={() => setStatus("slave")}
          className="px-3 py-2 bg-red-600 text-white rounded hover:translate-y-2 hover:bg-red-700 transition"
        >
          slave
        </button>
        <button
          onClick={() => setStatus("noble")}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:translate-y-2 hover:bg-blue-700 transition"
        >
          noble
        </button>
      </div>
    </div>
  );
}

export default UserStatus;