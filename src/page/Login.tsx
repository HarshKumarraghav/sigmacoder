import { useState } from "react";
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

  return <LoginPage loginInfo={loginInfo} setLoginInfo={setLoginInfo} />;
};

export default Login;
