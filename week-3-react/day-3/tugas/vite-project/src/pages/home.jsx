export default function Home() {
  console.log("[Home] loaded");
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-lg font-semibold mb-2">🏠 Home Page</h2>
      <p className="text-sm text-gray-600">
        Selamat datang di demo React.lazy paling simpel!
      </p>
    </div>
  );
}