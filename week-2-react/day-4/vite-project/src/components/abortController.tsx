import axios from "axios";
import { useState, useEffect } from "react";

function AbortComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
const playVoice = () => {
    if (!data?.voice) {
      alert("Suara tidak tersedia untuk karakter ini!");
      return;
    }

    const audio = new Audio(data.voice);
    audio.volume = 0.9; 
    audio.play().catch(() => {
      console.log("tidak dapat memutar audio");
    });
  };
const abortController = new AbortController(); 
const signal = abortController.signal;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://umapyoi.net/api/v1/character/4879",{signal});
        setData(res.data);
      } catch (err) {
       if(err.name === 'abortError') {
        console.log("fetch batal")
       } else {
          setError(err);
      } 
        }finally {
        setLoading(false);
      }
    };

    fetchData();

     return () => {
      abortController.abort();
      console.log('Permintaan dibatalkan saat cleanup.');
     }
  }, []);

  if (loading) return <p>Memuat data...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (!data) return <p>Tidak ada data</p>;

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Abort component</h1>
      <img src={data.thumb_img} alt="fetch" className="w-40  rounded-md shadow-md" />
      <p className="mt-2 font-semibold text-blue-400">{data.name_en}</p>
      <button className="rounded-full bg-pink-400 p-2" onClick={playVoice}>🔊</button>
      <p className="text-gray-600 italic">{data.slogan}</p>
    </div>
  );
}

export default AbortComponent;