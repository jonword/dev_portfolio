import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="footer-container flex justify-center items-center w-full bottom-0 bg-sidenav border-t-2 border-t-shadow">
        <div className="icon-list flex justify-center items-center gap-8 p-2">
          <a
            href="https://www.linkedin.com/in/jonathan-word-80b8551b6"
            aria-label="website link"
            target="_blank"
          >
            <FaLinkedin className="icon-linkedin text-3xl text-white hover:text-linkedin transition-all" />
          </a>
          <a
            href="https://github.com/jonword"
            aria-label="contact email"
            target="_blank"
          >
            <FaGithub className="icon-github text-3xl text-white hover:text-github transition-all" />
          </a>
          <a href="mailto:jonword0@gmail.com">
            <RiMailSendLine className="email text-3xl text-white hover:text-email transition-all" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
