import { useRef, useState } from "react";

type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};
const Otpmodal = ({ showModal, setShowModal }: Props) => {
  if (showModal === false) return null;
  const handleClose = (e: any) => {
    if (e.target.id === "modelContainer") {
      setShowModal(false);
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

  return (
    <div
      className="fixed inset-0 z-10 header__blur flex justify-center items-center p-4"
      id="modelContainer"
      onClick={handleClose}
    >
      <div className="relative bg-white  w-[500px]  shadow-2xl  flex flex-col rounded-[2.3rem] md:col-span-2 col-span-3 p-8">
        <h1 className="font-bold text-black font-sans mb-4 text-xl text-center">
          Enter Verifcation Code
        </h1>
        <div className="flex flex-col w-full items-center">
          <div className="flex gap-x-3">
            <input
              type="text"
              className="border w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
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
              className="border w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
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
              className="border w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
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
              className="border w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
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
              className="border w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
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
              className="border w-12 h-12 rounded-md placeholder:font-light placeholder:p-2 focus:outline-primary p-2"
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
          <button className="rounded-md text-white  mt-4 px-4 py-2 bg-primary">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otpmodal;
