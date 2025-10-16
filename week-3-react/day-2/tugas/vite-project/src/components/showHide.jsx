import useToggle from "../hooks/useToggle";

export function ShowHideText() {
  const [visible, toggleVisible] = useToggle(false);

  return (
    <div className="text-center my-6">
      <button
        onClick={toggleVisible}
        className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-lg shadow-md transition"
      >
        {visible ? "Sembunyikan" : "Tampilkan"} Pesan
      </button>

      {visible && (
        <p className="mt-3 text-pink-700 font-semibold animate-pulse">
          ♡ Halo Oniichan~ ini teks rahasia ♡
        </p>
      )}
    </div>
  );
}