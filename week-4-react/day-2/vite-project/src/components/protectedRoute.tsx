import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
import type { JSX } from "react";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { state } = useAuth();
  const location = useLocation();

  if (!state.token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}