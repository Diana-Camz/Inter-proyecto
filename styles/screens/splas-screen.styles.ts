import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const splashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 173,
  },
});
