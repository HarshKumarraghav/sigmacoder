import { motion } from "framer-motion";
const Section1 = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-screen-xl mx-auto div__height flex flex-col items-center justify-center p-4 font-main"
    >
      <div className="main___background___gradient"></div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-8xl max-w-6xl text-center font-extrabold text-dark"
      >
        Unleash Your Academic{" "}
        <span className="gradient___text___color italic">Excellence</span> &
        Coding
        <span className="gradient___text___color italic"> Prowess!</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:text-lg text-gray-500 max-w-sm text-center font-medium mt-8"
      >
        Unleash Your Inner Developer.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid gap-4 mt-8"
      >
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-primary flex items-center justify-center hover__button gap-4 rounded-full duration-200 ease-out h-16 w-52 text-white font-semibold hover:brightness-95"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.main>
  );
};

export default Section1;
