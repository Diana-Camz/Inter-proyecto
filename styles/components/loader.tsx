import { StyleSheet, ViewStyle, Dimensions } from 'react-native';
import { colors } from '@themes';

export interface LoaderStyles {
  overlay: ViewStyle;
}

export const loader = StyleSheet.create<LoaderStyles>({
  overlay: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    backgroundColor: colors.blueTransparent,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});