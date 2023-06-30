import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Dashboard from "./page/Dashboard";
import { useAuth } from "./Context/UserContext";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
function App() {
  const Router = useNavigate();
  const { signOut } = useAuth();
  useEffect(() => {
    const date = Date.now();
    const expTime = localStorage.getItem("expTime");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const dateObject = new Date(expTime || "");
    const dateNowObject = new Date(date);
    if (isLoggedIn === "true" && dateNowObject > dateObject) {
      signOut();
      Router("/login");
    }
  }, []);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "false" || isLoggedIn === null) {
      Router("/");
    } else {
      Router("/dashboard");
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
