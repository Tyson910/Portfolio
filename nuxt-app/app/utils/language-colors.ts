/*
 * GitHub linguist hues, tuned in OKLch so every color clears 3:1 contrast
 * against the white card background AND stays >= 0.12 ΔE from every other
 * language color (the raw linguist palette had near-collisions like
 * Python/TypeScript at 0.05 ΔE that blurred adjacent bar segments).
 */
const languageColors: Record<string, string> = {
  astro: "#ec310e",
  css: "#8049aa",
  dockerfile: "#1d3138",
  go: "#007aa1",
  html: "#af1519",
  javascript: "#878400",
  mdx: "#d67c00",
  python: "#004394",
  rust: "#89604e",
  scss: "#ee59ba",
  shell: "#007a00",
  typescript: "#5190ff",
  vue: "#00a67a",
};

export function getLanguageColor(name: string): string {
  return languageColors[name.toLowerCase()] ?? "#929292";
}
