import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import instance from "./service/AxiosOder";

function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true); // To wait for token validation

  useEffect(() => {
    const token = localStorage.getItem("afsd-7-token");
    if (token) {
      // Validate token with backend
      instance
        .post("/validate-token", { token })
        .then(() => setLogin(true))
        .catch(() => setLogin(false))
        .finally(() => setLoading(false));
    } else {
      setLogin(false);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a nice spinner
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login setLogin={setLogin} />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Route */}
      <Route
        path="/dashboard"
        element={login ? <Dashboard /> : <Navigate to="/login" />}
      />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to={login ? "/dashboard" : "/login"} />} />
    </Routes>
  );
}

export default App;
