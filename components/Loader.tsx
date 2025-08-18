import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { loader } from '../styles/components/loader';
import { colors } from '@themes';

const Loader: React.FC = () => (
  <View style={loader.overlay}>
    <ActivityIndicator size="large" color={colors.white} />
  </View>
);

export default Loader;