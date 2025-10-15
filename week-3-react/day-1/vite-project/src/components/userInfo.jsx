import { useUser } from "../context/userContext";

export default function UserInfo() {
  const { user, logout } = useUser();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 gap-3 pt-2 shadow-md rounded-md ">
      {user.isLoggedIn ? (
        <>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
          <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:translate-y-1 transition" 
          onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p className="text-gray-400">Belum login.</p>
      )}
    </div>
  );
}