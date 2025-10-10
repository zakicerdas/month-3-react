import { useState,useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => {
        setUser(data);
        setLoading(false);
    })
    .catch(err => {
        console.error(err.message);
        setLoading(false);
    })

      }, [userId]); 

  if (loading) return <p>Mencari data ...</p>;
  if (!user) return <p>data tidak ditemukan.</p>;

  return (
    <div className="shadow-md rounded-xl hover:translate-y-1 transition pt-5">
      <h2>Profil</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
 
export default UserProfile;

