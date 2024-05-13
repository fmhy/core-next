> [!NOTE]
> This is an experimental specification for FMHY, to replace our use on markdown.
> This specification is largely unfinished, give feedback on discord in the `#site-development` channel.

## Main Schema: schema.json

**Description:** The main schema defines the overall structure of the FMHY schema. It includes properties for the page title, description, and sections.

- **Properties:**
  - **title:** The page title, to be used in VitePress
  - **description:** The page description, to be used in VitePress
  - **sections:** The sections for this page
- **Required Fields:** title, description, sections
- **Schema Location:** [schema.json](./schema/schema.json)

## Link Schema: link.json

**Description:** The link schema defines the structure for representing individual links. It includes properties such as name, link, description, metadata, related links, and additional links.

- **Properties:**
  - **name:** Name of the link item
  - **link:** Link of the link item
  - **description:** Description for this link item (optional)
  - **metadata:** List of tags for adding metadata to links
  - **related:** Related links
  - **additional:** Additional links
- **Required Fields:** `name`, `link`
- **Schema Location:** [link.json](./schema/link.json)

## Section Schema: section.json

**Description:** The section schema defines the structure for representing sections within a page. It includes properties for metadata, links, and subsections.

- **Properties:**
  - **meta:** Metadata for this section
    - **container:** Message and type for displaying admonitions
  - **links:** Array of links
  - **subsections:** Subsections below this section, to be displayed in h2 headings
- **Required Fields:** `links`
- **Schema Location:** [section.json](./schema/section.json)
