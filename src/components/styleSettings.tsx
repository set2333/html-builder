import { FC } from "react";
import { Dropdown, Flex, Input, Select, Typography } from "antd";
import { StyleSettingsKey, StyleSettingsKeyParsedValue } from "../types";
import { useStyleSettings } from "../hooks";
import { SettingsCard } from "./settingsCard";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../store";

const { Text } = Typography;

export type StyleSettingsProps = {
  style: Partial<Record<StyleSettingsKey, StyleSettingsKeyParsedValue>>;
  setStyle: (
    styles: Partial<Record<StyleSettingsKey, StyleSettingsKeyParsedValue>>
  ) => void;
};

export const StyleSettings: FC<StyleSettingsProps> = ({ style, setStyle }) => {
  const dispatch = useDispatch();
  const styleSettings = useStyleSettings();

  return (
    <SettingsCard title="Styles">
      {styleSettings.map((params) => {
        const name = params[0] as StyleSettingsKey;
        const settings = params[1];
        const items = [
          {
            key: "remove",
            label: "Remove style",
            onClick: () => dispatch(ACTIONS.removeSettings(name)),
          },
        ];

        return (
          <Flex key={name} style={{ marginTop: "10px" }}>
            <Dropdown menu={{ items }} trigger={["contextMenu"]}>
              <Text style={{ width: "25%" }}>{settings.label}</Text>
            </Dropdown>
            {settings.type === "select" ? (
              <Select
                style={{ width: "100%" }}
                value={style?.[name]?.value || ""}
                options={[...(settings?.options || [])]}
                onChange={(value) =>
                  setStyle({
                    ...style,
                    [name]: { ...style[name], value },
                  })
                }
              />
            ) : (
              <Input
                type={settings.type}
                placeholder={settings.placeholder}
                value={style?.[name]?.value || ""}
                onChange={({ target: { value } }) => {
                  setStyle({
                    ...style,
                    [name]: {
                      ...style[name],
                      value,
                      ...(settings.unit && (!style[name] || !style[name]?.unit)
                        ? { unit: settings.unit[0] }
                        : {}),
                    },
                  });
                }}
                addonAfter={
                  settings?.unit ? (
                    <Select
                      style={{ width: "75px" }}
                      options={settings?.unit.map((value) => ({
                        value,
                        label: value,
                      }))}
                      placeholder={settings.placeholder}
                      value={style?.[name]?.unit || ""}
                      onChange={(unit) =>
                        setStyle({ ...style, [name]: { ...style[name], unit } })
                      }
                    />
                  ) : null
                }
              />
            )}
          </Flex>
        );
      })}
    </SettingsCard>
  );
};
