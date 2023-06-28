import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section3 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    whileTap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="mx-4 md:mx-auto max-w-screen-xl md:my-40 my-32 bg-gray-100 px-4 md:px-0 py-20 flex flex-col items-center justify-center rounded-[2.5rem] gap-y-10"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <motion.h1
        className="text-3xl md:text-6xl max-w-4xl text-center md:leading-[4rem] text-dark font-sans font-bold"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
      >
        Embark on Your Coding Odyssey with{" "}
        <span className="gradient___text___color">Sigmacoder</span>: Ignite Your
        Passion, <span className="gradient___text___color">Master</span> the
        Art!
      </motion.h1>
      <motion.button
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileTap="whileTap"
        variants={buttonVariants}
        transition={{ duration: 0.5 }}
        className="bg-black flex items-center justify-center hover__button__Black gap-4 rounded-full duration-200 ease-out h-16 w-52 text-white font-semibold hover:brightness-95"
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default Section3;
