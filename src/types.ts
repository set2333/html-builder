import { STYLE_SETTINGS, TAGS } from "./consts";

export type Style =  Partial<Record<keyof typeof STYLE_SETTINGS, string>>;

export type Block = {
  parentId: string;
  id: string;
  name: string;
  innerText: string;
  style: Style;
  tag: TAGS;
}