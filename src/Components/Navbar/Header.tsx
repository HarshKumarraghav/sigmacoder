import { motion } from "framer-motion";
const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full header__blur">
      <div className="container mx-auto flex flex-row justify-between items-center py-4 px-2">
        <div className="flex items-center mb-4 md:mb-0 md:mr-4">
          <motion.h1
            className="text-2xl font-semibold text-black font-head"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sigmacoder
          </motion.h1>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            className="bg-primary py-2 px-4 rounded-full text-sm text-white focus:outline-none hover__button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
