import { customButton } from "@/styles/components/custom-button";
import { colors } from "@/themes";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "types/components/customButton";
import CustomText from "./CustomText";

export default function CustomButton({
  title,
  onPress,
  disabled = false,
}: ButtonProps) {
  console.log(disabled);
  return (
    <TouchableOpacity
      style={[
        customButton.container,
        disabled ? customButton.backgroundGray : customButton.backgroundBlack,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <CustomText type="TextButtons" text={title} color={colors.white} />
    </TouchableOpacity>
  );
}
