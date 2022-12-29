import { LinkIcon } from '@heroicons/react/20/solid';
import { GitHubOutlineIcon } from '@assets/icons/TechIcons';
import type { Project } from '@assets/projects';

export function FeaturedProject({
  projectName,
  description,
  techUsed,
  deployURL,
  sourceCodeURL,
}: Project): JSX.Element {
  return (
    <>
      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
        <div className="flex flex-row items-center gap-x-5">
          <p className="text-2xl flex flex-row items-center font-bold text-gray-900">
            {projectName}
          </p>
        </div>
        <div className="mt-3 mb-4 flex flex-row gap-x-3">
          <a
            href={deployURL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex gap-x-1 items-center hover:underline
                     rounded-full  text-xs text-gray-600 font-medium hover:text-purple-shade-2`}
          >
            Visit Site
            <LinkIcon className="w-4 h-4" />
          </a>
          {sourceCodeURL && (
            <a
              href={sourceCodeURL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex gap-x-1 items-center hover:underline
              rounded-full  text-xs text-gray-600 font-medium hover:text-purple-shade-2`}
            >
              Source Code
              <GitHubOutlineIcon className="w-4 h-4 stroke-2" />
            </a>
          )}
        </div>
        <p className="mb-5 font-light text-gray-500">{description}</p>
        <div className="self-start flex gap-2 flex-wrap">
          {techUsed.map((tech) => (
            <span
              key={tech}
              className={`inline-flex items-center
              rounded-full bg-purple-100 py-2 px-3 text-sm font-medium text-purple-shade-2`}
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </>
  );
}
