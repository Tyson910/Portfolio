import type { Project } from "~~/shared/types/project";

import { z } from "zod";

const PORTFOLIO_TOPIC = "portfolio-project";

const gitHubRepoSchema = z.object({
  name: z.string().min(1),
  full_name: z.string().min(1),
  description: z.string().nullish(),
  topics: z.array(z.string()),
  homepage: z.string().nullish(),
  html_url: z.url(),
  private: z.boolean(),
});

const languagesSchema = z.record(z.string(), z.number().nonnegative());

function formatProjectName(name: string) {
  return name
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function normalizeWebURL(value: string | null | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

export default defineEventHandler(async (event): Promise<Project[]> => {
  const { githubToken } = useRuntimeConfig(event);
  if (!githubToken) {
    throw createError({ statusCode: 500, statusMessage: "NUXT_GITHUB_TOKEN is not configured" });
  }

  const gitHubFetch = $fetch.create({
    baseURL: "https://api.github.com",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
      "User-Agent": "Tyson-Suttle-Portfolio/1.0",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const repos = z.array(gitHubRepoSchema).parse(
    await gitHubFetch("/user/repos", {
      query: { per_page: 100, type: "all" },
    }),
  );

  const portfolioRepos = repos.filter((repo) => repo.topics.includes(PORTFOLIO_TOPIC));
  const projects = await Promise.all(
    portfolioRepos.map(async (repo): Promise<Project> => {
      const deployURL = normalizeWebURL(repo.homepage);
      const languages = await gitHubFetch(`/repos/${repo.full_name}/languages`)
        .then((value) => languagesSchema.parse(value))
        .catch(() => ({}));
      const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);

      return {
        name: formatProjectName(repo.name),
        description: repo.description ?? "",
        topics: repo.topics.filter((topic) => topic !== PORTFOLIO_TOPIC),
        languages:
          totalBytes === 0
            ? []
            : Object.entries(languages).map(([name, bytes]) => ({
                name,
                percentage: Math.round((bytes / totalBytes) * 1000) / 10,
              })),
        deployURL,
        sourceCodeURL: repo.private ? null : repo.html_url,
      };
    }),
  );

  return projects.sort((a, b) => a.name.localeCompare(b.name));
});
