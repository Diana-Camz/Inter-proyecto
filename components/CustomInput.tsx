import Entypo from "@expo/vector-icons/Entypo";
import { colors, fonts } from "@themes";
import React, { JSX, useEffect, useRef, useState } from "react";
import {
  Animated,
  KeyboardTypeOptions,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker, { Country } from "react-native-country-picker-modal";
import { customInputStyles as styles } from "../styles/components/custom-input";
import { CustomInputProps, InputType } from "../types/components/customInput";

export default function CustomInput({
  type,
  label,
  valueInput,
  onChange,
  disabled = false,
  containerStyle,
  inputProps,
}: CustomInputProps): JSX.Element {
  const keyboardTypeMap: Record<InputType, KeyboardTypeOptions> = {
    text: "default",
    email: "email-address",
    phone: "phone-pad",
    date: "number-pad",
  };

  const handleChangeText = (text: string) => {
    let formatted = text;

    if (type === "phone") {
      const digits = text.replace(/\D/g, "").slice(0, 10); // max 10 digits

      if (digits.length === 0) {
        formatted = "";
      } else if (digits.length <= 3) {
        formatted = `(${digits}`;
      } else if (digits.length <= 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(
          3,
          6
        )} ${digits.slice(6)}`;
      }
    }
    if (onChange) {
      onChange(formatted);
    }
  };

  const [country, setCountry] = useState<Country>({
    cca2: "MX",
    callingCode: ["52"],
    name: "Mexico",
  } as Country);

  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(valueInput ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || valueInput ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isFocused, valueInput, animatedLabel]);

  const labelStyle = {
    position: "absolute" as const,
    left: type === "phone" ? 120 : 17,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 10], // still inside the input when focused
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // smaller when focused
    }),
    color: colors.sand,
  };

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={[styles.container, isFocused && styles.containerFocused]}>
        {type === "phone" && (
          <TouchableOpacity
            onPress={() => setCountryPickerVisible(true)}
            style={styles.countryPickerButton}
          >
            <CountryPicker
              countryCode={country.cca2}
              withFlag
              withCallingCode
              withFilter
              onSelect={(selected) => {
                setCountry(selected);
                setCountryPickerVisible(false);
              }}
              visible={countryPickerVisible}
              onClose={() => setCountryPickerVisible(false)}
            />
            <Entypo name="chevron-small-down" size={35} color={colors.gray} />
          </TouchableOpacity>
        )}

        <Animated.Text style={labelStyle}>{label}</Animated.Text>

        <TextInput
          editable={!disabled}
          value={valueInput}
          onChangeText={handleChangeText}
          keyboardType={keyboardTypeMap[type]}
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...inputProps}
          style={[
            fonts.TextMedium,
            styles.textInput,
            type === "phone" && styles.textInputPhone,
          ]}
        />
      </View>
    </View>
  );
}
