import Skill from "./Skill";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills-container" id="skills">
        <div className="skills">
          <p>I have experience with these technologies</p>
          <br></br>
          <div className="skillsGrid">
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="The logo icon for HTML 5"
              title="HTML 5"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="The logo icon for CSS3"
              title="CSS 3"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="The logo icon for JavaScript"
              title="JavaScript"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="The logo icon for React"
              title="React"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="The logo icon for Redux"
              title="Redux"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="The logo icon for Git"
              title="Git"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="The logo icon for GitHub"
              title="GitHub"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="The logo icon for NPM"
              title="NPM"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
              alt="The logo icon for NodeJS"
              title="Node JS"
            />
            <Skill
              source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              alt="The logo icon for jest"
              title="Jest"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
