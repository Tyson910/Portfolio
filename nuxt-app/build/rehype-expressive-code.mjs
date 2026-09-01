import ecTwoSlash from "expressive-code-twoslash";
import rehypeExpressiveCode, { createRenderer } from "rehype-expressive-code";

function normalizeNuxtContentCodeBlocks(node) {
  if (node?.type === "element" && node.tagName === "pre") {
    const code = node.children?.length === 1 ? node.children[0] : undefined;
    const language = node.properties?.language;
    const meta = node.properties?.meta;

    if (code?.type === "element" && code.tagName === "code") {
      code.properties ??= {};

      if (language) {
        code.properties.className = [`language-${language}`];
      }

      if (meta) {
        code.properties.metastring = meta;
      }
    }
  }

  for (const child of node?.children ?? []) {
    normalizeNuxtContentCodeBlocks(child);
  }
}

function makeTwoslashHoversKeyboardAccessible(node) {
  if (
    node?.type === "element" &&
    Array.isArray(node.properties?.className) &&
    node.properties.className.includes("twoslash-hover")
  ) {
    node.properties.tabIndex = 0;
  }

  for (const child of node?.children ?? []) {
    makeTwoslashHoversKeyboardAccessible(child);
  }
}

export default function portfolioExpressiveCode(options) {
  const transformExpressiveCode = rehypeExpressiveCode({
    ...options,
    customCreateRenderer: async (rendererOptions) => {
      const {
        customCreateBlock: _customCreateBlock,
        customCreateRenderer: _customCreateRenderer,
        getBlockLocale: _getBlockLocale,
        tabWidth: _tabWidth,
        ...expressiveCodeOptions
      } = rendererOptions;
      const renderer = await createRenderer(expressiveCodeOptions);

      return { ...renderer, jsModules: [] };
    },
    plugins: [
      ...(options.plugins ?? []),
      ecTwoSlash({
        instanceConfigs: {
          twoslash: { explicitTrigger: true },
        },
      }),
    ],
  });

  return async (tree, file) => {
    normalizeNuxtContentCodeBlocks(tree);
    await transformExpressiveCode(tree, file);
    makeTwoslashHoversKeyboardAccessible(tree);
  };
}
