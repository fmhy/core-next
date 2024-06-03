/**
 * Represents the metadata tags associated with a link.
 * Possible values are "starred", "foss", "android", "ios", "linux", "windows", "macos".
 */
export type Metadata =
  | 'starred'
  | 'foss'
  | 'android'
  | 'ios'
  | 'linux'
  | 'windows'
  | 'macos';

/**
 * Represents a link item.
 */
export interface Link {
  /** Name of the link item. */
  name: string;
  /** URL of the link item. */
  link: string;
  /** Description of the link item. */
  description?: string;
  /** List of metadata tags for the link. */
  metadata?: Metadata[];
  /** Related links associated with this link. */
  related?: Omit<Link, 'related' | 'additional' | 'description'>[];
  /** Additional links associated with this link. */
  additional?: Omit<Link, 'related' | 'additional' | 'description'>[];
}

/**
 * Represents a section.
 */
export interface Section {
  /** Metadata for the section. */
  meta?: {
    /** Container message for the section. */
    container: {
      /** Message to show the user. */
      message: string;
      /** Type of admonition. */
      type: 'warning' | 'danger' | 'tip' | 'info';
    };
  };
  /** Links within the section. */
  links: Link[];
  /** Subsections within the section. */
  subsections?: {
    [key: string]: Section;
  };
}

/**
 * Represents the data structure for the FMHY schema.
 */
export interface Page {
  /** The page title. */
  title: string;
  /** The page description. */
  description: string;
  /** Sections of the page. */
  sections: {
    [key: string]: Section;
  };
}
