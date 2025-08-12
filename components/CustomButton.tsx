import { colors } from "@/themes";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./ CustomText";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <CustomText type="TextButtons" text={title} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 335,
    height: 56,
    backgroundColor: colors.black,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
