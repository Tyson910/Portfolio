import { ExternalLinkIcon } from '@heroicons/react/outline';
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
    <div className="flex flex-col border border-red-500 mb-10 p-8">
      <div className="flex items-center md:items-baseline mb-5">
        <p className="align-text-bottom text-2xl md:text-4xl font-medium">
          {projectName}
        </p>
        <a
          href={deployURL}
          target="_blank"
          rel="noreferrer"
          className="ml-5 mr-3"
        >
          <ExternalLinkIcon className="w-6" />
        </a>
        <a
          href={sourceCodeURL}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubOutlineIcon className="w-6 stroke-2	" />
        </a>
      </div>
      <p className="mb-3">
        {description}
      </p>
      <ul className="flex flex-wrap gap-x-7">
        {techUsed.map((tech) => (
          <li
            className="italic text-slate-800 font-light"
            key={tech}
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

FeaturedProject.propTypes = {
  projectName:
    PropTypes.string.isRequired,
  description:
    PropTypes.string.isRequired,
  techUsed: PropTypes.array.isRequired,
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
