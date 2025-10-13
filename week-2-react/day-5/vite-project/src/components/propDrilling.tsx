import React,{useContext, createContext} from "react";

const UserContext = createContext();

export function Parent({user}){
    return (
         <div className="bg-white shadow-xl rounded-2xl p-6 w-80 mb-4">
      <p className="text-gray-700 font-semibold mb-2">Parent</p>
      <Child user={user} />
    </div>
    )
}

function Child({user}){
    return(
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
      <p className="text-gray-700 font-medium mb-2">Child</p>
      <GrandChild user={user} />
    </div>
    )
}

function GrandChild() {

    const user = useContext(UserContext)

    return(
        <div className="bg-indigo-200 text-indigo-900 rounded-xl p-4 shadow-inner">
      <p className="font-semibold text-lg">Halo, {user.name}!</p>
      <p>hobi: {user.hobby}</p>
      <p>Waifu: {user.waifu}</p>
      </div>
    )
}

export { UserContext };

