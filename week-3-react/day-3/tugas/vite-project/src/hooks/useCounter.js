import { useState } from "react";

export function useCounter(initial = 1000, step = 100) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => Math.max(step, c - step));
  const reset = () => setCount(initial);

  return { count, increment, decrement, reset };
}