import React from "react";
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
          <p>About</p>
        </button>

        <button>
          <GiStrong />
          <p>Skills</p>
        </button>

        <button>
          <BsFillGrid1X2Fill />
          <p>Projects</p>
        </button>
      </nav>
      <Footer />
    </div>
  );
};

export default Nav;
