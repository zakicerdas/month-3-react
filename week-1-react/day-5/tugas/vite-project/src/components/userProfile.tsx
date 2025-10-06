import React, { useState } from 'react';

function UserProfile(){
    const [nama, setNama] = useState("monica everett")
    const [umur, setUmur] = useState(16);
    const [isEditing, setIsEditing] = useState(false);

return(
    <div>
        <h2>profil istri</h2>
        { isEditing ? (
            <div className='flex gap-2 '>
                <input 
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="border border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input  
                type="number"
                value={umur}
                onChange={(e) => setUmur(Number(e.target.value))}
                className="border border-black rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className='bg-black text-white p-1 rounded-lg' onClick={() => setIsEditing(false)}>simpan</button>
            </div>
        ):(
            <div className='bg-blue-600 rounded-lg p-3 font-bold'>
                <p>nama: {nama}</p>
                <p>umur: {umur}</p>
                <button className='bg-black text-white p-1 rounded-lg' onClick={() => setIsEditing(true)}>edit profil</button>
            </div>
        )
           
        }
    </div>
    );
}

export default UserProfile;