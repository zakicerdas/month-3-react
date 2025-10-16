import { useFetch } from "../hooks/fetch";

export default function UmaInfo() {
  const { data, loading, error } = useFetch(
    "https://umapyoi.net/api/v1/character/10373"
  );

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

if(loading) return <p className="text-center">memuat data..</p>
if(error) return <p className="text-center text-red-600">{error.message}</p>
if(!data) return <p className="text-center">data tidak ditemukan</p>

return(
  <div className="flex items-center justify-center"> 
    <div className="flex items-center justify-center flex-col shadow-md rounded-md w-120">
      <img src={data.thumb_img} alt="fetch" className="w-40  rounded-md shadow-md" />
      <p className="mt-2 font-semibold text-black-400">{data.name_en}</p>
      <button className="rounded-full bg-pink-400 p-2 hover:translate-y-1 hover:bg-pink-500 transition" onClick={playVoice}>🔊</button>
      <p className="text-gray-600 italic text-center">{data.slogan}</p>
    </div>
  </div>
     
)
}