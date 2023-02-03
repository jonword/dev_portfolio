import React from "react";
import ecommerce from "../../assets/images/projects/ecommerce.jpg";
import reddit from "../../assets/images/projects/reddit-lite.jpg";
import portfolio from "../../assets/images/projects/portfolio.png";

const Projects = () => {
  return (
    <>
      <div id="projects" className="mt-20 w-full lg:h-screen">
        <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4 text-white">
          <p className="text-center text-4xl font-bold">Projects</p>
          <div className="flex shrink flex-col items-center justify-center gap-12 p-4 lg:flex-row">
            {/*REDDIT PROJECT */}
            <div className="card flex  max-h-[400px] max-w-[400px] shrink flex-col items-center justify-center border border-subtitle bg-projects p-2 shadow-lg shadow-shadow">
              <header className="card-header text-center text-white">
                <h3 className="mt-2">Reddit-Lite</h3>
              </header>
              <img
                src={reddit}
                alt="Reddit-Lite project"
                className="mt-4 mb-2 pl-2 pr-2"
              />
              <p className="mb-2 text-sm italic text-navhover">
                Tools used: HTML/JSX, CSS, React, Redux
              </p>
              <p className="text-center">
                A light version of the Reddit app with a functional search bar.
              </p>
              <div className="mt-16 flex justify-center gap-6 pb-2">
                <p className="underline hover:text-subtitle">
                  <a
                    href="https://jonword-reddit-lite.netlify.app"
                    target="_blank"
                  >
                    Live
                  </a>
                </p>

                <p className="underline hover:text-subtitle">
                  <a
                    href="https://github.com/jonword/redditclient"
                    target="_blank"
                  >
                    Repo
                  </a>
                </p>
              </div>
            </div>

            {/*E-COMMERCE PROJECT */}
            <div className="card flex  max-h-[400px] max-w-[400px] shrink flex-col items-center justify-center border border-subtitle bg-projects p-2 shadow-lg shadow-shadow">
              <header className="card-header text-center text-white">
                <h3 className="mt-2">E-Commerce Product Page</h3>
              </header>
              <img
                src={ecommerce}
                alt="E-Commerce Project"
                className="mt-4 mb-2 pl-2 pr-2"
              />
              <p className="mb-2 text-sm italic text-navhover">
                Tools used: HTML/JSX, CSS, React/TypeScript, Redux
              </p>
              <p className="text-center">
                A responsive web-page that allows you to add the item to your
                cart and updates the cart accordingly.
              </p>
              <div className="mt-16 flex justify-center gap-6 pb-2">
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
            </div>

            {/* PROJECT */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
