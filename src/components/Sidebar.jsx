import { useState } from "react";
import { navLinks } from "../constants";
const Sidebar = ({ hidden }) => {
  return (
    <aside className={hidden && "hidden"}>
      <ul className=" flex flex-col  items-start  justify-start fixed   shadow-3xl z-50 w-60   h-screen top-0 right-0  backdrop-blur-lg border-2   mt-24 ">
        {navLinks.map((item) => (
          <li key={item.label} className="w-full pt-8 pl-6">
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray w-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
