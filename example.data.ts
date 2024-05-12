import { parseYAML } from "confbox";
import { readFileSync } from "node:fs";
import { defineLoader } from "vitepress";

interface Data {
  name: string;
  description: string;
  links: {}[];
}

export default defineLoader({
  watch: ["./links.yaml"],
  async load(watchedFiles): Promise<Data> {
    return parseYAML<Data>(readFileSync(watchedFiles[0], "utf-8"));
  },
});
