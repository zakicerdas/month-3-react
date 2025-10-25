import { useState, type FC } from "react";
import ReactDOM from "react-dom";

const Modal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 text-center p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          React Portal dengan Tailwind ✨
        </h1>
        <button
          onClick={openModal}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Buka Modal
        </button>
      </div>

      {isOpen &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]"
            onClick={closeModal}
          >
            <div
              className="pointer-events-none max-w-md w-[90%] p-6 bg-red-900/95 rounded-xl shadow-2xl text-center animate-scale-fade"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                Hai Oniichan~ 💢
              </h2>
              <p className="text-gray-700">
                Ini contoh <b>React Portal</b>
              </p>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Tutup Modal
              </button>
            </div>
          </div>,
          document.getElementById("modal-root")!
        )}
    </>
  );
};

export default Modal;
