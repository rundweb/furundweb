import { useEffect, useState } from "react";
import { TbMenu } from "react-icons/tb";
import { MdCloseFullscreen } from "react-icons/md";
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
    <div className="p-5 max-w-7xl m-auto py-7 flex items-center justify-between relative z-10">
      <div className="relative z-20">
        <h1 className="text-black-primary font-bold text-2xl md:text-3xl">
          F<span className="text-orange-primary">R</span>W
        </h1>
      </div>
      {openMenu ? (
        <TbMenu
          className="md:hidden text-3xl text-orange-primary relative z-20"
          onClick={() => setOpenMenu(!openMenu)}
        />
      ) : (
        <MdCloseFullscreen
          className="md:hidden text-3xl text-orange-primary relative z-20"
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}
      <div
        className={`md:hidden fixed min-h-screen top-0 w-full bg-gray-primary flex flex-col items-center justify-center gap-5 ${
          openMenu ? "-right-full" : "right-0"
        } duration-700 ease-in-out`}
      >
        {menu.map((item, i) => (
          <a
            href=""
            key={i}
            className="text-black-primary font-semibold text-2xl relative"
          >
            {item.name}
            <span className="absolute w-full h-[3px] bg-orange-primary left-0 -bottom-1 rounded-full"></span>
          </a>
        ))}
      </div>

      <div className="hidden md:flex gap-5">
        {menu.map((item, i) => (
          <a
            href=""
            key={i}
            className="text-black-primary font-light text-lg relative tracking-wide hover:text-orange-primary duration-500 ease-in-out"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavbarComponents;
