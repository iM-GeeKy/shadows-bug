import { ReactElement } from "react";
import { Text as DefaultText, View as DefaultView } from "react-native";
import { useTheme } from "react-native-paper";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: string
): string {
  const theme = useTheme();
  const colorFromProps = props[theme.dark ? 'dark' : 'light'];

  if (colorFromProps) {
    return colorFromProps;
  }
  return "";
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function View(props: ViewProps): ReactElement<typeof DefaultView> {
  const theme = useTheme();
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    {
      light: theme.colors?.background,
      dark: theme.colors?.background,
    },
    "text"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
