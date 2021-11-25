import PropTypes from 'prop-types';

// TODO: GET projects data from GitHub
import projects from '../../../data/projects.json';
import { GitHubOutlineIcon } from '../Icons';

export function FeaturedProject({
  projectName,
  description,
  techUsed,
  deployURL,
  sourceCodeURL,
}) {
  return (
    <div
      className="flex flex-col border border-red-500 mb-10 p-8 gap-y-10"
      key={projectName}
    >
      <p className="text-2xl font-medium">
        {projectName}
      </p>
      <p>{description}</p>
      <div>
        <p>Technologies I Used:</p>
        <ul className="flex flex-wrap gap-x-2">
          {techUsed.map((tech) => (
            <li className="italic">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-evenly">
        <a
          href={deployURL}
          className="border border-black w-40 space-x-3 p-2.5 text-center	"
          target="_blank"
          rel="noreferrer"
        >
          <span className="align-text-bottom">
            View Demo
          </span>
          <span className="text-2xl">
            {
              // eyes emoji hexcode
            }
            &#128064;
          </span>
        </a>
        <a
          href={sourceCodeURL}
          className="flex items-center gap-x-3 border border-black w-40 p-2.5 text-center"
          target="_blank"
          rel="noreferrer"
        >
          <span className="align-text-bottom">
            Source Code
          </span>
          <GitHubOutlineIcon className="w-5" />
        </a>
      </div>
    </div>
  );
}

FeaturedProject.propTypes = {
  projectName:
    PropTypes.string.isRequired,
  description:
    PropTypes.string.isRequired,
  techUsed: PropTypes.string.isRequired,
  deployURL:
    PropTypes.string.isRequired,
  sourceCodeURL:
    PropTypes.string.isRequired,
};

export default function AllProjects() {
  return (
    <>
      {projects.map((project) => (
        <div className="max-w-screen-sm mx-auto">
          <FeaturedProject
            {...project}
            key={project.projectName}
          />
          {/* <img
            src="/img/miniScreenshot.jpg"
            className="max-h-[270px] w-96"
          /> */}
        </div>
      ))}
    </>
  );
}
