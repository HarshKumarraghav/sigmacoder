import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGlobe, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <footer className="bg-black text-white px-4 md:px-0">
        <div className=" px-8 py-8 md:py-12">
          <div
            className="flex flex-col md:flex-row justify-between items-start gap-8"
            ref={ref}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full md:w-1/3"
            >
              <motion.h1
                variants={childVariants}
                className=" text-white p-2 rounded-md font-head  text-2xl font-bold"
              >
                Sigmacoder
              </motion.h1>
              <motion.p
                variants={childVariants}
                className="text-sm md:text-base leading-relaxed"
              >
                Sigmacoder: Unleash your coding prowess with diverse challenges,
                real-time coding editor, comprehensive solutions, and a vibrant
                community. Ignite your learning, excel in problem-solving, and
                embrace the limitless possibilities of coding.
              </motion.p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-1/3"
            >
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul className="text-sm md:text-base leading-relaxed">
                {/* <motion.li
                  variants={childVariants}
                  className="flex items-center mb-2"
                >
                  <BsTelephoneFill className="mr-2" size={20} />
                  +91 8978850659
                </motion.li> */}
                <motion.li
                  variants={childVariants}
                  className="flex items-center mb-2"
                >
                  <HiMail className="mr-2" size={20} />
                  raghavharsh068@gmail.com
                </motion.li>
                <motion.li
                  variants={childVariants}
                  className="flex items-center"
                >
                  <ImLocation2 className="mr-2" size={20} />
                  Gautam Buddha University, Greater Noida, Uttar Pradesh
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="w-full md:w-1/3"
            >
              <h2 className="text-lg font-semibold mb-4">Socials</h2>
              <div className="flex gap-4">
                <motion.a
                  variants={childVariants}
                  className="cursor-pointer"
                  href="https://twitter.com/_Harsh_raghav_"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter size={24} />
                </motion.a>
                <motion.a
                  variants={childVariants}
                  href="https://harshraghav.me"
                  target="_blank"
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGlobe size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"
                  target="_blank"
                  variants={childVariants}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/harsh.raghav.568/"
                  target="_blank"
                  variants={childVariants}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
      <div className="w-full h-10 flex justify-center items-center bg-black bg-opacity-80 shadow-light-shadow text-center">
        <motion.p
          variants={childVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-sm text-white"
        >
          &copy; 2023 Sigmacoder. All Rights Reserved by Sigmacoder Software Pvt
          Ltd
        </motion.p>
      </div>
    </>
  );
};

export default Footer;
