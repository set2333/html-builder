import { STYLE_SETTINGS } from "./consts";
import { StyleSettings, StyleSettingsKey } from "./types";

export const generateId: () => string = () => String(Date.now());

export const parseSettings = (settings: Partial<StyleSettings>) => {
  const findValueRegExp = new RegExp(`(${['em', 'px'].join('|')})`);

  return Object.entries(settings).reduce((acc, [key, value]) => {
    const unit = STYLE_SETTINGS[<StyleSettingsKey>key]?.unit ? String(value).match(findValueRegExp)?.[0] : null;

    return {
      ...acc,
      [key]: {
        value: unit ? String(value).replace(findValueRegExp, '') : value,
        ...(unit ? { unit } : {}),
      }
    };
  }, {});

}