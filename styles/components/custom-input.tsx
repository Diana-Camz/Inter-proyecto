import { colors } from '@themes';
import { StyleSheet } from 'react-native';

export const customInput = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  container: {
    width: 335,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.sandLight,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.sand,
    paddingHorizontal: 16,
    gap: 10,
  },
  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  imageMexico: {
    width: 30,
    height: 20
  }
});
