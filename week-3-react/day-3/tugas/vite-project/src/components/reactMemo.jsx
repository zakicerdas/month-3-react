import React, { useState } from "react";

function UnmemoizedChild({ value }) {
  console.log("UnmemoizedChild rendered");
  return (
    <div className="p-3 border rounded text-center">
      <p>Unmemoized: {value}</p>
    </div>
  );
}

const MemoizedChild = React.memo(function MemoizedChild({ value }) {
  console.log("MemoizedChild rendered");
  return (
    <div className="p-3 border rounded text-center bg-gray-50">
      <p>Memoized: {value}</p>
    </div>
  );
});

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 p-5">
      <h2 className="text-xl font-semibold">React.memo (Sederhana)</h2>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-indigo-500 text-white rounded"
        >
          count utama ({count})
        </button>
        <button
          onClick={() => setOther(other + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          count other ({other})
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 w-64">
        <UnmemoizedChild value={count} />
        <MemoizedChild value={count} />
      </div>

      <p className="text-sm text-gray-500 mt-2 text-center">
        Buka console → klik “Update Other” → lihat bedanya render di console.
      </p>
    </div>
  );
}
