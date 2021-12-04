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
    <div className="max-w-screen-sm flex flex-col border-2 border-purple-shade-4 rounded-lg mb-10 bg-purple-100 pb-5">
      <div className="text-purple-100 bg-purple-shade-4 flex items-center md:items-baseline mb-5 py-5 px-8">
        <p className="align-text-bottom text-2xl md:text-4xl font-medium ">
          {projectName}
        </p>
        <a
          href={deployURL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-5 mr-3"
        >
          <ExternalLinkIcon className="w-6" />
        </a>
        <a
          href={sourceCodeURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubOutlineIcon className="w-6 stroke-2	" />
        </a>
      </div>
      <p className="mb-3 px-8 text-purple-shade-5">
        {description}
      </p>
      <ul className="flex flex-wrap gap-x-7 px-8">
        {techUsed.map((tech) => (
          <li
            className="italic text-purple-shade-5 font-light"
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
    <section className="space-y-10">
      <p
        className="pt-20 -mt-20 mb-14 text-4xl text-center font-semibold"
        id="projects"
      >
        Projects
      </p>
      {projects.map((project) => (
        <div
          className="flex even:justify-end"
          key={project.projectName}
        >
          <FeaturedProject
            {...project}
          />
        </div>
      ))}
    </section>
  );
}
