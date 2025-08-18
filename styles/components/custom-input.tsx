import { colors } from "@themes";
import { StyleSheet } from "react-native";

export const customInput = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  container: {
    alignSelf: 'stretch',
    minHeight: 56, 
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  imageMexico: {
    width: 30,
    height: 20,
  },
});
