import { useLanguage } from "../context/languageContext";
import { useNotification } from "../context/notificationContext";

export default function pages() {
  const { language, setLanguage } = useLanguage();
  const { notifications, addNotification, clearNotifications } = useNotification();

  return (
    <header className="pt-20 border-b-2">
      <h2>Language: {language}</h2>
      <button
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:translate-y-1 transition " 
      onClick={() => setLanguage("English")}
      >EN
      </button>
      <button 
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:translate-y-1 transition"
      onClick={() => setLanguage("Indonesia")}
      >ID
      </button>

      <h3>🔔 Notifications: {notifications}</h3>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:translate-y-1 transition mr-3"
      onClick={addNotification}>Add</button>

      <button 
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:translate-y-1 transition"
      onClick={clearNotifications}>Clear</button>
    </header>
  );
}