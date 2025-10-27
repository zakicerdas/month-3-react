import './App.css'
import BasicForm from './components/basicForm'
import MultiStepForm from './components/multiForm'
import FileUploadRealtimeForm from './components/fileUpload'
import DynamicTeamFormWithZod from './components/dynamicForm'

function App() {
  

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
        <BasicForm />
      </div>

      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
        <MultiStepForm />
      </div>
      
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
        <FileUploadRealtimeForm />
      </div>

      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
        <DynamicTeamFormWithZod />
      </div>
    </>
  )
}

export default App
