import { FaArrowCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
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
  const router = useNavigate();
  return (
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
        <motion.img className="w-full h-full" src="/Images/login.svg" />
      </motion.div>
      <motion.div
        className="lg:w-1/2 lg:h-full lg:justify-evenly lg:bg-primary-light w-full h-2/3 flex flex-col items-center justify-between py-5"
        variants={formVariants}
      >
        <div className="main___background___gradient"></div>
        <div className="w-full flex items-center flex-col ">
          <motion.h1 className="text-2xl w-3/4 md:w-2/4 ">
            Let's sign you in.
          </motion.h1>
          <motion.h1 className="text-xl w-3/4 md:w-2/4 ">
            Welcome back. You've been missed!
          </motion.h1>
        </div>
        <motion.form
          className="flex flex-col items-center w-full gap-3"
          variants={formVariants}
        >
          <input
            type="email"
            required
            className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
            placeholder="Email"
          />
          <input
            type="password"
            required
            className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
            placeholder="Password"
          />
          <motion.button
            className="w-3/4 md:w-2/4 text-center h-12 rounded-md bg-primary text-white"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Login
          </motion.button>
        </motion.form>
        <div>
          Don't have an account?&nbsp;
          <span
            className="text-primary font-semibold cursor-pointer"
            onClick={() => router("/signup")}
          >
            Register
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
