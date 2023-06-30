import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "../Components/Auth/Loginpage";

type LoginInfo = {
  email: string;
  password: string;
};

const Login = () => {
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
        setLoading(false);
        const data = await response.json();
        console.log(data);
        ClearLoginInfo();
        return data;
      } else {
        setLoading(false);
        throw new Error("Login failed. Please check your credentials.");
      }
    } catch (error) {
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
