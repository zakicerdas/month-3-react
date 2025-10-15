import { useContext } from 'react';
import ThemeContext from '../context/themeContext';
import icon from "../assets/kaichou-removebg-preview.png";
import { useUser } from "../context/userContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {user} = useUser();
 

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center transition-all duration-500 ${
        theme === 'light' ? 'bg-blue-400 text-black' : 'bg-gray-800 text-white'
      }`}>
      <div className='flex items-center gap-3'>
      <img src={icon} alt="kaichou"  className={`w-20 h-10 object-cover rounded-full ${
        theme === 'light' ? 'bg-yellow-300' : 'bg-white'
      }`}/>

       <div>
        {user.name ? (
          <p className="font-medium">{user.name}</p>
        ) : (
          <p className="italic opacity-70">guest</p>
        )}
      </div>
     </div>
      <button 
      onClick={toggleTheme}
      className={`absolute right-4  px-2 py-2 rounded-full bg-white text-black hover:bg-gray-200${
        theme === 'light' ? 'bg-blue-400' : 'bg-gray-800'
      }`}
      >
       {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

export default Navbar;