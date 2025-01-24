import service1 from "../assets/image/service1.png";
import service2 from "../assets/image/service (1).png";
import service3 from "../assets/image/service (2).png";
import service4 from "../assets/image/service (3).png";
import { LuMoveRight } from "react-icons/lu";
const ServiceComponents = () => {
  const service = [
    {
      text: "Home redesign",
      image: service1,
    },
    {
      text: "Interior detailing",
      image: service2,
    },
    {
      text: "Furniture layout",
      image: service3,
    },
    {
      text: "Exterior finishing",
      image: service4,
    },
    {
      text: "Color and paint selection",
      image: service1,
    },
  ];
  return (
    <div className="p-5 pb-10 max-w-7xl m-auto lg:py-20">
      <div className="flex flex-col w-full">
        {service.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b-2 border-gray-100 py-5 md:py-10 cursor-pointer hover:bg-slate-950 px-5 group ease-in-out duration-500 relative"
            data-aos="fade-left"
            data-aos-duration="1300"
          >
            <p className="font-open font-semibold text-lg text-gray-500 tracking-wide md:text-3xl group-hover:text-orange-primary relative z-20">
              {item.text}
            </p>
            <div className="bg-orange-primary border-2 border-orange-primary px-5 py-1 rounded-3xl group-hover:bg-gray-400 group-hover:backdrop-filter group-hover:backdrop-blur-sm group-hover:bg-opacity-10 group-hover:border-white relative z-20">
              <LuMoveRight className="text-white md:text-2xl" />
            </div>
            <div className="absolute right-16 opacity-0 h-full group-hover:opacity-100 z-10">
              <img
                src={item.image}
                alt=""
                className="w-32 sm:w-48 h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponents;
