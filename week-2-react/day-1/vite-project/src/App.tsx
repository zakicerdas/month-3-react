import './App.css'
import EventHandler from './components/eventHandle'
import SyntheticEvent from './components/syntheticEvent'
import ControlledForm from './components/controlled'
import UncontrolledForm from './components/uncontrolled'
import ValidationForm from './components/validationForm'




function App() {
  

  return (
   <>
      <div className="min-h-screen bg-gradient-to-b from-purple-200 to-pink-100">
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2">
          <EventHandler />
        </div>

        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-4">
          <SyntheticEvent />
        </div>

        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-4">
          <ControlledForm />
        </div>

        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-4">
          <UncontrolledForm />
        </div>

        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-4">
          <ValidationForm />
        </div>
      </div>
    </>
  );
}

export default App
