import { textLinkRowStyle as styles } from "@/styles/components/text-link-row";
import { TextLinkRowProps } from "@/types/components/textLinkRow";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "./CustomText";

export default function TextLinkRow({
  message,
  linkText,
  onPress,
  lines,
  disabled,
}: TextLinkRowProps) {
  return (
    <View style={[styles.container, lines && styles.lines]}>
      <CustomText type="TextRegular" text={message + " "} />
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <CustomText type="linkRegular" text={linkText} />
      </TouchableOpacity>
    </View>
  );
}
