import { useState, useMemo } from "react";

function HeavyComponent({ count }) {
  console.log("🔥 HeavyComponent render");
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return <p>Heavy Component Count: {count}</p>;
}

function OptimizedHeavyComponent({ count }) {
  const total = useMemo(() => {
    console.log("💎 OptimizedHeavyComponent dihitung ulang");
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return <p>Optimized Component Count: {count}</p>;
}

export default function ProfilingSimple() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h3>⚙️ Performance Profiling Sederhana</h3>

      <button onClick={() => setCount(count + 1)}>Tambah Count ({count})</button>
      <button onClick={() => setOther(other + 1)} style={{ marginLeft: 10 }}>
        Update State Lain ({other})
      </button>

      <hr />
      <HeavyComponent count={count} />
      <OptimizedHeavyComponent count={count} />
    </div>
  );
}