import React from "react";
import { Link } from "react-scroll";
import "./nav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Footer from "../Footer/Footer";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-title-section">
        <h2>Jonathan Word</h2>
        <p>Frontend Developer</p>
      </div>
      <nav className="nav-list">
        <button>
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

        <button>
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

        <button>
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
