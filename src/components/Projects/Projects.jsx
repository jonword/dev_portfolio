import React from "react";
import ecommerce from "../../assets/images/ecommerce.jpg";
import reddit from "../../assets/images/reddit-lite.jpg";

const Projects = () => {
  return (
    <>
      <section
        className="card-list w-100% mt-20 ml-auto mr-auto flex flex-col justify-center gap-10 p-8 lg:flex-row"
        id="projects"
      >
        {/*REDDIT PROJECT */}
        <article className="card flex  h-[450px] w-[400px] shrink flex-col border border-subtitle bg-projects shadow-lg shadow-shadow">
          <header className="card-header text-center text-white">
            <h3 className="mt-2">Reddit Client App</h3>
            <img src={reddit} className="mt-4 mb-2 pl-2 pr-2" />
            <p className="mb-2 text-sm italic text-navhover">
              Tools used: HTML/JSX, CSS, React, Redux
            </p>
            <p>
              A light version of Reddit that fetches data from the Reddit JSON
              API.
            </p>
            <div className="mt-16 flex justify-center gap-6">
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
          </header>
        </article>

        {/*E-COMMERCE PROJECT */}
        <article className="card flex  h-[450px] w-[400px] shrink flex-col border border-subtitle bg-projects shadow-lg shadow-shadow">
          <header className="card-header text-center text-white">
            <h3 className="mt-2">E-Commerce Product Page</h3>
            <img src={ecommerce} className="mt-4 mb-2 pl-2 pr-2" />
            <p className="mb-2 text-sm italic text-navhover">
              Tools used: HTML/JSX, CSS, React, Redux
            </p>
            <p>
              A responsive web-page that allows you to add the item to your cart
              and updates the cart accordingly.
            </p>
            <div className="mt-16 flex justify-center gap-6">
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
        {/* PROJECT */}
        <article className="card flex  h-[450px] w-[400px] shrink flex-col border border-subtitle bg-projects shadow-lg shadow-shadow">
          <header className="card-header text-center text-white">
            <h3 className="mt-2">E-Commerce Product Page</h3>
            <img className=" mt-4 mb-2 pl-2 pr-2" />
            <p className="mb-2 text-sm italic text-navhover">Tools used:</p>
            <p>Project description goes here</p>
            <div className="mt-16 flex justify-center gap-6">
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
      </section>
    </>
  );
};

export default Projects;
