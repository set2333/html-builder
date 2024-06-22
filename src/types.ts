import { SETTINGS, STYLE_SETTINGS, TAGS } from "./consts";

export type Style =  Partial<Record<keyof typeof STYLE_SETTINGS, string>>;

export type Block = {
  parentId: string;
  id: string;
  name: string;
  innerText: string;
  style: Style;
  tag: TAGS;
}

export type SettingsKey = 'tag' | 'name' | 'innerText';

export type SettingsOption = {
  label: string;
  value: TAGS;
}

export type SettingsValue = {
  type: 'text' | 'number' | 'select',
  label: string,
  placeholder: string,
  options?: SettingsOption[];
};

export type Settings = typeof SETTINGS;

export type StyleSettingsKey = keyof typeof STYLE_SETTINGS;

export type StyleSettings = typeof STYLE_SETTINGS;

export type StyleSettingsKeyParsedValue = {
  value: string;
  unit?: string;
}