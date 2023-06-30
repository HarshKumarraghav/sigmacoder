import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  showPhoneModal: boolean;
  setShowPhoneModal: (showPhoneModal: boolean) => void;
  setShowOTPModal: (showOTPModal: boolean) => void;
};

const PhoneModal = ({
  showPhoneModal,
  setShowPhoneModal,
  setShowOTPModal,
}: Props) => {
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };
  const [phoneNumber, setPhoneNumber] = useState("");

  if (showPhoneModal === false) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "modelContainer") {
      setShowPhoneModal(false);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = e.target.value;
    const formattedPhoneNumber = inputPhoneNumber.slice(0, 10);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleVerify = () => {
    if (isPhoneNumberValid) {
      setShowPhoneModal(false);
      setShowOTPModal(true);
    }
  };

  const isPhoneNumberValid = phoneNumber.length === 10;

  const modalVariants = {
    initial: {
      opacity: 0,
      y: -100,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.5,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-10 header__blur flex justify-center items-center p-4"
      id="modelContainer"
      onClick={handleClose}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={modalVariants}
    >
      <motion.div
        className="relative bg-white w-[500px] shadow-2xl flex flex-col rounded-[2.3rem] md:col-span-2 col-span-3 p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="font-bold text-black font-sans mb-4 text-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Enter Verification Code
        </motion.h1>
        <motion.div
          className="flex flex-col w-full items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="number"
            className="border w-3/4 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
            placeholder="Enter the Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength={10}
          />

          <motion.button
            className={`rounded-md text-white mt-4 px-4 py-2 bg-primary  bg-opacity-50 ${
              isPhoneNumberValid
                ? "bg-primary cursor-pointer bg-opacity-100"
                : "opacity-50 pointer-events-none"
            }`}
            variants={buttonVariants}
            onClick={handleVerify}
            disabled={!isPhoneNumberValid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap="tap"
          >
            Continue
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneModal;
