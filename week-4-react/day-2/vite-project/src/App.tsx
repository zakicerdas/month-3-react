import './App.css'
import ProfilePage from './pages/profile'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './components/Auth';
import { ProtectedRoute } from './components/protectedRoute';
import LoginPage from './pages/login';

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/profile" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
