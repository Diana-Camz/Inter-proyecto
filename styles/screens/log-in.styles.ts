import { colors } from "@/themes";
import { StyleSheet, ViewStyle } from "react-native";

export interface CreateBusinessScreenStyles {
  container: ViewStyle;
  goBackButton: ViewStyle;
  containerInputs: ViewStyle;
  containerConditions: ViewStyle;
  containerCheckBox: ViewStyle;
  containerConditionsText: ViewStyle;
  containerLogin: ViewStyle;
}

export const logInStyles = StyleSheet.create<CreateBusinessScreenStyles>({
  container: {
    flex: 0.4,
    justifyContent: "space-around",
  },
  goBackButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 25,
    backgroundColor: colors.sandLight,
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
  containerLogin: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16,
    gap: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    borderTopColor: colors.gray,
  },
});
