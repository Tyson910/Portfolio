export interface ProjectLanguage {
  name: string;
  percentage: number;
}

export interface Project {
  name: string;
  description: string;
  topics: string[];
  languages: ProjectLanguage[];
  deployURL: string | null;
  sourceCodeURL: string | null;
}
