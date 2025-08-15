import { colors } from "@themes";
import { StyleSheet } from "react-native";

export const customInputStyles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: colors.sandLight,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.sand,
    paddingHorizontal: 16,
    gap: 10,
  },
  containerFocused: {
    borderWidth: 2,
    borderColor: colors.darkGray,
  },
  inputIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  textInput: { flex: 1, paddingTop: 18 }, // Space for the label inside the input
  textInputPhone: { paddingLeft: 10 }, // Additional padding for phone input
});
