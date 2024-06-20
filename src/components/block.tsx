import { useSelector } from "react-redux";
import { ComponentMap, TAGS } from "../consts";
import { FC } from "react";
import { RootState } from "../store";

export type BlockProps = {
  parentId: string;
  id: string;
  name: string;
  innerText: string;
  style: object;
  tag: TAGS;
}

export const Block: FC<BlockProps> = ({ id, innerText, tag, style }) => {
  const blocks = useSelector((state: RootState) => state.blocks.filter(({ parentId }) => id === parentId));
  const Component = ComponentMap[tag];

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
