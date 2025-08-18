import { TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { ButtonProps } from "types/components/customButton"
import { customButton } from "@/styles/components/custom-button";
import { colors } from "@/themes";



export default function CustomButton({
  title,
  onPress,
  disabled = false,
}: ButtonProps) {
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
