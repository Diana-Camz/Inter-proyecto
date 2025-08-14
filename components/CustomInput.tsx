import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '@themes';
import React, { JSX } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
  Image
} from 'react-native';
import { customInput } from '../styles/components/custom-input';

type InputType = 'text' | 'email' | 'phone' | 'date';

type CustomInputProps = {
  type: InputType;
  label: string;
  placeholder: string;
  valueInput?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>
  inputProps?: TextInputProps;
};

export default function CustomInput({
  type,
  label,
  placeholder,
  valueInput,
  onChange,
  disabled = false,
  containerStyle,
  inputProps
}: CustomInputProps): JSX.Element {

  const keyboardTypeMap: Record<InputType, KeyboardTypeOptions> = {
    text: 'default',
    email: 'email-address',
    phone: 'phone-pad',
    date: 'number-pad',
  };


  return (
    <View style={customInput.wrapper}>
      <View style={customInput.container}>
        {type === 'phone' && (
          <View style={customInput.inputIcon}>
            <Image source={require('../assets/images/mexico1.png')} style={customInput.imageMexico}/>
            <Entypo name="chevron-small-down" size={40} color={colors.gray} />
          </View>
        )}
        <TextInput
          editable={!disabled}
          value={valueInput}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={colors.sand}
          keyboardType={keyboardTypeMap[type]}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
