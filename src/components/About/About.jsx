import React from "react";
import image from "../../assets/images/IMG_1345.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="flex-container" id="about">
      <div className="image">
        <img src={image} height="200" width="350" alt="Jonathan Word" />
      </div>
      <div className="content">
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
