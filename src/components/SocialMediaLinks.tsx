import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@assets/icons/TechIcons';
import classNames from 'classnames';
// TODO: rename this function
export function SocialMediaLinks(): JSX.Element {
  const iconClasses: string =
    'h-9 w-9 fill-purple-shade-3 transition group-hover:fill-zinc-700 dark:fill-zinc-500 dark:group-hover:fill-zinc-400 ';
  return (
    <div className="mt-6 flex flex-row gap-6 text-slate-900">
      <SocialMediaLink
        href="https://linkedin.com/in/tyson-suttle"
        title="My LinkedIn profile"
      >
        <LinkedInIcon
          className={classNames(
            iconClasses,
            '!fill-[#0A66C2] md:!fill-purple-shade-3 group-hover:!fill-[#0A66C2] dark:group-hover:!fill-[#0A66C2]'
          )}
        />
      </SocialMediaLink>
      <SocialMediaLink
        href="mailto:TysonS.417@gmail.com?subject=Inquiry from website "
        title="My Github profile"
      >
        <EmailIcon
          className={iconClasses}
        />
      </SocialMediaLink>
      <SocialMediaLink
        href="https://github.com/Tyson910"
        title="My Github profile"
      >
        <GitHubIcon
          className={iconClasses}
        />
      </SocialMediaLink>
    </div>
  );
}

function SocialMediaLink({
  href,
  title,
  children,
  ...props
}: {
  href: string;
  title: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <>
      <a
        className="group -m-1 p-1"
        aria-label={title}
        title={title}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    </>
  );
}
