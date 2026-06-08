export type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export type OpenGraphData = {
  title: string;
  description: string;
  url: string;
  type?: string;
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
};

export type SchemaObject = Record<string, unknown>;
