import BlueSkyIcon from '~icons/ri/bluesky-line';
import LinkedInIcon from '~icons/ri/linkedin-box-fill';
import GithubIcon from '~icons/ri/github-fill';


export const socialLinks = [
  {
    href: 'https://bsky.app/profile/tysons.bsky.social',
    ariaLabel: 'Follow on Blue Sky',
    Icon: BlueSkyIcon,
  },
  {
    href: 'https://www.linkedin.com/in/tyson-suttle/',
    ariaLabel: 'Follow on LinkedIn',
    Icon: LinkedInIcon,
  },
  {
    href: 'https://github.com/Tyson910',
    ariaLabel: 'Follow on GitHub',
    Icon: GithubIcon,
  },
] as const satisfies {
  href: string;
  ariaLabel: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}[];