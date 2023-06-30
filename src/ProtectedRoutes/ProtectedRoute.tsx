import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/UserContext";

const ProtectedRoute = ({ children }: any) => {
  const { authData } = useAuth();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true" || authData.isLoggedIn === "true" ? (
    children
  ) : (
    <Navigate to="/" />
  );
};
export default ProtectedRoute;
