import './App.css'
import { ShowHideText } from './components/showHide'
import UmaInfo from './components/viewUma'
import UmaInfoToggle from './components/viewHiddenFetch.jsx'
import Form from './components/submitForm.jsx'


function App() {

  return (
    <>
      <div>
        <ShowHideText/>
        <UmaInfo/>
        <UmaInfoToggle/>
        <Form/>
      </div>
    </>
  )
}

export default App
