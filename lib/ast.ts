import { Root, RootContent, ListItem } from 'mdast';
import { toMarkdown } from 'mdast-util-to-markdown';
import { frontmatterToMarkdown } from 'mdast-util-frontmatter';
import type { Page, Link, Section } from './types';

// Function to convert links to markdown list items
function linksToMarkdown(links: Link[]): ListItem[] {
  return links.map((link) => ({
    type: 'listItem',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            url: link.link,
            children: [{ type: 'text', value: link.name }]
          }
        ]
      }
    ]
  }));
}

// Function to convert sections to markdown content
function sectionToMarkdown(section: Section): RootContent[] {
  const contents: RootContent[] = [];

  // Add meta.container if exists
  if (section.meta && section.meta.container) {
    const container = {
      type: 'paragraph',
      children: [
        { type: 'text', value: `:::${section.meta.container.type}\n` },
        { type: 'text', value: section.meta.container.message },
        { type: 'text', value: '\n:::' }
      ]
    };
    contents.push(container);
  }

  // Add links
  if (section.links) {
    contents.push({
      type: 'list',
      ordered: false,
      spread: false,
      children: linksToMarkdown(section.links)
    });
  }

  // Add subsections
  if (section.subsections) {
    for (const [subsectionTitle, subsection] of Object.entries(
      section.subsections
    )) {
      contents.push({
        type: 'heading',
        depth: 3,
        children: [{ type: 'text', value: subsectionTitle }]
      });
      contents.push(...sectionToMarkdown(subsection));
    }
  }

  return contents;
}

// Function to generate Markdown from Page data
export const generateMarkdown = (page: Page) => {
  const root: Root = {
    type: 'root',
    children: [
      {
        type: 'yaml',
        value: `title: ${page.title}\ndescription: ${page.description}`
      },
      // @ts-expect-error FIXME: fix these type-errors
      ...Object.entries(page.sections).flatMap(([sectionTitle, section]) => [
        {
          type: 'heading',
          depth: 2,
          children: [{ type: 'text', value: sectionTitle }]
        },
        ...sectionToMarkdown(section)
      ])
    ]
  };

  return toMarkdown(root, { extensions: [frontmatterToMarkdown('yaml')] });
};
