import './App.css'
import FetchDataComponent from './components/fetchAPI'
import AxiosDataComponent from './components/axiosFetch'
import ErrorLoadHandle from './components/errorLoadingHandling'
import AbortComponent from './components/abortController'
import DataManip from './components/dataManip'

function App() {

  return (
    <>
    <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
      <FetchDataComponent/>
     </div>
       <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
      <AxiosDataComponent/>
       </div>
    <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
      <ErrorLoadHandle/>
    </div>
      <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
      <AbortComponent/>
      </div>
     <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
      <DataManip/>
     </div>
    </>
  )
}

export default App
