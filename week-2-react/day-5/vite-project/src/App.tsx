import './App.css'
import Calculator from './components/calculator'
import { Parent, UserContext } from './components/propDrilling'
import Parents from './components/siblingComp'
import CounterReducer from './components/counter'
import ThemeToggle from './components/toggleTheme'


function App() {

const user = {
  name: "rehan",
  hobby: "gooning",
  waifu: "mon3tr"
}
  return (
    <>
      <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
        <Calculator/>
      </div>
         <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
         <UserContext.Provider value={user}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-6">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          🌐 Contoh Context
        </h1>
        <Parent/>
      </div>
    </UserContext.Provider>
         </div>
         <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
          <Parents/>
         </div>

         <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
          <CounterReducer/>
         </div>

          <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
          <ThemeToggle/>
          </div>
    </>
  )
}

export default App
