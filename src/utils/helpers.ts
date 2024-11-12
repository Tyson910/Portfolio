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

export interface Project {
  projectName: string;
  /** Short description of project */
  description: string;
  /** List of technologies used on a given project */
  techUsed: string[];
  /** Live URL of the project */
  deployURL: string;
  /** Link to GitHub repo */
  sourceCodeURL: null | string;
  /** Screenshot preview of deployed project */
  imageURL?: string;
}

export const projects = [
  {
    projectName: "Ragain’s Flooring",
    imageURL: "/img/projects/ragains-flooring.png",
    description:
      `A website for a local flooring company in Jeff City, MO. Features a gallery of completed flooring projects,
        a contact form for requesting estimates, and info about the company's services.`,
    techUsed: ["Vanilla HTML", "Vanilla CSS", "Vanilla JavaScript"],
    deployURL: "https://www.RagainsFlooring.com",
    sourceCodeURL: null,
  },
  {
    projectName: "NBA Stats Tool 1.0",
    imageURL: "/img/projects/v1-nba-react-app.png",
    description:
      "Created a react app to compare up to 5 NBA players stats visually by using a graph either throughout the entire season or between a given date range",
    techUsed: [
      "React",
      "Victory Charts",
      "Vanilla CSS",
      "Balldontlie API",
    ],
    deployURL: "https://v1-nba-stats-tool.netlify.app/",
    sourceCodeURL: "https://github.com/Tyson910/nba-stats-tool/tree/v0",
  },
  {
    projectName: "NBA Stats Tool 2.0",
    imageURL: "/img/projects/v2-nba-react-app.png",
    description:
      "Converted my React app to a Svelte app powered by Typescript and Vite",
    techUsed: [
      "Svelte",
      "TailwindCSS",
      "Typescript",
      "Chart.js",
      "Balldontlie API",
    ],
    deployURL: "https://nba-stats-tool.netlify.app/",
    sourceCodeURL: "https://github.com/Tyson910/nba-stats-tool",
  },
  {
    projectName: "Sample Website",
    imageURL: "/img/projects/insure-agency.png",
    description:
      "Created a sample template that is availabe to be used by various types of businesses to display their products & services, a contact form to get in touch with a business",
    techUsed: ["Astro", "TailwindCSS", "React"],
    deployURL: "https://insure-agency.netlify.app/",
    sourceCodeURL: "https://github.com/Tyson910/InsureLandingPage",
  },
] as const satisfies Project[];
