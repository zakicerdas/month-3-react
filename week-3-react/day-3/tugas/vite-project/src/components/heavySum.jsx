import { useHeavySum } from "../hooks/useHeavySum";
import { useCounter } from "../hooks/useCounter";

export default function HeavySum() {
    const { count, increment, decrement, reset } = useCounter(1000, 100);
    const result = useHeavySum(count);

return(
       <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center items-center">
        <h3 className="text-lg font-medium mb-3">contoh useMemo</h3>
          <div className="flex items-center gap-2 mb-3">
        <button onClick={decrement} className="px-3 py-1 bg-gray-100 rounded hover:bg-blue-500 hover:translate-y-1 transition">
          -{100}
        </button>
        <div className="w-28 text-center">{count}</div>
        <button onClick={increment} className="px-3 py-1 bg-gray-100 rounded hover:bg-blue-500 hover:translate-y-1 transition">
          +{100}
        </button>
        <button onClick={reset} className="px-3 py-1 bg-gray-200 rounded hover:bg-blue-500 hover:translate-y-1 transition">
          Reset
        </button>
      </div>
        <div className="text-sm">
        <div className="font-semibold">Hasil:</div>
        <div className="mt-1">{result.toLocaleString()}</div>
      </div>
          <div className="text-xs text-gray-500 mt-3">
            ubah nilai count → lalu Buka console 
          </div>
</div>
)
}   