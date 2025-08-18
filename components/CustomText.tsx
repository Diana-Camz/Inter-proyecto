import { Text } from "react-native";
import React from "react";
import { CustomTextProps as Props } from "types/components/customText";
import { colors, fonts } from "@themes";


export default function CustomText({
  text,
  type,
  numberOfLines,
  color = colors.black,
  style,
  lineHeight,
  onPress,
  children,
}: Props): React.JSX.Element {
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
