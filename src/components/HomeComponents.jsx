import homepri from "../assets/image/home-primary.jpg";
import home1 from "../assets/image/hom-content (1).jpg";
import home2 from "../assets/image/hom-content (2).jpg";
import home3 from "../assets/image/hom-content (3).jpg";
import { LuMoveRight } from "react-icons/lu";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const HomeComponents = () => {
  const home = [
    {
      image: home1,
    },
    {
      image: home2,
    },
    {
      image: home3,
    },
  ];
  return (
    <div className="p-5 max-w-7xl m-auto flex flex-col gap-10 relative z-10">
      <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-8 lg:gap-12">
        <h1 className="font-source text-6xl sm:text-7xl md:text-9xl font-medium text-slate-900 lg:w-3/5">
          Transform your Space
        </h1>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <a
            href=""
            className="flex text-sm items-center font-open bg-slate-900 h-12 px-9 rounded-3xl text-white font-semibold gap-4"
          >
            Start Project{" "}
            <LuMoveRight className="mt-1 text-3xl text-orange-primary" />
          </a>
          <a
            href=""
            className="flex text-sm items-center font-open bg-white h-12 px-9 rounded-3xl text-black-primary border-2 border-slate-900 font-semibold gap-4"
          >
            Learn More
            <LuMoveRight className="mt-1 text-3xl text-orange-primary" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-10 relative">
        <p className="font-open text-slate-800 tracking-wide text-center lg:text-start lg:w-80 relative z-30">
          The mind creates the beautiful, the heart creates the home, home sweet
          home
        </p>
        <div className="flex gap-5 flex-wrap justify-around lg:justify-start lg:gap-3">
          {home.map((item, i) => (
            <img
              key={i}
              src={item.image}
              alt=""
              className="max-w-96 md:max-w-52 lg:max-w-36 w-full"
            />
          ))}
        </div>
        <div className="absolute hidden lg:flex bottom-0 right-20 -z-10">
          <img
            src={homepri}
            alt=""
            className="max-w-[410px] w-full relative z-10"
          />
        </div>
        <div className="hidden absolute right-0 bottom-0 bg-orange-primary w-12 h-20 lg:flex items-center justify-center rounded-3xl">
          <LiaLongArrowAltDownSolid className="text-3xl text-white"/>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
