import { StyleSheet, ViewStyle } from "react-native";

export interface CreateBusinessScreenStyles {
  container: ViewStyle;
  containerInputs: ViewStyle;
  containerConditions: ViewStyle;
  containerCheckBox: ViewStyle;
  containerConditionsText: ViewStyle;
  containerButton: ViewStyle;
}

export const signUp = StyleSheet.create<CreateBusinessScreenStyles>({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 25,
  },
  containerInputs: {
    width: "auto",
    height: "auto",
    gap: 12,
  },
  containerConditions: {
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  containerCheckBox: {
    marginRight: 8,
  },
  containerConditionsText: {
    width: "89%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerButton: {
    width: "100%",
    marginTop: 15,
  },
});
