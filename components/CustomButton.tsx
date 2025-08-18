import { customButton } from "@/styles/components/custom-button";
import { colors } from "@/themes";
import React from "react";
import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

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
