import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { loader } from '../styles/components/loader';
import { colors } from '@themes';

const Loader: React.FC = () => (
  <View style={[StyleSheet.absoluteFillObject, loader.overlay]} pointerEvents="none">
    <ActivityIndicator size="large" color={colors.white} />
  </View>
);

export default Loader;