import { useState } from 'react'
import './App.css'
import Counter from './components/counter'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col justify-center items-center'>
      <h2>Hitungan: {count}</h2>
      <div className='flex gap-4'>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow" onClick={() => setCount(count + 1)}>Tambah</button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow" onClick={() => setCount(count - 1)}>kurang</button>
      </div>
      
       <Counter/> 
      
    </div>
  )
}

export default App
