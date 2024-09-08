import React from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont">
      <div className="flex">
        <img src={logo} alt="logo" className="w-11 h-11" />
        <h3 className="ml-2 mt-2 font-bold">devSAK</h3>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((item) => (
            <li
              key={item._id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
