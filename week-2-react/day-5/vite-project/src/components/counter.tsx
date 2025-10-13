import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Aksi tidak dikenal: " + action.type);
  }
}

export default function CounterReducer() {

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        ⚙️ Counter
      </h1>

      <div className="text-6xl font-bold text-indigo-900 mb-8">
        {state.count}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
        Tambah
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
        Kurang
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
        Reset
        </button>
      </div>
    </div>
  );
}