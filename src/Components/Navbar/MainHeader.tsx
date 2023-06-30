import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const MainHeader = () => {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

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
          <motion.h1
            className="text-md font-medium text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {user?.name}
          </motion.h1>
          <motion.img
            className="w-8 h-8 border-2 border-primary rounded-full"
            src={user?.profile_pic}
            alt="User Image"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
