import { FC, PropsWithChildren } from "react"
import { Button, Card, Flex, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS, RootState } from "../store";
import { STYLE_SETTINGS } from "../consts";


type SettingsCardProps = {
  title: string,
}

export const SettingsCard: FC<PropsWithChildren<SettingsCardProps>> = ({ title, ...props }) => {
  const dispatch = useDispatch();
  const usedStyleSettings = useSelector((state: RootState)  => state.usedStyleSettings);
  const items = Object
    .entries(STYLE_SETTINGS)
    .filter(([style]) => !usedStyleSettings.includes(style))
    .map(([key, { label }]) => ({ key, label, onClick: () => dispatch(ACTIONS.addSettings(key)) }));

  return (
    <Card title={(
        <Flex justify="space-between" align="center">
          {title}
          <Dropdown menu={{ items }}>
            <Button type="primary">Add style</Button>
          </Dropdown>  
        </Flex>
      )}
    {...props}
    />  
  );
};