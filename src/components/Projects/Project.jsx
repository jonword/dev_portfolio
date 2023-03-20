import React from "react";

const Project = (props) => {
  const { image, title, alt, techList, description, live, repo, id } = props;

  return (
    <div className="card flex  max-h-[400px] max-w-[400px] shrink flex-col items-center justify-center border border-subtitle bg-projects p-2 shadow-lg shadow-shadow">
      <header className="card-header text-center text-white">
        <h3 className="mt-2">{title}</h3>
      </header>
      <img src={image} alt={alt} className="mt-4 mb-2 pl-2 pr-2" />
      <p className="mb-2 text-center text-sm italic text-navhover">
        Tools used: {techList}
      </p>
      <p className="pb-4 text-center">{description}</p>
      <div className="flex justify-center gap-6 pb-1">
        <p className="underline hover:text-subtitle">
          <a href={live} target="_blank" rel="noreferrer">
            Live
          </a>
        </p>

        <p className="underline hover:text-subtitle">
          <a href={repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
