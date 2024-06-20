import { Flex, Input, Select, Typography } from "antd";
import { FC } from "react";
import { SETTINGS } from "../consts";

const { Text } = Typography;

type SettingsProps = {
  blockSettings: any;
  setBlockSettings: (style: any) => void;
};

export const Settings: FC<SettingsProps> = ({
  blockSettings,
  setBlockSettings,
}) => {
  return (
    <>
      {Object.entries(SETTINGS).map(([name, settings]) => (
        <Flex key={name} style={{ marginBottom: "10px" }}>
          <Text style={{ width: "25%" }}>{settings.label}</Text>
          {settings.type === "select" ? (
            <Select
              style={{ width: "100%" }}
              value={blockSettings?.[name]}
              options={[...settings.options]}
              onChange={(value) =>
                setBlockSettings({ ...blockSettings, [name]: value })
              }
            />
          ) : (
            <Input
              name={name}
              placeholder={settings.placeholder}
              value={blockSettings?.[name] || ""}
              onChange={({ target: { value } }) =>
                setBlockSettings({ ...blockSettings, [name]: value })
              }
            />
          )}
        </Flex>
      ))}
    </>
  );
};
