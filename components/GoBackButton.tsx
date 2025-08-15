import { colors } from "@/themes";
import { GoBackButtonProps } from "@/types/components/goBackButton";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function GoBackButton({ onPress }: GoBackButtonProps) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 35,
        height: 35,
        borderRadius: 50,
        marginBottom: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.sandLight,
      }}
    >
      <Entypo name="chevron-small-left" size={35} color={colors.back} />
    </TouchableOpacity>
  );
}

GoBackButton.displayName = "GoBackButton";
