import { colors } from '@themes';
import { StyleSheet } from 'react-native';

export const customInput = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  container: {
    width: 335,
    height: 60,
    backgroundColor: colors.sandLight,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.sand,
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 10,
  },
  inputIcon: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
