import { Flex, Input, Select, Typography } from "antd";
import { FC } from "react";
import { SETTINGS, TAGS } from "../consts";

const { Text } = Typography;

type SettingsProps = {
  blockSettings: Record<keyof typeof SETTINGS, string | TAGS>;
  setBlockSettings: (style: Record<keyof typeof SETTINGS, string | TAGS>) => void;
};

export const Settings: FC<SettingsProps> = ({
  blockSettings,
  setBlockSettings,
}) => {
  console.log(`???blockSettings`, blockSettings)
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
              onChange={({ target: { value } }) => {
                setBlockSettings({ ...blockSettings, [name]: value })
              }}
            />
          )}
        </Flex>
      ))}
    </>
  );
};
