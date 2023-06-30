import { useState } from "react";
import Signuppage from "../Components/Auth/Signuppage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Router = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const ClearSignupInfo = () => {
    setSignupInfo({
      name: "",
      email: "",
      phonenumber: "",
      password: "",
    });
  };
  const SignupHandler = async () => {
    setLoading(true);
    const uri = `${import.meta.env.VITE_SIGMACODER_URI}auth/register`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupInfo),
    };
    try {
      const response = await fetch(uri, requestOptions);
      if (response.ok) {
        Router("/login");
        ClearSignupInfo();
        setLoading(false);
      } else {
        setLoading(false);
        throw new Error("Signup failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };
  const handleSignup = () => {
    toast.promise(SignupHandler(), {
      pending: "Logging in...",
      success: "Login successful!",
      error: "Login failed. Please try again.",
    });
  };

  return (
    <>
      <Signuppage
        signupInfo={signupInfo}
        setSignupInfo={setSignupInfo}
        isLoading={isLoading}
        SignupHandler={handleSignup}
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

export default Signup;
