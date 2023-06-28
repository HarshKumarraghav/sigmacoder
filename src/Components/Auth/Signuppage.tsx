import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const Signuppage = () => {
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
          >
            <div className="flex flex-col md:flex-row w-3/4 md:w-2/4 gap-x-3 gap-y-2">
              <input
                type="text"
                required
                className="border w-full h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
                placeholder="First Name"
              />
              <input
                type="text"
                required
                className="border w-full h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
                placeholder="Last Name"
              />
            </div>

            <input
              type="email"
              required
              className="border w-3/4 md:w-2/4 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="Email address"
            />

            <input
              type="number"
              required
              className="border w-3/4 md:w-2/4 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="Phone number"
            />

            <input
              type="password"
              required
              className="border w-3/4 md:w-2/4 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="Password"
            />

            <motion.button
              className="w-3/4 md:w-2/4 text-center h-12 rounded-md bg-primary text-white"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Register
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
