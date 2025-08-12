import { colors, fonts } from "@themes";
import React from "react";
import { Text } from "react-native";

type CustomTextProps = {
  text: string;
  type:
    | "TitleExtraBig"
    | "TitleBig"
    | "TextButtons"
    | "TextRegular"
    | "TextMedium"
    | "TextSmall"
    | "label"
    | "LabelSmall";
  numberOfLines?: number;
  color?: string;
};

export default function CustomText({
  text,
  type,
  numberOfLines = 1,
  color = colors.black,
}: CustomTextProps): React.JSX.Element {
  const textStyle = type;
  return (
    <Text
      style={[fonts[textStyle], { color: color, lineHeight: 45 }]}
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
    >
      {text}
    </Text>
  );
}
