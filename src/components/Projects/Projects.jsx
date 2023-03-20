import React from "react";
import Project from "./Project";
import projectData from "./projectData";

const Projects = () => {
  return (
    <>
      <div id="projects" className="mt-20 w-full lg:h-screen">
        <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4 text-white">
          <p className="text-center text-4xl font-bold">Projects</p>
          <div className="flex shrink flex-col items-center justify-center gap-12 p-4 lg:flex-row">
            {projectData.map((p) => (
              <Project
                key={p.id}
                title={p.title}
                image={p.image}
                alt={p.alt}
                techList={p.techList}
                description={p.description}
                live={p.live}
                repo={p.repo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
