import { Button, Divider, Drawer, Flex } from "antd";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateId, parseSettings } from "../utils";
import { ACTIONS } from "../store";
import { STYLE_SETTINGS, TAGS } from "../consts";
import { Settings } from "./settings";
import { StyleSettings } from "./styleSettings";

type AddMenuProps = {
  blockId: string | null;
  setBlockId: (value: string | null) => void;
};

export const AddMenu: FC<AddMenuProps> = ({ blockId, setBlockId }) => {
  const dispatch = useDispatch();
  const {
    id,
    parentId,
    style: blockStyle,
    ...block
  } = useSelector(
    (state: RootState) =>
      state.blocks.find(({ id }) => id === blockId) || {
        style: {},
        tag: TAGS.div,
      }
  );

  const [blockSettings, setBlockSettings] = useState({});
  const [style, setStyle] = useState<Partial<Record<keyof typeof STYLE_SETTINGS, string>>>({});

  useEffect(() => {
    setStyle(parseSettings(blockStyle));
    setBlockSettings(block);
  }, [blockId]);

  return (
    <Drawer
      open={blockId !== null}
      placement="left"
      closable={false}
      width={600}
    >
      <Settings
        blockSettings={blockSettings}
        setBlockSettings={setBlockSettings}
      />
      <Divider />
      <StyleSettings style={style} setStyle={setStyle} />
      <Divider />
      <Flex vertical>
        <Button
          style={{ marginBottom: "10px" }}
          type="primary"
          onClick={() => {
            dispatch(
              ACTIONS.addBlock({
                id: generateId(),
                parentId: blockId,
                style: Object.entries(style).reduce(
                  (acc, [key, settings = {}]) => ({
                    ...acc,
                    ...(settings?.value
                      ? { [key]: `${settings?.value}${settings?.unit || ""}` }
                      : {}),
                  }),
                  {}
                ),
                ...blockSettings,
              })
            );
            setBlockId(null);
          }}
        >
          Add block
        </Button>
        <Button onClick={() => setBlockId(null)}>Cancel</Button>
      </Flex>
    </Drawer>
  );
};
