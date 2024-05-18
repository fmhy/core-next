import { generateMarkdown } from "./ast";
import type { Page } from "./types";

// Sample data based on schema (replace with actual data as needed)
const sampleData: Page = {
  title: "Sample Page Title",
  description: "Sample page description.",
  sections: {
    "Section 1": {
      links: [
        { name: "Link 1", link: "https://example.com" },
        { name: "Link 2", link: "https://example.com" },
      ],
      subsections: {
        "Subsection 1": {
          links: [{ name: "Sub Link 1", link: "https://example.com" }],
        },
        "Subsection 2": {
          links: [{ name: "Sub Link 1", link: "https://example.com" }],
        },
      },
    },
    "Section 2": {
      links: [
        { name: "Link dasdiahsiu 1", link: "https://example.com" },
        { name: "Link 2y37uhe28q7h d82", link: "https://example.com" },
      ],
      subsections: {
        "Subsection daishdiuas 1": {
          links: [{ name: "Sub Link 1", link: "https://example.com" }],
        },
        "Subsection dads a2": {
          links: [{ name: "Sub Link 1", link: "https://example.com" }],
        },
      },
    },
  },
};

// // Generate the Markdown AST for the sample data
const markdown = generateMarkdown(sampleData);

console.log(markdown);
