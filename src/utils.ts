import { STYLE_SETTINGS } from "./consts";

export const generateId: () => string = () => String(Date.now());

export const parseSettings = (settings: object) => {
  const findValueRegExp = new RegExp(`(${['em', 'px'].join('|')})`);

  return Object.entries(settings).reduce<Partial<Record<keyof typeof STYLE_SETTINGS, string>>>((acc, [key, value]) => {
    const unit = STYLE_SETTINGS[<keyof typeof STYLE_SETTINGS>key]?.unit ? value.match(findValueRegExp)?.[0] : null;

    return {
      ...acc,
      [key]: {
        value: unit ? value.replace(findValueRegExp, '') : value,
        ...(unit ? { unit } : {}),
      }
    };
  }, {});

}