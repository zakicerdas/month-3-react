import './App.css'
import Counter from './components/Counter'
import GachaCards from './components/gacha'

function App() {

  return (
    <>
   <div>
      <h1 className="text-2xl font-bold mb-4">Redux Toolkit Example</h1>
      <Counter />
      <h2 className="text-xl font-semibold mt-8 mb-4">Gacha Banners</h2>
      <GachaCards />
   </div>
    </>
  )
}

export default App
