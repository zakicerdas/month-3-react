import { useState } from 'react';
import MyComp from './components/myComponents';
import UserProfile from './components/depenArray';
import SizeDetection from './components/cleanupFunction';
import MultipleEffectExample from './components/multipleHook';
import TimerCount from './components/fetchData';
import './App.css';

function App() {
const [currentUserId, setCurrentUserId] = useState(1);
const [showTracker, setShowTracker] = useState(true);


  return (
    <>
    <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
        <MyComp/>
    </div>
     <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
       <h1> Cek Profil Pengguna</h1>
      <UserProfile userId={currentUserId} />
      <button className='bg-blue-500 p-3 mt-2 hover:translate-y-2 rounded-md transition' onClick={() => setCurrentUserId(prevId => prevId + 1)}>
        ❯❯❯❯
      </button>
     </div>
      <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
          <h1>Pelacak Ukuran Jendela</h1>
      <button className='bg-blue-500 p-3 mt-2 hover:translate-y-2 rounded-md transition' onClick={() => setShowTracker(prev => !prev)}>
        {showTracker ? 'Sembunyikan' : 'Tampilkan'} track
      </button>
      {showTracker && <SizeDetection/>}
      </div>
      <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
        <MultipleEffectExample/>
      </div>
      <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center'>
        <TimerCount/>
      </div>
    </>
  )
}

export default App
