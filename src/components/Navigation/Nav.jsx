import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Footer from "../Sidebar/Sidebar";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed flex h-20 w-full justify-between bg-sidenav shadow-lg shadow-shadow">
      <div className="mt-4 flex flex-col pl-4 pb-2 pr-4">
        <h2 className="text-xl text-white">Jonathan Word</h2>
        <p className="mb-8 text-sm text-subtitle">Frontend Developer</p>
      </div>
      {/* MENU */}
      <ul className="hidden items-center justify-center gap-3 pt-2 pb-2 md:flex">
        <li>
          <button className="flex w-full items-center justify-end gap-2 bg-none px-4 text-xl text-white hover:cursor-pointer hover:bg-navhover hover:text-lg hover:overline hover:transition-all">
            <AiTwotoneHome />
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p>About</p>
            </Link>
          </button>
        </li>

        <li>
          <button className="flex w-full items-center justify-end gap-2 bg-none px-4 text-xl text-white hover:cursor-pointer hover:bg-navhover hover:text-lg hover:overline hover:transition-all">
            <GiStrong />
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <p>Skills</p>
            </Link>
          </button>
        </li>

        <li>
          <button className="flex w-full items-center justify-end gap-2 bg-none px-4 text-xl text-white hover:cursor-pointer hover:bg-navhover hover:text-lg hover:overline hover:transition-all">
            <BsFillGrid1X2Fill />
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <p>Projects</p>
            </Link>
          </button>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div
        onClick={handleClick}
        className="z-10 flex items-center justify-center pr-4 text-2xl text-white hover:cursor-pointer md:hidden"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-sidenav"
        }
      >
        <li>
          <button className=" flex w-full items-center gap-2 bg-none py-6 px-4 text-4xl text-white hover:cursor-pointer hover:text-4xl hover:overline hover:transition-all">
            <AiTwotoneHome />
            <Link
              onClick={handleClick}
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p>About</p>
            </Link>
          </button>
        </li>

        <li>
          <button className=" flex w-full items-center gap-2 bg-none py-6 px-4 text-4xl text-white hover:cursor-pointer hover:text-4xl hover:overline hover:transition-all">
            <GiStrong />
            <Link
              onClick={handleClick}
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <p>Skills</p>
            </Link>
          </button>
        </li>

        <li>
          <button className=" flex w-full items-center gap-2 bg-none py-6 px-4 text-4xl text-white hover:cursor-pointer  hover:text-4xl hover:overline hover:transition-all">
            <BsFillGrid1X2Fill />
            <Link
              onClick={handleClick}
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <p>Projects</p>
            </Link>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
