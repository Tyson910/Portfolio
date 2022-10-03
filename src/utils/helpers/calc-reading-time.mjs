import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function calcReadingTime() {
  return (tree, { data }) => {
    // remove any component imports
    const actualContent =
      tree.children.filter(
        ({ type }) =>
          type.toLowerCase() !=
          'mdxjsesm'
      );
    const textOnPage = toString(
      actualContent
    );
    const { text, words } =
      getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    // debugger;
    data.astro.frontmatter.minutesRead =
      text;
    data.astro.frontmatter.wordCount =
      words;
  };
}
