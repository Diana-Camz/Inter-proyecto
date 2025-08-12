import React, { JSX, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import CustomText from './CustomText';
import { customInput } from '../styles/components/custom-input';
import { fonts, colors } from '@themes';

type InputType = 'text' | 'email' | 'number' | 'date';

type CustomInputProps = {
  type: InputType;
  label: string;
  placeholder: string;
  //valueInput: string;
  //onChange?: (value: string) => void;
  disabled?: boolean;
};

export default function CustomInput({
  type,
  label,
  placeholder,
  //valueInput,
 // onChange,
  disabled = false,
}: CustomInputProps): JSX.Element {

  const keyboardTypeMap: Record<InputType, KeyboardTypeOptions> = {
    text: 'default',
    email: 'email-address',
    number: 'number-pad',
    date: 'number-pad',
  };


  return (
    <View style={customInput.wrapper}>
      <View style={customInput.container}>
        {type === 'number' && (
          <View style={customInput.inputIcon}>
            <Entypo name="chevron-small-down" size={12} color={colors.gray} />
          </View>
        )}
        <TextInput
          editable={!disabled}
          //value={handleValue()}
          //onChangeText={handleOnChange}
          placeholder={placeholder}
          placeholderTextColor={colors.sand}
          //style={}
          keyboardType={'default'}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
