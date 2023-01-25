import React from "react";
import image from "../../assets/images/IMG_1345.jpg";

const About = () => {
  return (
    <div
      className="flex-container flex justify-center items-center w-full mt-12 ml-auto mr-auto p-4"
      id="about"
    >
      <div className="image flex items-center p-4">
        <img src={image} height="200" width="350" alt="Jonathan Word" />
      </div>
      <div className="content flex flex-col justify-center items-center p-8 flex-wrap text-white">
        <h1 className="page-title">Front End Developer</h1>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo
          velit, faucibus non bibendum ac, molestie eu nisl. In id finibus nunc,
          et fringilla ex. Maecenas erat nisl, sodales sit amet ligula sed,
          vulputate feugiat eros.
        </p>
      </div>
    </div>
  );
};

export default About;
