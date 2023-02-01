import React from "react";
import image from "../../assets/images/station.jpg";

const About = () => {
  return (
    <div
      className="flex-container mt-8 mb-20 ml-auto mr-auto flex w-full items-center justify-center p-4"
      id="about"
    >
      <div className="content flex flex-col flex-wrap items-center justify-center p-8 text-white">
        <h1 className="page-title text-3xl">
          Hey, I'm{" "}
          <span className="font-bold text-subtitle">Jonathan Word</span>!
        </h1>
        <br></br>
        <p className="text-xl">
          A self-taught software developer with a passion and a focus on the
          front-end.
        </p>
      </div>
    </div>
  );
};

export default About;
