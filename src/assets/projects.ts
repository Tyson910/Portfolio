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
}

export const projects: Project[] = [
  {
    projectName: "Sample Website",
    description:
      "Created a custom template for brochure websites for various types of businesses to display their products & services and allow for interested clients to submit inquiries",
    techUsed: ["Astro", "TailwindCSS", "React"],
    deployURL: "https://insure-agency.netlify.app/",
    sourceCodeURL: "https://github.com/Tyson910/InsureLandingPage",
  },
  {
    projectName: "NBA Stats Tool 2.0",
    description:
      "Converted my React single page app to a Svelte app powered by Typescript and Vite",
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
    projectName: "NBA Stats Tool (Version 1)",
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
  // {
  //   projectName: "Ragain’s Flooring",
  //   description: "Created a brochure website for a flooring business based in Jefferson City, Missouri. Enabling this small business owner to display their products & services and allow for interested clients to submit inquiries",
  //   techUsed: ["Vanilla HTML", "Vanilla CSS", "Vanilla JavaScript"],
  //   deployURL: "https://www.RagainsFlooring.com"
  // }
];