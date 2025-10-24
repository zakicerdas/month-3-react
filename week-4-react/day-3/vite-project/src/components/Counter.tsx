import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../apps/store';
import { increment, decrement, incrementByAmount, reset } from '../features/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>(); 

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl mb-3">Counter: {count}</h1>
      <div className="flex gap-2 justify-center">
        <button className='bg-blue-500 p-2 hover:bg-red-700 hover:translate-y-0.5 transition rounded-md' onClick={() => dispatch(increment())}>+1</button>
        <button className='bg-blue-500 p-2 hover:bg-red-700 hover:translate-y-0.5 transition rounded-md' onClick={() => dispatch(decrement())}>-1</button>
        <button className='bg-blue-500 p-2 hover:bg-red-700 hover:translate-y-0.5 transition rounded-md' onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button className='bg-blue-500 p-2 hover:bg-red-700 hover:translate-y-0.5 transition rounded-md' onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}