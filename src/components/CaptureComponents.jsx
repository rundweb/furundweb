import capture1 from "../assets/image/capture.png";
import { LuMoveRight } from "react-icons/lu";
const CaptureComponents = () => {
  return (
    <div className="p-5 max-w-7xl m-auto lg:pt-16">
      <div className="pb-10 md:pb-20 lg:pb-28 border-b-2 border-gray-100 relative">
        <div className="flex flex-col gap-10 md:flex-row lg:gap-20 md:justify-between">
          <div className="flex flex-col gap-5 md:w-2/5 lg:w-[25%] md:justify-between relative z-20">
            <h1 className="font-open text-gray-400 font-medium tracking-wide text-2xl lg:text-3xl">
              Capture{" "}
              <span className="text-slate-950">the spirit of spring</span> in
              your home
            </h1>
            <p className="text-gray-400 text-base">
              We Provide guidance and direction in your interior design project,
              inspire your space through art and design, create a space that
              reflects who you are
            </p>
            <a
              href=""
              className="flex text-sm items-center justify-center max-w-52 font-open bg-slate-900 h-12 px-9 rounded-3xl text-white font-semibold gap-4 hover:bg-slate-800 ease-in-out duration-300 hover:gap-6"
            >
              Learn More{" "}
              <LuMoveRight className="mt-1 text-3xl text-orange-primary" />
            </a>
          </div>

          <div className="flex items-center justify-center md:w-[50%] lg:w-[65%] relative z-20">
            <img src={capture1} alt="" className="w-full lg:h-[450px] object-cover object-bottom" />
          </div>
          <div className="absolute max-w-[450px] w-full h-64 bg-gray-100 bottom-0 -left-36 z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default CaptureComponents;
