import './App.css'
import Card from './components/RenderingList'
import Greeting from './components/ConRendering'
import ItemList from './components/HandlingEmpty' 
import ProductList from './components/TernOperator'
import UserStatus from './components/SwitchState'

function App() {
 
const productData =[
  { id: 1, name: "Laptop ROG Zephyrus", price: 21500000, category: "Elektronik" },
]
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center">
        <Greeting isLoggedIn={true}/>
        <Greeting isLoggedIn={false}/>
      </div>

      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2">
        <Card mode="admin"/>
        <Card mode="member"/>
      </div>

       <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center">
        <UserStatus/>
       </div>

        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center">
          <ProductList products={productData}/>
        </div>
       <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg m-2 text-center">
       <ItemList/>
      </div>
    </>
  )
}

export default App
