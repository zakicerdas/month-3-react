import { useState } from "react";
import themeContext from "../context/themeContext";

function themeProvider({children}){
    const [theme, setTheme]= useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const contextVal = {theme, toggleTheme};

    return (
        <themeContext.Provider value= {contextVal}>
            {children}
        </themeContext.Provider>
    );
} 

export default themeProvider;
