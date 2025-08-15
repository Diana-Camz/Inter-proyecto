import { colors } from "@/themes";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./ CustomText";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function CustomButton({ title, onPress, disabled = false }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? colors.gray : colors.black }
      ]}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={disabled ? 1 : 0.8}
    >
      <CustomText type="TextButtons" text={title} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 335,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
