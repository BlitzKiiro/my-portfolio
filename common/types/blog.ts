import Contentful from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface Fields {
  title: Contentful.EntryFields.Text;
  metaDescription: Contentful.EntryFields.Text;
  slug: Contentful.EntryFields.Text;
  content: Document;
  thumbnail: Contentful.Asset;
}

export interface BlogPost {
  fields: Fields;
  metadata: Contentful.Metadata;
  sys: Contentful.Sys;
}
