import { ExternalLinkIcon } from '@heroicons/react/outline';
import { GitHubOutlineIcon } from '@assets/icons/TechIcons';
import { Project } from './types';

export function FeaturedProject({
  projectName,
  description,
  techUsed,
  deployURL,
  sourceCodeURL,
}: Project): JSX.Element {
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
          title={`Link to ${projectName} site`}
          className="ml-5 mr-3 hover:text-slate-300"
        >
          <ExternalLinkIcon className="w-6" />
        </a>
        {sourceCodeURL && (
          <a
            href={sourceCodeURL}
            target="_blank"
            rel="noopener noreferrer"
            title={`Github link to ${projectName}`}
          >
            <GitHubOutlineIcon className="w-6 stroke-2	hover:text-slate-300" />
          </a>
        )}
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
