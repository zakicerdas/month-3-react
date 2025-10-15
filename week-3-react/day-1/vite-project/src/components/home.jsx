import { useState } from "react";
import { useUser } from "../context/userContext";

export default function LoginForm() {
  const { login } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(name, email);
    };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-3 pt-15"
    >
      <h2 className="text-2xl font-semibold">Login</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter username"
        className="border border-gray-400 p-2 rounded-md w-60 focus:ring-blue-400"
      />
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="border border-gray-400 p-2 rounded-md w-60 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:translate-y-1 transition"
      >
        Login
      </button>
    </form>
  );
}
