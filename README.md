> [!NOTE]
> This is an experimental specification for FMHY, to replace our use on markdown.
> This specification is largely unfinished, give feedback on discord in the `#site-development` channel.

### YAML specification for links

- `name`: Name of the page, for Vitepress
- `description`: Description of the page, for Vitepress
- `sections`: Quoted keys of headings
  - `note`: Message to show the user, right before links
  - `items`: Cascading lists of links

## Specification for `items`

- `items` can have any infinite amount of top-level links which will be unordered list items.
- Links under any top-level link will be a sub-item, seperated by `/` in Markdown output.
- Any item having both `name` and `links` only, will output like so: `- **[name]** / [...links]`
