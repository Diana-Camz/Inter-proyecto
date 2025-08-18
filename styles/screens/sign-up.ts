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
    justifyContent: "space-around",
    paddingBottom: 40,
  },
  containerInputs: {
    width: "auto",
    height: "auto",
    gap: 12,
  },
  containerConditions: {
    width: 380,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  containerCheckBox: {
    marginRight: 8,
  },
  containerConditionsText: {
    width: 335,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerButton: {
    alignItems: "center",
  },
});
