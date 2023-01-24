import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="icon-list">
          <a
            href="https://www.linkedin.com/in/jonathan-word-80b8551b6"
            aria-label="website link"
            target="_blank"
          >
            <FaLinkedin className="icon-linkedin" />
          </a>
          <a
            href="https://github.com/jonword"
            aria-label="contact email"
            target="_blank"
          >
            <FaGithub className="icon-github" />
          </a>
          <a href="mailto:jonword0@gmail.com" className="email">
            <RiMailSendLine />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
