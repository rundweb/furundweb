import key1 from "../assets/image/hom-content (1).jpg";
import { LuMoveRight } from "react-icons/lu";
const KeyComponents = () => {
  return (
    <div className="p-5 max-w-7xl m-auto">
      <div className="py-10 md:py-20 border-y-2 border-gray-primary relative flex items-center justify-between gap-20">
        <div className="hidden md:flex">
          <img src={key1} alt="" className="relative z-20" />
        </div>
        <div className="relative z-20 md:w-2/3 lg:w-2/4 flex flex-col items-center gap-10 md:items-end">
          <h1 className="font-open text-slate-950 font-medium tracking-wide text-xl lg:text-end lg:text-3xl">
            The key difference between ordinary and special,{" "}
            <span className="text-gray-500">
              No matter the season, our spaces are as nuanced as the lifestyle
              they reflect,
            </span>{" "}
            don`t just dream it.
          </h1>
          <div className=" flex flex-wrap justify-around gap-7 text-center">
            <div>
              <h1 className="text-5xl font-open font-normal text-slate-950">
                300<span className="text-orange-primary">+</span>
              </h1>
              <p className="text-gray-500 text-base">Success project</p>
            </div>
            <div>
              <h1 className="text-5xl font-open font-normal text-slate-950">
                200<span className="text-orange-primary">+</span>
              </h1>
              <p className="text-gray-500 text-base">Product Lunches</p>
            </div>
            <div>
              <h1 className="text-5xl font-open font-normal text-slate-950">
                180<span className="text-orange-primary">K</span>
              </h1>
              <p className="text-gray-500 text-base">Happy customers</p>
            </div>
          </div>
          <a href="" className="flex text-sm items-center font-open bg-slate-900 h-12 px-9 rounded-3xl text-white font-semibold gap-4">
            About Us <LuMoveRight className="mt-1 text-3xl text-orange-primary"/>
          </a>
        </div>
        <div className="hidden md:flex absolute h-full w-full bg-gray-primary top-0 -right-[25%] z-10"></div>
      </div>
    </div>
  );
};

export default KeyComponents;
