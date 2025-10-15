import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({name: "", email: "", isLoggedIn: false});

   const login = (name, email) => {
    setUser({ name, email, isLoggedIn: true });
  };

  const logout = () =>{
    setUser({ name: "", email: "", isLoggedIn: false})
  }

  return (
    <UserContext.Provider value={{ user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}