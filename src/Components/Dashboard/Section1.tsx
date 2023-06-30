import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Section1 = () => {
  return (
    <div className="hide__scrollbar md:mb-0 mb-4 w-full overflow-x-auto">
      <div className="mt-4 flex gap-4 w-max">
        <div className="rounded-3xl w-72 p-5 text-white bg-black hover:scale-95 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center">
            <p className="text-xl text-dark border-dark font-bold border rounded-full w-16 h-16 flex justify-center items-center">
              1000+
            </p>
            <BsFillArrowRightCircleFill size={50} />
          </div>
          <p className="mt-8 font-medium text-center text-dark border-dark">
            All in One DSA Sheet, 1000+ Questions
          </p>
          <p className="mt-4 font-bold text-center text-[32px] font-sans text-dark border-dark">
            All in One
          </p>
        </div>
        <div className="rounded-3xl w-72 p-5 text-white bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center">
            <p className="text-xl text-dark border-dark font-bold border rounded-full w-16 h-16 flex justify-center items-center">
              75+
            </p>
            <BsFillArrowRightCircleFill size={50} />
          </div>
          <p className="mt-8 font-medium text-center text-dark border-dark">
            Blind 75 DSA Sheet, 75+ Questions
          </p>
          <p className="mt-4 font-bold text-center text-[32px] font-sans text-dark border-dark">
            Blind 75
          </p>
        </div>
        <div className="rounded-3xl w-72 p-5 text-white bg-black hover:scale-95 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center">
            <p className="text-xl text-dark border-dark font-bold border rounded-full w-16 h-16 flex justify-center items-center">
              450+
            </p>
            <BsFillArrowRightCircleFill size={50} />
          </div>
          <p className="mt-8 font-medium text-center text-dark border-dark">
            Love Babbar DSA Cracker Sheet, 450+ Questions
          </p>
          <p className="mt-4 font-bold text-center text-[32px] font-sans text-dark border-dark">
            Lover Babbar
          </p>
        </div>
        <div className="rounded-3xl w-72 p-5 bg-primary text-white hover:scale-95 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center">
            <p className="text-xl text-dark border-dark font-bold border rounded-full w-16 h-16 flex justify-center items-center">
              250+
            </p>
            <BsFillArrowRightCircleFill size={50} />
          </div>
          <p className="mt-8 font-medium text-center text-dark border-dark">
            Fraz SDE Sheet, 250+ Questions
          </p>
          <p className="mt-4 font-bold text-center text-[32px] font-sans text-dark border-dark">
            Fraz
          </p>
        </div>
        <div className="rounded-3xl w-72 p-5 bg-black text-white hover:scale-95 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center">
            <p className="text-xl text-dark border-dark font-bold border rounded-full w-16 h-16 flex justify-center items-center">
              360+
            </p>
            <BsFillArrowRightCircleFill size={50} />
          </div>
          <p className="mt-8 font-medium text-center text-dark border-dark">
            Apna College DSA Sheet, 360+ Questions
          </p>
          <p className="mt-4 font-bold text-center text-[32px] font-sans text-dark border-dark">
            Apna College
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
