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