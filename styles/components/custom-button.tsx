import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from 'themes/colors';

export interface ButtonStyles {
  container: ViewStyle;
  backgroundGray: ViewStyle;
  backgroundBlack: ViewStyle;
}
export const customButton = StyleSheet.create<ButtonStyles>({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundGray: {
    backgroundColor: colors.gray,
  },
  backgroundBlack: {
    backgroundColor: colors.black,
  },
});