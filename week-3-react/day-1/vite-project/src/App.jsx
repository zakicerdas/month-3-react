import './App.css'
import Navbar from './components/navbar';
import ThemeProvider from './components/themeProvider';
import Home from './components/home';
import { UserProvider } from './context/userContext';
import UserInfo from './components/userInfo';
import { LanguageProvider } from './context/languageContext';
import { NotificationProvider } from './context/notificationContext';
import Pages from './components/pages';
import { CartProvider } from "./context/cartContext";
import ProductList from "./components/productList";
import CartBadge from "./components/CartBadge";

function App() {

  return (
    <>
    <ThemeProvider>
      <CartProvider>
      <UserProvider>
        <LanguageProvider>
          <NotificationProvider>
      <div className="min-h-screen transition-all duration-500">
          <Navbar/>
          <Pages/>
          <Home/>
          <UserInfo/>
          <div className='absolute right-2'>
            <CartBadge/>
          </div>
          
          <ProductList/>
         </div>
         </NotificationProvider>
        </LanguageProvider> 
      </UserProvider>
      </CartProvider>
    </ThemeProvider>
     
    </>
  )
}

export default App
