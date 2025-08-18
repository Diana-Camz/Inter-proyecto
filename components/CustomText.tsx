import { colors, fonts } from "@themes";
import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TextTypes =
  | "TitleExtraBig"
  | "TitleBig"
  | "TextButtons"
  | "TextRegular"
  | "TextMedium"
  | "TextSmall"
  | "label"
  | "LabelSmall"
  | "linkRegular"
  | "linkSmall";

type CustomTextProps = {
  text?: string;
  type: TextTypes;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  color?: string;
  lineHeight?: number;
  children?: React.ReactNode;
} & Omit<TextProps, "style" | "onPress" | "children">;

export default function CustomText({
  text,
  type,
  numberOfLines,
  color = colors.black,
  style,
  lineHeight,
  onPress,
  children,
}: CustomTextProps): React.JSX.Element {
  const textStyleKey = type;
  const baseStyle = fonts[textStyleKey];
  return (
    <Text
      style={[baseStyle, { color, lineHeight }, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={numberOfLines ? "tail" : undefined}
      onPress={onPress}
    >
      {children ?? text}
    </Text>
  );
}
