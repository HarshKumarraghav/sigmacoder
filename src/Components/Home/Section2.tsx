import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section2 = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="grid sm:grid-cols-3 gap-4 md:gap-10 max-w-screen-xl mx-auto">
      <motion.div
        className="bg-black relative text-gray-500 p-8 md:h-[400px] h-[450px] flex flex-col rounded-[2.3rem] md:col-span-2 col-span-3"
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref1}
      >
        <h1 className="font-bold text-white font-sans mb-4 mt-8 text-4xl md:text-6xl">
          Comprehensive Coding Challenges
        </h1>
        <p className="max-w-sm mt-4 font-medium  text-gray-300 z-10">
          Access a vast collection of coding challenges covering a wide range of
          topics and difficulty levels, designed to enhance your problem-solving
          skills.
        </p>
        <img
          src="/Images/search.svg"
          alt=""
          className="absolute bottom-4 right-0 w-60 md:w-80"
        />
      </motion.div>
      <motion.div
        className="bg-primary text-white relative overflow-hidden w-full p-8 h-[400px] rounded-[2.3rem] md:col-span-1 col-span-3"
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref2}
      >
        <div className="max-w-[350px]">
          <h1 className="font-bold font-sans text-4xl md:text-5xl my-4">
            Real-Time Coding Editor
          </h1>
          <p>
            Practice coding directly within the web application using a robust
            and intuitive code editor, equipped with syntax highlighting and
            auto-completion.
          </p>
          <img
            src="/Images/code.svg"
            alt=""
            className="absolute bottom-4 right-0 w-80"
          />
        </div>
      </motion.div>
      <motion.div
        className="bg-primary text-white relative overflow-hidden w-full p-8 h-[400px] rounded-[2.3rem] md:col-span-1 col-span-3"
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref3}
      >
        <div className="max-w-[350px]">
          <h1 className="font-bold font-sans text-4xl md:text-5xl my-4">
            Progress Tracking
          </h1>
          <p>
            Track your progress, monitor your performance, and see how you
            improve over time.
          </p>
          <img
            src="/Images/progress.svg"
            alt=""
            className="absolute bottom-4 right-0 w-80"
          />
        </div>
      </motion.div>
      <motion.div
        className="bg-black relative text-gray-500 p-8 md:h-[400px] h-[450px] flex flex-col rounded-[2.3rem] md:col-span-2 col-span-3"
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref4}
      >
        <h1 className="font-bold text-white font-sans mb-4 mt-8 text-4xl md:text-6xl">
          Student Performance Analytics
        </h1>
        <p className="max-w-sm mt-4 font-medium  text-gray-300 z-10">
          A comprehensive dashboard to track students' progress, identify
          strengths and weaknesses, and provide targeted guidance and support.
        </p>
        <img
          src="/Images/analytics.svg"
          alt=""
          className="absolute bottom-4 right-0 w-60 md:w-80"
        />
      </motion.div>
    </div>
  );
};

export default Section2;
