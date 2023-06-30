import { useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  showOTPModal: boolean;
  setShowOTPModal: (showOTPModal: boolean) => void;
};

const Otpmodal = ({ showOTPModal, setShowOTPModal }: Props) => {
  if (showOTPModal === false) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "modelContainer") {
      setShowOTPModal(false);
    }
  };

  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const ref6 = useRef<HTMLInputElement>(null);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  const isOtpValid =
    input1 !== "" &&
    input2 !== "" &&
    input3 !== "" &&
    input4 !== "" &&
    input5 !== "" &&
    input6 !== "";

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
        className="relative bg-white  w-[500px]  shadow-2xl  flex flex-col rounded-[2.3rem] md:col-span-2 col-span-3 p-8"
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
          <div className="flex gap-x-3">
            <input
              type="text"
              className="border text-center w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="0"
              maxLength={1}
              ref={ref1}
              value={input1}
              onChange={(e) => {
                setInput1(e.target.value);
                if (e.target.value !== "") {
                  ref2.current?.focus();
                } else if (e.target.value === "") {
                  setInput1("");
                  ref1.current?.focus();
                }
              }}
            />
            <input
              type="text"
              className="border text-center w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="0"
              maxLength={1}
              ref={ref2}
              value={input2}
              onChange={(e) => {
                setInput2(e.target.value);
                if (e.target.value !== "") {
                  ref3.current?.focus();
                } else if (e.target.value === "") {
                  setInput2("");
                  ref1.current?.focus();
                }
              }}
            />
            <input
              type="text"
              className="border text-center w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="0"
              maxLength={1}
              ref={ref3}
              value={input3}
              onChange={(e) => {
                setInput3(e.target.value);
                if (e.target.value !== "") {
                  ref4.current?.focus();
                } else if (e.target.value === "") {
                  setInput3("");
                  ref2.current?.focus();
                }
              }}
            />

            <input
              type="text"
              className="border text-center w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="0"
              maxLength={1}
              ref={ref4}
              value={input4}
              onChange={(e) => {
                setInput4(e.target.value);
                if (e.target.value !== "") {
                  ref5.current?.focus();
                } else if (e.target.value === "") {
                  setInput4("");
                  ref3.current?.focus();
                }
              }}
            />
            <input
              type="text"
              className="border text-center w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="0"
              maxLength={1}
              ref={ref5}
              value={input5}
              onChange={(e) => {
                setInput5(e.target.value);
                if (e.target.value !== "") {
                  ref6.current?.focus();
                } else if (e.target.value === "") {
                  setInput5("");
                  ref4.current?.focus();
                }
              }}
            />
            <input
              type="text"
              className="border text-center w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
              placeholder="0"
              maxLength={1}
              ref={ref6}
              value={input6}
              onChange={(e) => {
                setInput6(e.target.value);
                if (e.target.value !== "") {
                  ref6.current?.focus();
                } else if (e.target.value === "") {
                  setInput6("");
                  ref5.current?.focus();
                }
              }}
            />
          </div>
          <motion.button
            className={`rounded-md text-white mt-4 px-4 py-2 bg-primary  bg-opacity-50 ${
              isOtpValid
                ? "bg-primary cursor-pointer bg-opacity-100"
                : "opacity-50 pointer-events-none"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            disabled={!isOtpValid}
          >
            Verify
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Otpmodal;
