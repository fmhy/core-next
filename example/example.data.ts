import { parseYAML } from "confbox";
import { readFileSync } from "node:fs";

interface Data {
  name: string;
  description: string;
  links: {}[];
}
export default {
  load() {
    const content = readFileSync("links.yaml", { encoding: "utf8" });

    const data = parseYAML<{ name: string }>(content);
    return data;
  },
};
