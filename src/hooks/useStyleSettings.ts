import { useSelector } from "react-redux";
import { RootState } from "../store";
import { STYLE_SETTINGS } from "../consts";

export const useStyleSettings = () => {
  const usedStyleSettings = useSelector((state: RootState)  => state.usedStyleSettings);

  return Object
    .entries(STYLE_SETTINGS)
    .filter(([key]) => usedStyleSettings.includes(key));
};
