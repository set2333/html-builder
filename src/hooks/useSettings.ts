import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { parseSettings } from "../utils";
import { StyleSettingsKey, StyleSettingsKeyParsedValue } from "../types";
import { TAGS } from "../consts";
import { RootState } from "../store";

type UseSettingsProps = {
  blockId: string | null;
}

export const useSettings = ({ blockId }: UseSettingsProps) => {
  const { style: blockStyle, ...block } = useSelector(
    (state: RootState) =>
      state.blocks.find(({ id }) => id === blockId) || {
        style: {},
        tag: TAGS.div,
        name: '',
        innerText: '',
      }
  );

  const [blockSettings, setBlockSettings] = useState({});
  const [style, setStyle] = useState<Partial<Record<StyleSettingsKey, StyleSettingsKeyParsedValue>>>({});

  useEffect(() => {
    setStyle(parseSettings(blockStyle));
    setBlockSettings({ name: block.name, tag: block.tag, innerText: block.innerText });
  }, [blockId, blockStyle, block.name, block.tag, block.innerText]);

  return {
    blockSettings,
    setBlockSettings,
    style,
    setStyle,
  };
}