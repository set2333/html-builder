import { FC } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../store";
import { Button, Divider, Drawer, Flex } from "antd";
import { Settings } from "./settings";
import { StyleSettings } from "./styleSettings";
import { useSettings } from "../hooks";

type ChangeMenuProps = {
  blockId: string | null;
  setBlockId: (value: string | null) => void;
};

export const ChangeMenu: FC<ChangeMenuProps> = ({ blockId, setBlockId }) => {
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
          type="primary"
          style={{ marginBottom: "10px" }}
          onClick={() => {
            dispatch(
              ACTIONS.changeBlock({
                id: blockId,
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
          Change block
        </Button>
        <Button onClick={() => setBlockId(null)}>Cancel</Button>
      </Flex>
    </Drawer>
  );
};
