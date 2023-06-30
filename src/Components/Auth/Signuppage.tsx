import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { validateSignUpInputs } from "../../utils/Auth";
type Props = {
  signupInfo: any;
  isLoading: boolean;
  SignupHandler: () => void;
  setSignupInfo: (signupInfo: any) => void;
};
const Signuppage = ({
  signupInfo,
  setSignupInfo,
  isLoading,
  SignupHandler,
}: Props) => {
  // State to disable button if any of the input is empty
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // State to store validation errors
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  const router = useNavigate();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const formVariants = {
    initial: { x: "-100vw" },
    animate: { x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };
  const handleSignup = () => {
    if (!validateSignUpInputs(signupInfo, setValidationErrors)) {
      SignupHandler();
    }
  };
  useEffect(() => {
    setIsButtonDisabled(
      !signupInfo.name ||
        !signupInfo.phonenumber ||
        !signupInfo.email ||
        !signupInfo.password
    );
  }, [signupInfo]);

  return (
    <>
      <motion.div
        className="h-screen w-screen text-black flex lg:flex-row-reverse flex-col font-main"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="w-full h-16 fixed lg:pl-5 flex items-center gap-x-8 p-4 text-white md:text-black cursor-pointer z-10">
          <FaArrowCircleLeft size={25} onClick={() => router("/")} />
          <motion.h1
            className="font-head w-3/4 text-2xl"
            onClick={() => router("/")}
          >
            Sigmacoder
          </motion.h1>
        </div>

        <motion.div
          className="lg:w-1/2 lg:h-full h-1/3 flex flex-col lg:justify-center items-center py-3 gap-3 bg-primary"
          variants={formVariants}
        >
          <motion.img
            className="w-full h-full"
            src="/Images/Signup.svg"
            alt="Signup Image"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 lg:h-full lg:justify-evenly lg:bg-primary-light w-full h-2/3 flex flex-col items-center justify-between py-5"
          variants={formVariants}
        >
          <div className="w-full flex items-center flex-col">
            <motion.h1
              className="text-2xl w-3/4 md:w-2/4"
              variants={formVariants}
            >
              Start your Problem Solving journey with us.
            </motion.h1>
          </div>

          <motion.form
            className="flex flex-col items-center w-full gap-3"
            variants={formVariants}
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >
            <input
              type="text"
              value={signupInfo.name}
              onChange={(e) => {
                setSignupInfo({ ...signupInfo, name: e.target.value });
              }}
              required
              className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
              placeholder="Full Name"
            />
            {validationErrors.name && (
              <span className="text-red-500 text-sm">
                {validationErrors.name}
              </span>
            )}
            <input
              type="email"
              value={signupInfo.email}
              onChange={(e) => {
                setSignupInfo({ ...signupInfo, email: e.target.value });
              }}
              required
              className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
              placeholder="Email address"
            />
            {validationErrors.email && (
              <span className="text-red-500 text-sm">
                {validationErrors.email}
              </span>
            )}

            <input
              type="number"
              value={signupInfo.phonenumber}
              onChange={(e) => {
                setSignupInfo({ ...signupInfo, phonenumber: e.target.value });
              }}
              required
              className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
              placeholder="Phone number"
            />
            {validationErrors.phonenumber && (
              <span className="text-red-500 text-sm">
                {validationErrors.phonenumber}
              </span>
            )}
            <input
              type="password"
              value={signupInfo.password}
              onChange={(e) => {
                setSignupInfo({ ...signupInfo, password: e.target.value });
              }}
              required
              className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
              placeholder="Password"
            />
            {validationErrors.password && (
              <span className="text-red-500 text-sm">
                {validationErrors.password}
              </span>
            )}
            <motion.button
              className={`w-3/4 md:w-2/4 text-center h-12 rounded-md bg-primary text-white  ${
                !isButtonDisabled
                  ? "bg-primary cursor-pointer bg-opacity-100"
                  : "opacity-50 pointer-events-none"
              }`}
              variants={buttonVariants}
              disabled={isLoading || isButtonDisabled}
              whileTap="tap"
            >
              {isLoading ? (
                <span className="w-full flex items-center justify-center gap-x-4">
                  <div
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                  <span>Registering User...</span>
                </span>
              ) : (
                <span>Register</span>
              )}
            </motion.button>
          </motion.form>

          <div className="">
            Have an account?&nbsp;
            <span
              className="text-primary font-semibold cursor-pointer"
              onClick={() => router("/Login")}
            >
              Login
            </span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Signuppage;
