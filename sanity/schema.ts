import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/block-content";
import category from "./schemas/category";
import post from "./schemas/post";
import { youtube } from "./schemas/youtube";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, blockContent, youtube],
};
