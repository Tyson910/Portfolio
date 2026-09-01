const languageColors: Record<string, string> = {
  astro: "#ff5a03",
  css: "#563d7c",
  dockerfile: "#384d54",
  go: "#00add8",
  html: "#e34c26",
  javascript: "#f1e05a",
  mdx: "#fcb32c",
  python: "#3572a5",
  rust: "#dea584",
  scss: "#c6538c",
  shell: "#89e051",
  typescript: "#3178c6",
  vue: "#41b883",
};

export function getLanguageColor(name: string): string {
  return languageColors[name.toLowerCase()] ?? "#8b8b8b";
}
