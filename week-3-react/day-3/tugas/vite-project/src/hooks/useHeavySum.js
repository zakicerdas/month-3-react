import { useMemo } from "react";

export function useHeavySum(limit) {
  const result = useMemo(() => {
    console.log("[useHeavySum] compute for n =", limit);
    let total = 0;
    for (let i = 1; i <= limit; i++) {
      total += i * i;
    }
    return total;
  }, [limit]);

  return result;
}