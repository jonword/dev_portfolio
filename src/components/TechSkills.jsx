import React from "react";
import htmlImg from "../assets/images/skill_images/html.png";
import cssImg from "../assets/images/skill_images/css.png";
import jsImg from "../assets/images/skill_images/javascript.png";
import reactImg from "../assets/images/skill_images/react.png";
import tsImg from "../assets/images/skill_images/ts.png";
import tailwindImg from "../assets/images/skill_images/tailwind.png";
import reduxImg from "../assets/images/skill_images/redux.png";
import nodeImg from "../assets/images/skill_images/node.png";

const TechSkills = () => {
  return (
    <div id="skills">
      {/* CONTAINER */}
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col items-center justify-center p-4 text-white">
        <p className="inline text-4xl font-bold ">Skills</p>
        <p className="py-4">
          As a frontend developer, I have experience with these technologies.
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <img src={htmlImg} className="h-16 w-16" />
          </div>
          <div>
            <img src={cssImg} className="h-16 w-16" />
          </div>
          <div>
            <img src={tailwindImg} className="h-16 w-16" />
          </div>
          <div>
            <img src={jsImg} className="h-16 w-16" />
          </div>
          <div>
            <img src={reactImg} className="h-16 w-16" />
          </div>
          <div>
            <img src={tsImg} className="h-16 w-16" />
          </div>
          <div>
            <img src={reduxImg} className="h-16 w-16" />
          </div>
          <div>
            <img src={nodeImg} className="h-16 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
