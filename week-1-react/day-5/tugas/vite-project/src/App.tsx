import React from 'react'
import './App.css'
import Counter from './components/counter'
import UserProfile from './components/userProfile'
import ContactForm from './components/formContact'
import TodoList from './components/TodoList'
import Countier from './components/countier'

function App() {
  

  return (
  <>
  <div>
     {/*counter sederhana */} 
    <Countier/>
      {/*profile yang bisa diganti */}
       <div className='flex justify-center items-center'>
          <UserProfile/>
       </div>
       {/*form contact */}
       <div className='flex justify-center items-center gap-2'>
        <ContactForm/>
       </div>
    {/*todolist */}
       <div className='flex justify-center items-center'>
        <TodoList/>
       </div>
       {/*counter update */}
       <div className='flex justify-center items-center'>
        <Counter/>
       </div>
  </div>
  

  </>   
      
  )
}

export default App
