import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "./store";

export const useContextMenu = () => {
  const dispatch = useDispatch();
  const [isShowAddMenu, setIsShowAddMenu] = useState(false);
  const [isShowChangeMenu, setIsShowChangeMenu] = useState(false);
  const [blockId, setBlockId] = useState<string | null>(null);

  const items = useMemo(() => ([
    {
      key: 'add',
      label: 'Add block',
      onClick: () => setIsShowAddMenu(true),
    },
    {
      key: 'change',
      label: 'Change block',
      onClick: () => setIsShowChangeMenu(true),
    },
    {
      key: 'remove',
      label: 'Remove block',
      onClick: () => {
        dispatch(ACTIONS.removeBlock({ id: blockId }));
        setBlockId(null);
      },
    },
  ]), [blockId, dispatch]);
  const trigger: ['contextMenu'] = ['contextMenu'];

  useEffect(() => {
    const handleContextMenu = ({ target }: MouseEvent) => setBlockId(target?.id);
    
    addEventListener('contextmenu', handleContextMenu);

    return () => removeEventListener('contextmenu', handleContextMenu);
  }, []);

  useEffect(() => {
    if (blockId === null) {
      setIsShowAddMenu(false);
      setIsShowChangeMenu(false);
    }
  }, [blockId]);

  return {
    blockId,
    setBlockId,
    menu: { items },
    trigger,
    isShowAddMenu,
    isShowChangeMenu,
  };
};