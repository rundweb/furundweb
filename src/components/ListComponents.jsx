import list1 from "../assets/image/decor (1).png";
import list2 from "../assets/image/decor (2).png";
import list3 from "../assets/image/decor (3).png";
import list4 from "../assets/image/decor (4).png";
import { LuMoveRight } from "react-icons/lu";
const ListComponents = () => {
  const decor = [
    {
      image: list1,
    },
    {
      image: list2,
    },
    {
      image: list3,
    },
    {
      image: list4,
    },
  ];
  return (
    <div className="relative">
      <div className="p-5 max-w-7xl m-auto flex flex-col gap-10 pb-10 lg:pb-20">
        <div className="flex flex-col gap-5 md:justify-between md:flex-row relative z-20">
          <h1 className="font-open text-gray-400 font-medium tracking-wide text-2xl lg:text-3xl lg:w-[450px]" data-aos="fade-left"
            data-aos-duration="1300">
            Decorate{" "}
            <span className="text-slate-950">every inch of the house </span> to
            make it feel homey
          </h1>
          <p className="text-gray-400 text-base md:text-end lg:w-[400px] font-open" data-aos="fade-left"
            data-aos-duration="1300">
            Carve out a little piece of paradise with some of out top pick, the
            home of your dreams begins with the perfect palette fore every room
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center md:flex-row">
          {decor.map((item, i) => (
            <div key={i} className="cursor-pointer relative z-20 group" data-aos="fade-left"
            data-aos-duration="1300">
              <img
                src={item.image}
                alt=""
                className="max-w-sm w-full md:max-w-80 relative z-10 hover:z-10 hover:scale-105 md:hover:scale-110 duration-500 ease-in-out"
              />
              <a href="" className="font-open absolute top-2/4 left-2/4 z-20 -translate-y-2/4 -translate-x-2/4 flex items-center gap-2 bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 py-3 w-40 justify-center text-white group-hover:opacity-100 opacity-0">
                Learn More <LuMoveRight className="mt-1 text-xl"/>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-full h-2/4 bg-gray-100 bottom-0 z-10 left-0" data-aos="fade-up" data-aos-duration="2000"></div>
    </div>
  );
};

export default ListComponents;
