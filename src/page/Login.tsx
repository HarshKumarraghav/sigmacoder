import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "../Components/Auth/Loginpage";
import { useAuth } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

type LoginInfo = {
  email: string;
  password: string;
};

const Login = () => {
  const Router = useNavigate();
  const { setAuthData } = useAuth();
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const ClearLoginInfo = () => {
    setLoginInfo({
      email: "",
      password: "",
    });
  };
  const LoginHandler = async () => {
    setLoading(true);
    const uri = `${import.meta.env.VITE_SIGMACODER_URI}auth/login`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    };
    try {
      const response = await fetch(uri, requestOptions);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("access_token", data.token);
        localStorage.setItem("expTime", data.expTime);
        localStorage.setItem("user", JSON.stringify(data.user));
        ClearLoginInfo();
        setAuthData({
          isLoggedIn: true,
          token: data.token,
        });
        Router("/dashboard");
        setLoading(false);
      } else {
        setLoading(false);
        throw new Error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const handleLogin = () => {
    toast.promise(LoginHandler(), {
      pending: "Logging in...",
      success: "Login successful!",
      error: "Login failed. Please try again.",
    });
  };

  return (
    <>
      <LoginPage
        loginInfo={loginInfo}
        setLoginInfo={setLoginInfo}
        LoginHandler={handleLogin}
        isLoading={isLoading}
      />
      <ToastContainer
        position="top-center"
        theme="colored"
        hideProgressBar={true}
        autoClose={3000}
      />
    </>
  );
};

export default Login;
