import React from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center font-titleFont">
      <div className="flex">
        <img src={logo} alt="logo" className="w-11 h-11" />
        <h3 className="ml-2 mt-2">devSAK</h3>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((item) => (
            <li
              key={item._id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-auto hover:text-designColor duration-300"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
