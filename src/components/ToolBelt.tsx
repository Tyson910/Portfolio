import classNames from 'classnames';

import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  TestingLibraryIcon,
} from '@assets/icons/TechIcons';

export function ToolBelt() {
  const iconClasses = 'w-12 h-12';
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-300 md:to-gray-100">
      <h3 className="text-4xl mb-14 text-center font-semibold">
        My Favorite Tools & Technologies
      </h3>

      <div className="flex flex-wrap container md:max-w-sm items-center justify-evenly gap-10 md:gap-x-12">
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
    </section>
  );
}

function TechIconContainer({
  icon,
  tool,
}: {
  /** Name of Tech used */
  tool: string;
  /** SVG icon of tech used */
  icon: JSX.Element;
}): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-y-3.5">
      {icon}
      <p>{tool}</p>
    </div>
  );
}
