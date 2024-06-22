import { Card, Flex, Input, Select, Typography } from "antd";
import { FC } from "react";
import { SETTINGS } from "../consts";
import { SettingsKey, Settings as SettingsType, SettingsValue } from "../types";

const { Text } = Typography;

type SettingsProps = {
  blockSettings: Partial<SettingsType>;
  setBlockSettings: (style: Partial<SettingsType>) => void;
};

export const Settings: FC<SettingsProps> = ({
  blockSettings,
  setBlockSettings,
}) => {
  return (
    <Card title="Settings">
      {Object.entries(SETTINGS).map((param) => {
        const name = param[0] as SettingsKey;
        const settings = param[1] as SettingsValue;
        const settingsValue = blockSettings?.[name];

        return (
        <Flex key={name} style={{ marginBottom: "10px" }}>
          <Text style={{ width: "25%" }}>{settings.label}</Text>
          {settings.type === "select" ? (
            <Select
              style={{ width: "100%" }}
              value={settingsValue}
              options={[...settings?.options || []]}
              onChange={(value) =>
                setBlockSettings({ ...blockSettings, [name]: value })
              }
            />
          ) : (
            <Input
              name={name}
              placeholder={settings.placeholder}
              value={`${settingsValue || ''}`}
              onChange={({ target: { value } }) => {
                setBlockSettings({ ...blockSettings, [name]: value })
              }}
            />
          )}
        </Flex>
      )})}
    </Card>
  );
};
