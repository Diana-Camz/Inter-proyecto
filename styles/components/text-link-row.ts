import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const textLinkRowStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 24,
    gap: 5,
  },
  lines: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    borderTopColor: colors.gray,
  },
});
