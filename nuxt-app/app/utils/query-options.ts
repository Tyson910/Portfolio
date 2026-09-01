import type { Project } from "~~/shared/types/project";

import { queryOptions } from "@tanstack/vue-query";

import { queryCollection } from "#imports";

export function homeBlogPostsQueryOptions(includeDrafts: boolean) {
  return queryOptions({
    queryKey: ["content", "home", "blog", { includeDrafts }] as const,
    queryFn: () => {
      let query = queryCollection("blog").select(
        "path",
        "title",
        "description",
        "dateCreated",
        "tags",
        "isDraft",
      );

      if (!includeDrafts) query = query.where("isDraft", "=", false);
      return query.all();
    },
  });
}

export function homeSnippetsQueryOptions(includeDrafts: boolean) {
  return queryOptions({
    queryKey: ["content", "home", "snippets", { includeDrafts }] as const,
    queryFn: () => {
      let query = queryCollection("snippets")
        .select("path", "title", "description", "lastUpdated", "language", "draft")
        .where("isFeaturedPost", "=", true);

      if (!includeDrafts) query = query.where("draft", "=", false);
      return query.all();
    },
  });
}

export function projectsQueryOptions() {
  return queryOptions({
    queryKey: ["/api/projects"] as const,
    queryFn: (): Promise<Project[]> => $fetch<Project[]>("/api/projects"),
    select: (projects) =>
      projects.map((project) => ({
        ...project,
        languages: [...project.languages].sort((a, b) => b.percentage - a.percentage).slice(0, 3),
      })),
  });
}
