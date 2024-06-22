import { Button, Divider, Drawer, Flex } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { generateId } from "../utils";
import { ACTIONS } from "../store";
import { Settings } from "./settings";
import { StyleSettings } from "./styleSettings";
import { useSettings } from "../hooks";

type AddMenuProps = {
  blockId: string | null;
  setBlockId: (value: string | null) => void;
};

export const AddMenu: FC<AddMenuProps> = ({ blockId, setBlockId }) => {
  const dispatch = useDispatch();
  const {
    blockSettings,
    setBlockSettings,
    style,
    setStyle,
  } = useSettings({ blockId });

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
