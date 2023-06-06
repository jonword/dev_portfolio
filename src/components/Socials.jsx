import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <div className="flex md:justify-center">
        <ul className="flex">
          <li className="flex h-12 w-12 items-center justify-center bg-projects px-2 ">
            <a
              className="flex w-full items-center justify-between text-white hover:text-linkedin"
              href="https://www.linkedin.com/in/jonathan-word-80b8551b6"
              aria-label="website link"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="flex h-12 w-12 items-center justify-between bg-projects px-2">
            <a
              className="flex w-full items-center justify-between text-white hover:text-github"
              href="https://github.com/jonword"
              aria-label="contact email"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
          </li>

          <li className="flex h-12 w-12 items-center justify-between bg-projects px-2">
            <a
              className="flex w-full items-center justify-between text-white hover:text-email"
              href="mailto:jonathanword.dev@gmail.com"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="  flex h-12 w-12 items-center justify-between bg-projects px-2 ">
            <a
              className="flex w-full items-center justify-between text-white hover:text-navhover"
              href="https://drive.google.com/file/d/1sJD1Vz-Oio_6bF_gpvhBVIJBnwzCcm_D/view?usp=sharing"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socials;
