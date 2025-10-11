import axios from "axios";
import { useState, useEffect } from "react";

function DataManip() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://umapyoi.net/api/v1/character/info");
        const dataFilter = res.data
        .map(char => ({
            id: char.id,
            profile: char.thumb_img,
            name: char.name_en,
            slogan: char.slogan,
            grade: char.grade
        }))
        .filter(char => char.grade === "High School");

        setData(dataFilter);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Memuat data...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (data.length === 0) return <p>Tidak ada yang berada di high school.</p>;

  return (
    <div className="flex items-center justify-center flex-col">
      <h2>Daftar Pengguna (Manipulasi Data)</h2>
      <ul className="shadow-md rounded-md">
        {data.map(char => (
          <li key={char.id}>
            <img src={char.profile} alt="Img" />
            <strong>{char.name}</strong><br /> ({char.slogan}) <br />{char.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataManip;