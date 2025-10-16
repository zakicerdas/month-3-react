import React from "react";
import useFetchWithToggle from "../hooks/toggleFetch";

export default function UmaInfoToggle({ characterId = 4879, initialVisible = false }) {
  const url = `https://umapyoi.net/api/v1/character/${characterId}`;
  const { isVisible, toggle, data, loading, error } = useFetchWithToggle(url, initialVisible);

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

  return (
    <div className="flex items-center justify-center mt-4 shadow-md rounded-md">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-2">
          <button
            onClick={toggle}
            className={`px-3 py-1 rounded-md text-white transition ${
              isVisible ? "bg-pink-500 hover:bg-pink-600" : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
            {isVisible ? "Sembunyikan" : "Tampilkan"}
          </button>
        </div>

        {!isVisible && (
          <div className="p-4 bg-white/60 rounded-md shadow text-center text-gray-500 w-72">
            Tekan <b>Tampilkan</b> untuk memuat informasi karakter.
          </div>
        )}

        {isVisible && (
          <div className="p-4 bg-white rounded-md shadow w-72 flex flex-col items-center">
            {loading && <p className="text-sm text-pink-500 animate-pulse">Memuat data...</p>}

            {error && (
              <p className="text-sm text-red-600 text-center">
                Gagal mengambil data: {error.message}
              </p>
            )}

            {!loading && !error && !data && (
              <p className="text-sm text-gray-500">Data tidak ditemukan.</p>
            )}

            {!loading && !error && data && (
              <>
                <img
                  src={data.thumb_img}
                  alt={data.name_en || "character"}
                  className="w-40 rounded-md shadow-md"
                />
                <p className="mt-2 font-semibold text-gray-800">{data.name_en}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={playVoice}
                    className="rounded-full bg-pink-400 p-2 hover:translate-y-0.5 hover:bg-pink-500 transition"
                    aria-label="Play voice"
                  >
                    🔊
                  </button>
                </div>

                <p className="text-gray-600 italic text-center mt-2">{data.slogan}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}