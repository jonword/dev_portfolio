import React from "react";
import { Link } from "react-scroll";
import { AiTwotoneHome } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Footer from "../Footer/Footer";

const Nav = () => {
  return (
    <div className="flex flex-col sticky top-0 left-0 h-screen w-80 bg-sidenav shadow-xl shadow-shadow">
      <div className="mt-4 pb-2 pr-4 flex flex-col items-end border-b-2 border-b-shadow">
        <h2 className="text-white text-3xl">Jonathan Word</h2>
        <p className="text-subtitle">Frontend Developer</p>
      </div>
      <nav className="flex flex-col gap-3 pt-2 pb-2">
        <button className="flex items-center gap-2 pl-4 pr-4 bg-none text-white text-xl justify-end w-full hover:bg-navhover hover:cursor-pointer hover:text-lg hover:overline hover:transition-all">
          <AiTwotoneHome />
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <p>About</p>
          </Link>
        </button>

        <button className="flex items-center gap-2 pl-4 pr-4 bg-none text-white text-xl justify-end w-full hover:bg-navhover hover:cursor-pointer hover:text-lg hover:overline hover:transition-all">
          <GiStrong />
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <p>Skills</p>
          </Link>
        </button>

        <button className="flex items-center gap-2 pl-4 pr-4 bg-none text-white text-xl justify-end w-full hover:bg-navhover hover:cursor-pointer hover:text-lg hover:overline hover:transition-all">
          <BsFillGrid1X2Fill />
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <p>Projects</p>
          </Link>
        </button>
      </nav>
      <Footer />
    </div>
  );
};

export default Nav;
