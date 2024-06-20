import { FC } from "react";
import { Flex, Input, Select, Typography } from "antd";
import { STYLE_SETTINGS } from "../consts";

const { Text } = Typography;

export type StyleSettingsProps = {
  style: Partial<Record<keyof typeof STYLE_SETTINGS, string>>;
  setStyle: (styles: Partial<Record<keyof typeof STYLE_SETTINGS, string>>) => void;
};

export const StyleSettings: FC<StyleSettingsProps> = ({ style, setStyle }) => {
  return (
    <>
      {Object.entries(STYLE_SETTINGS).map(([name, settings]) => {
        return (
          <Flex key={name} style={{ marginTop: "10px" }}>
            <Text style={{ width: '25%' }}>{settings.label}</Text>
            <Input
              type={settings.type}
              placeholder={settings.placeholder}
              value={style?.[name]?.value || ""}
              onChange={({ target: { value } }) =>
                setStyle({ ...style, [name]: { ...style[name], value } })
              }
              addonAfter={
                settings?.unit ? (
                  <Select
                    style={{ width: '75px' }}
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
          </Flex>
        );
      })}
    </>
  );
};
