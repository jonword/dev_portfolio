import React from "react";
import Socials from "./Socials";

const Home = () => {
  return (
    <div className="h-screen w-full" id="home">
      {/* CONTAINER */}
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8">
        <p className="text-white">Hey, my name is</p>
        <h1 className="text-4xl font-bold text-subtitle md:text-7xl">
          Jonathan Word
        </h1>
        <h2 className="shrink text-4xl font-bold text-navhover md:text-7xl">
          I'm a Software Developer.
        </h2>
        <p className="max-w-[700px] shrink flex-wrap py-4 text-white">
          I'm a self taught software developer with a passion and focus on the
          frontend of web appllications.
        </p>
        <Socials />
      </div>
    </div>
  );
};

export default Home;
