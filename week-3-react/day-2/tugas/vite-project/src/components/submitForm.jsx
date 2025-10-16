import useForm from "../hooks/useForm";
import useLocalStorage from "../hooks/useLocalStor";

export default function Form() {
  const { values, handleChange } = useForm({ name: "", email: "" });
  const [theme, setTheme] = useLocalStorage("theme", "light");

 return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-white"
      }`}
    >
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-center mb-4">Simple Form</h2>

        <input
          name="name"
          placeholder="Nama"
          value={values.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-lg focus:ring focus:ring-indigo-300 outline-none dark:bg-gray-700"
        />
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg focus:ring focus:ring-indigo-300 outline-none dark:bg-gray-700"
        />

        <div className="mb-4 text-sm">
          <p><strong>Nama:</strong> {values.name || "-"}</p>
          <p><strong>Email:</strong> {values.email || "-"}</p>
        </div>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-all"
        >
          Toggle Theme ({theme})
        </button>
      </div>
    </div>
  );
}