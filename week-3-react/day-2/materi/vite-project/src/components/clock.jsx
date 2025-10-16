import bgEly from "../assets/elysia.jpg"
import { useState, useEffect } from "react";

function useClock(){
    const [time,setTime]= useState(new Date());
    useEffect (() => {
        const interval = setInterval(() =>setTime (new Date()), 1000);
        return () => clearInterval(interval);
    }, []);
    return time; 
}

export default function ElyClock(){
    const time = useClock();
    return(
       <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bgEly})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-pink-200">
      <div className="flex justify-center text-center animate-pulse text-pink-600 text-xl">♡  ♡  ♡  ♡  ♡  ♡</div>
        <h1 className="text-4xl font-semibold mb-4 tracking-widest text-pink-100 drop-shadow">
          ✿ Elysia Time ✿
        </h1>
        <p className="text-6xl font-mono text-white drop-shadow-lg">
          {time.toLocaleTimeString("en-GB", { hour12: false })}
        </p>
        <p className="mt-4 text-lg text-pink-50 drop-shadow-sm">
          {time.toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );

}