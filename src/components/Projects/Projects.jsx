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
            {/* map over projectData */}
            {projectData.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                image={project.image}
                alt={project.alt}
                techList={project.techList}
                description={project.description}
                live={project.live}
                repo={project.repo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
