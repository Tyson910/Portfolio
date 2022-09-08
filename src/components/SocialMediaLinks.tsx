import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@assets/icons/TechIcons';

export function SocialMediaLinks(): JSX.Element {
  const iconClasses: string =
    'h-9 w-9 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300 ';
  return (
    <div className="hidden md:flex gap-x-8 text-slate-900">
      <a
        href="https://linkedin.com/in/tyson-suttle"
        rel="noopener noreferrer"
        target="_blank"
        className="w-12 h-12 hover:drop-shadow	btn-animation text-[#0A66C2]"
        title="LinkedIn profile"
      >
        <LinkedInIcon />
      </a>
      <a
        href='mailto:TysonS.417@gmail.com, subject="Inquiry from website" '
        rel="noopener noreferrer"
        target="_blank"
        className="w-14 h-14 hover:drop-shadow hover:text-slate-700 btn-animation"
        title="My email"
      >
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
