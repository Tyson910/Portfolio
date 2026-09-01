export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.body = html.body
      .filter((fragment) => !fragment.includes("__NUXT_SITE_CONFIG__"))
      .map((fragment) =>
        fragment.replace(/<style>([\s\S]*?)<\/style>/g, (_, css: string) => {
          const decodedCss = css
            .replaceAll("&gt;", ">")
            .replaceAll("&lt;", "<")
            .replaceAll("&#39;", "'")
            .replaceAll("&quot;", '"')
            .replaceAll("&amp;", "&");

          return `<style>${decodedCss}</style>`;
        }),
      );
  });
});
