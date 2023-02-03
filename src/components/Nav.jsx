import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed top-0 flex h-20 w-full justify-between bg-sidenav shadow-lg shadow-shadow">
      <div className="mt-4 flex flex-col pl-4 pb-2 pr-4 text-subtitle">
        <FaDev size={40} />
      </div>

      {/* MENU */}
      <ul className="hidden items-center justify-center pt-2 pb-2 md:flex">
        <li>
          <button className="flex w-full items-center justify-end  bg-none px-4 text-xl text-white hover:cursor-pointer hover:text-xl hover:overline hover:transition-all">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p>Home</p>
            </Link>
          </button>
        </li>

        <li>
          <button className="flex w-full items-center justify-end  bg-none px-4 text-xl text-white hover:cursor-pointer  hover:text-xl hover:overline hover:transition-all">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <p>Skills</p>
            </Link>
          </button>
        </li>

        <li>
          <button className="flex w-full items-center justify-end  bg-none px-4 text-xl text-white hover:cursor-pointer  hover:text-xl hover:overline hover:transition-all">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <p>Projects</p>
            </Link>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center justify-end bg-none px-4 text-xl text-white hover:cursor-pointer  hover:text-xl hover:overline hover:transition-all">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <p>Contact</p>
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
