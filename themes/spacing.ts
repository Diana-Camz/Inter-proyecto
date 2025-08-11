import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { colors } from './colors';

interface SpacingStyles {
  safeArea: ViewStyle;
  safeStatusBar: ViewStyle;
  safeBottom: ViewStyle;
}

export const spacing = StyleSheet.create<SpacingStyles>({
  safeArea: {
    display: 'flex',
    paddingTop: 0,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
  },
  safeStatusBar: {
    paddingTop: Platform.OS === 'android' ? 30 : 60,
  },
  safeBottom: {
    paddingBottom: Platform.OS === 'android' ? 20 : 40,
  },
});