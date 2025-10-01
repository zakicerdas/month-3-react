import { useState } from 'react'
import umaLogo from './assets/chiyono.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://umamusume.com/" target="_blank">
          <img src={umaLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Ragumu Rugimu</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on uma logo to learn more
      </p>
    </>
  )
}

export default App
