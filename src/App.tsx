import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Block } from "./components/block";
import { Dropdown } from "antd";
import { useContextMenu } from "./hooks";
import { AddMenu } from "./components/addMenu";
import { ChangeMenu } from "./components/changeMenu";

export const App: FC = () => {
  const mainBlock = useSelector((state: RootState) =>
    state.blocks.find(({ parentId }) => parentId === "")
  );
  const {
    ref,
    menu,
    trigger,
    blockId,
    setBlockId,
    isShowAddMenu,
    isShowChangeMenu,
  } = useContextMenu();

  return (
    <div>
      {!!mainBlock && (
        <Dropdown menu={menu} trigger={trigger}>
          <div ref={ref}>
            <Block {...mainBlock} />
          </div>
        </Dropdown>
      )}
      {isShowAddMenu && <AddMenu blockId={blockId} setBlockId={setBlockId} />}
      {isShowChangeMenu && (
        <ChangeMenu blockId={blockId} setBlockId={setBlockId} />
      )}
    </div>
  );
};
