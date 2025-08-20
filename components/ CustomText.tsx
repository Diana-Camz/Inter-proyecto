import { colors, fonts } from "@themes";
import React from "react";
import { Text, TextStyle } from "react-native";

type CustomTextProps = {
  text: React.ReactNode;
  type:
  | "TitleExtraBig"
  | "TitleBig"
  | "TextButtons"
  | "TextRegular"
  | "TextMedium"
  | "TextSmall"
  | "label"
  | "LabelSmall"
  | "AvenirBodyBold"
  | "AvenirBodyRegular";
  numberOfLines?: number;
  color?: string;
  align?: "left" | "center" | "right";
  decoration?: "none" | "underline";
};

export default function CustomText({
  text,
  type,
  numberOfLines = 1,
  color = colors.black,
  align = "left",
  decoration = "none",
}: CustomTextProps): React.JSX.Element {
  const textStyle = type;
  return (
    <Text
      style={[
        fonts[textStyle] as TextStyle,
        { color, textAlign: align, textDecorationLine: decoration },
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
    >
      {text}
    </Text>
  );
}
