import React from "react";
import image from "../../assets/images/ecommerce.jpg";
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
            <h3 className="mt-2">E-Commerce Product Page</h3>
            <img src={image} className="mt-4 mb-2 pl-2 pr-2" />
            <p className="italic text-sm text-navhover mb-2">
              Skills used: HTML/JSX, CSS, React, Redux
            </p>
            <p>
              A responsive web-page that allows you to add the item to your cart
              and updates the cart accordingly.{" "}
            </p>
            <div className="flex gap-6 justify-center mt-4">
              <p className="underline hover:text-subtitle">
                <a
                  href="https://jonword-e-commerce.netlify.app"
                  target="_blank"
                >
                  Live
                </a>
              </p>

              <p className="underline hover:text-subtitle">
                <a
                  href="https://github.com/jonword/e-commerce-page"
                  target="_blank"
                >
                  Repo
                </a>
              </p>
            </div>
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
