import { parseYAML } from "confbox";
import { readdir } from "fs/promises";
import { type Page } from "./types";
import { readFileSync } from "fs";
import { join } from "path";
import { generateMarkdown } from "./ast";

export async function load() {
  const files = (await readdir("content")).filter((file) =>
    file.endsWith(".yaml"),
  );

  return files.map((entry) => {
    const data = parseYAML<Page>(
      readFileSync(join("content", entry), { encoding: "utf8" }),
    );

    const content = generateMarkdown(data);

    return {
      params: { slug: "links" },
      content: content,
    };
  });
}

// console.log(await load()[0].content);
