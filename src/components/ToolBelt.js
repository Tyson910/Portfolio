import classNames from 'classnames';

import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  TailwindIcon,
  TestingLibraryIcon,
} from './Icons';

export default function ToolBelt() {
  const iconClasses = 'w-12 h-12';
  return (
    <>
      <h3 className="text-center">
        My Favorite Tools & Technologies
      </h3>

      <div className="flex flex-wrap max-w-full md:max-w-sm mx-auto items-center justify-evenly gap-x-10 md:gap-x-12 gap-y-5">
        <TechIconContainer
          tool="HTML"
          icon={
            <HTMLIcon
              className={classNames(
                'text-red-600',
                iconClasses
              )}
            />
          }
        />

        <TechIconContainer
          tool="CSS"
          icon={
            <CSSIcon
              className={classNames(
                'text-cyan-400',
                iconClasses
              )}
            />
          }
        />

        {/* <TechIconContainer
          tool="TailwindCSS"
          icon={
            <TailwindIcon
              className={classNames(
                'text-sky-400',
                iconClasses
              )}
            />
          }
        /> */}

        <TechIconContainer
          tool="JavaScript"
          icon={
            <JavaScriptIcon
              className={classNames(
                'bg-black text-yellow-400',
                iconClasses
              )}
            />
          }
        />

        <TechIconContainer
          tool="React"
          icon={
            <ReactIcon
              className={classNames(
                'text-sky-300',
                iconClasses
              )}
            />
          }
        />

        <TechIconContainer
          tool="NextJS"
          icon={
            <NextJSIcon
              className={iconClasses}
            />
          }
        />

        <TechIconContainer
          tool="React Testing Library"
          icon={
            <TestingLibraryIcon
              className={classNames(
                'text-pink-900',
                iconClasses
              )}
            />
          }
        />
      </div>
    </>
  );
}

function TechIconContainer({
  icon,
  tool,
}) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="font-light">
        {tool}
      </p>
    </div>
  );
}
