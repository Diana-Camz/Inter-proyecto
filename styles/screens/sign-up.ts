import { colors } from "@/themes";
import { StyleSheet, ViewStyle } from "react-native";

export interface CreateBusinessScreenStyles {
  container: ViewStyle;
  goBackButton: ViewStyle;
  containerInputs: ViewStyle;
  containerConditions: ViewStyle;
  containerCheckBox: ViewStyle;
  containerConditionsText: ViewStyle;
  containerButton: ViewStyle;
  containerLogin: ViewStyle;
}

export const signUp = StyleSheet.create<CreateBusinessScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    gap:16,
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
    width:"auto",
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCheckBox: {
    marginRight: 8,
  },
  containerConditionsText: {
    width: '89%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  containerButton: {
    width: '100%',
    marginTop: 15
  },
  containerLogin: { 
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 10,
    gap: 7,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    borderTopColor: colors.gray,
  },
});
