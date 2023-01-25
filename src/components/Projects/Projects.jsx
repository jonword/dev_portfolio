import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <section
        className="card-list flex justify-center w-100% mt-20 ml-auto mr-auto p-8 gap-10"
        id="projects"
      >
        <article className="card flex flex-col h-96 w-96 bg-projects border border-subtitle shadow-lg shadow-shadow">
          <header className="card-header text-center text-white">
            <h3>Project #1</h3>
          </header>
        </article>

        <article className="card flex flex-col h-96 w-96 bg-projects border border-subtitle shadow-lg shadow-shadow">
          <header className="card-header text-center text-white">
            <h3>Project #2</h3>
          </header>
        </article>
      </section>
    </>
  );
};

export default Projects;
