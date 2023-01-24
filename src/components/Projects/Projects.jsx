import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <section className="card-list" id="projects">
        <article className="card">
          <header className="card-header">
            <h3>Project #1</h3>
          </header>
        </article>

        <article className="card">
          <header className="card-header">
            <h3>Project #2</h3>
          </header>
        </article>

        <article className="card">
          <header className="card-header">
            <h3>Project #3</h3>
          </header>
        </article>
      </section>
    </>
  );
};

export default Projects;
