import { useSelector } from "react-redux";
import { TAGS } from "../consts";
import { FC } from "react";
import { RootState } from "../store";
import { useComponentsMap } from "../hooks";
import { Style } from "../types";

export type BlockProps = {
  parentId: string;
  id: string;
  name: string;
  innerText: string;
  style: Style;
  tag: TAGS;
}

export const Block: FC<BlockProps> = ({ id, innerText, tag, style }) => {
  const componentsMap = useComponentsMap();
  const blocks = useSelector((state: RootState) => state.blocks.filter(({ parentId }) => id === parentId));
  const Component = componentsMap[tag];

  return (
    <>
      {!!Component && (
        <Component id={id} style={style}>
          {innerText || ''}
          {blocks.map((block) => <Block key={block.id} {...block} />)}
        </Component>
      )}
    </>
    
  );
};
