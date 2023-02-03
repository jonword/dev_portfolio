import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-[35%] left-0 hidden flex-col md:flex">
        <ul>
          <li className=" ml-[-104px] flex h-14 w-40 items-center justify-between bg-linkedin px-2 duration-300 hover:ml-[0px]">
            <a
              className="flex w-full items-center justify-between text-white"
              href="https://www.linkedin.com/in/jonathan-word-80b8551b6"
              aria-label="website link"
              target="_blank"
            >
              Linkedin <FaLinkedin size={40} />
            </a>
          </li>

          <li className=" ml-[-104px] flex h-14 w-40 items-center justify-between bg-projects px-2 duration-300 hover:ml-[0px]">
            <a
              className="flex w-full items-center justify-between text-white"
              href="https://github.com/jonword"
              aria-label="contact email"
              target="_blank"
            >
              GitHub <FaGithub size={40} />
            </a>
          </li>

          <li className=" ml-[-104px] flex h-14 w-40 items-center justify-between bg-email px-2 duration-300 hover:ml-[0px]">
            <a
              className="flex w-full items-center justify-between text-white"
              href="mailto:jonathanword.dev@gmail.com"
            >
              Email <HiOutlineMail size={40} />
            </a>
          </li>
          <li className=" ml-[-104px] flex h-14 w-40 items-center justify-between bg-navhover px-2 duration-300 hover:ml-[0px]">
            <a
              className="flex w-full items-center justify-between text-white"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
