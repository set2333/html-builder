import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../store";
import { MAIN_BLOCK_ID } from "../consts";

export const useContextMenu = () => {
  const dispatch = useDispatch();
  const [isShowAddMenu, setIsShowAddMenu] = useState(false);
  const [isShowChangeMenu, setIsShowChangeMenu] = useState(false);
  const [blockId, setBlockId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () => [
      {
        key: "add",
        label: "Add block",
        onClick: () => setIsShowAddMenu(true),
      },
      {
        key: "change",
        label: "Change block",
        onClick: () => setIsShowChangeMenu(true),
      },
      ...(blockId !== MAIN_BLOCK_ID
        ? [
            {
              key: "remove",
              label: "Remove block",
              onClick: () => {
                dispatch(ACTIONS.removeBlock({ id: blockId }));
                setBlockId(null);
              },
            },
          ]
        : []),
      {
        key: "save",
        label: "Save as html",
        onClick: () => {
          if (ref?.current?.innerHTML) {
            const link = document.createElement("a");
            const file = new Blob([ref?.current?.innerHTML], {
              type: "text/plain",
            });
            link.href = URL.createObjectURL(file);
            link.download = "index.html";
            link.click();
            URL.revokeObjectURL(link.href);
          }
        },
      },
    ],
    [blockId, dispatch]
  );
  const trigger: ["contextMenu"] = ["contextMenu"];

  useEffect(() => {
    const handleContextMenu = ({ target }: MouseEvent) =>
      setBlockId(target?.id);

    addEventListener("contextmenu", handleContextMenu);

    return () => removeEventListener("contextmenu", handleContextMenu);
  }, []);

  useEffect(() => {
    if (blockId === null) {
      setIsShowAddMenu(false);
      setIsShowChangeMenu(false);
    }
  }, [blockId]);

  return {
    ref,
    blockId,
    setBlockId,
    menu: { items },
    trigger,
    isShowAddMenu,
    isShowChangeMenu,
  };
};
