import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@components/Icons';

export function SocialMediaLinks(): JSX.Element {
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
        <EmailIcon />
      </a>
      <a
        href="https://github.com/Tyson910"
        rel="noopener noreferrer"
        target="_blank"
        className="w-12 h-12 hover:drop-shadow hover:text-slate-700 btn-animation"
        title="My Github profile"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}
