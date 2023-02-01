import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <footer className="footer-container bottom-0 flex w-full items-center justify-center border-t-2 border-t-shadow">
        <div className="icon-list flex items-center justify-center gap-8 p-2">
          <a
            href="https://www.linkedin.com/in/jonathan-word-80b8551b6"
            aria-label="website link"
            target="_blank"
          >
            <FaLinkedin className="icon-linkedin text-3xl text-white transition-all hover:text-linkedin" />
          </a>
          <a
            href="https://github.com/jonword"
            aria-label="contact email"
            target="_blank"
          >
            <FaGithub className="icon-github text-3xl text-white transition-all hover:text-github" />
          </a>
          <a href="mailto:jonword0@gmail.com">
            <RiMailSendLine className="email text-3xl text-white transition-all hover:text-email" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Sidebar;
