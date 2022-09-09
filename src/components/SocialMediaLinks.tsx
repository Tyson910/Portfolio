import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@assets/icons/TechIcons';
import classNames from 'classnames';
// TODO: rename this function
export function SocialMediaLinks(): JSX.Element {
  const iconClasses: string =
    'h-9 w-9 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300 ';
  return (
    <div className="mt-6 flex flex-row gap-6 text-slate-900">
      <SocialMediaLink
        href="https://linkedin.com/in/tyson-suttle"
        title="My LinkedIn profile"
      >
        <LinkedInIcon
          className={classNames(
            iconClasses,
            '!fill-[#0A66C2] md:!fill-zinc-500 group-hover:fill-[#0A66C2] dark:group-hover:fill-[#0A66C2]'
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
