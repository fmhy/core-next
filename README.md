> [!NOTE]
> This is an experimental specification for FMHY, to replace our use on markdown.
> This specification is largely unfinished, give feedback on discord in the `#site-development` channel.

### Properties

- **title**:

  - Type: string
  - Description: The page title, to be used in VitePress

- **description**:

  - Type: string
  - Description: The page description, to be used in VitePress

- **sections**:
  - Type: object
  - Description: The sections for this page

#### Section Properties

Each section within the `sections` object has the following properties:

- **meta**:

  - Description: Metadata for this section
  - Properties:
    - **container**:
      - Type: object
      - Properties:
        - **message**:
          - Type: string
          - Description: Message to show the user, in containers/admonitions (warnings, info)
        - **type**:
          - Type: string
          - Enum: [ "warning", "danger", "tip", "info" ]
          - Description: Admonition type

- **links**:
  - Description: Array of links
  - Type: array

Each link within the `links` array has the following properties:

- **name**:

  - Type: string
  - Description: Name of this link item

- **link**:

  - Type: string
  - Description: Link of this link item
  - Format: uri
  - Pattern: `/^(https?|ftp):\/\/[\w\d\-_]+(\.[\w\d\-_]+)+([\w\d\-.,@?^=%&:/~\+#]\*[\w\d\-@?^=%&/~\+#])?$/`

- **metadata**:

  - Type: array
  - Description: List of tags for adding metadata to links
  - Enum: [ "starred", "foss", "android", "ios", "linux", "windows", "macos" ]

- **links**:
  - Description: Nested links, separated by commas
  - Type: array
  - Properties:
    - **name**:
      - Type: string
      - Description: Name of this link item
    - **link**:
      - Type: string
      - Description: Link of this link item
      - Format: uri
      - Pattern: `/^(https?|ftp):\/\/[\w\d\-_]+(\.[\w\d\-_]+)+([\w\d\-.,@?^=%&:/~\+#]*[\w\d\-@?^=%&/~\+#])?$/`
    - **metadata**:
      - Type: array
      - Description: List of tags for adding metadata to links
      - Enum: [ "starred", "foss", "android", "ios", "linux", "windows", "macos" ]

### Required Fields

- title
- description
- sections
