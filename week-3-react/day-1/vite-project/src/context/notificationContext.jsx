import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState(0);

  const addNotification = () => setNotifications((n) => n + 1);
  const clearNotifications = () => setNotifications(0);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}