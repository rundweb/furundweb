import { useEffect, useState } from "react";
import { TbMenu } from "react-icons/tb";
import { MdCloseFullscreen } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import logo from "../assets/image/logo.svg";
const NavbarComponents = () => {
  const menu = [
    {
      name: "About",
    },
    {
      name: "Product",
    },
    {
      name: "Project",
    },
    {
      name: "Services",
    },
  ];

  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    const handleWindowScroll = () => {
      setOpenMenu(true);
    };
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <div className="p-5 max-w-7xl m-auto py-7 flex items-center justify-between relative z-50">
      <div className="relative z-[60]">
        <img src={logo} alt="" className="w-32" />
      </div>
      {openMenu ? (
        <TbMenu
          className="md:hidden text-3xl text-orange-primary relative z-[60]"
          onClick={() => setOpenMenu(!openMenu)}
        />
      ) : (
        <MdCloseFullscreen
          className="md:hidden text-3xl text-orange-primary relative z-[60]"
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}
      <div
        className={`md:hidden fixed flex flex-col min-h-screen top-0 w-full bg-white p-5 pt-24 gap-6 font-open z-50 ${
          openMenu ? "-right-full" : "right-0"
        } duration-700 ease-in-out`}
      >
        {menu.map((item, i) => (
          <a
            href=""
            key={i}
            className="text-black-primary font-semibold text-2xl relative flex items-center justify-between"
          >
            {item.name}
            <FaAngleRight className="text-orange-primary" />
          </a>
        ))}
        <a
          href=""
          className="bg-black-primary mt-2 text-white w-full h-12 rounded-lg flex items-center justify-center text-lg font-semibold"
        >
          Get Started
        </a>
      </div>

      <div className="hidden md:flex gap-5 items-center">
        {menu.map((item, i) => (
          <a
            href=""
            key={i}
            className="font-open text-black-primary font-normal text-base relative tracking-wide hover:text-orange-primary duration-500 ease-in-out"
          >
            {item.name}
          </a>
        ))}
      </div>
      <a
        href=""
        className="bg-slate-900 text-white px-8 h-12 rounded-3xl items-center justify-center text-base font-semibold hidden md:flex"
      >
        Get Started
      </a>
    </div>
  );
};

export default NavbarComponents;
