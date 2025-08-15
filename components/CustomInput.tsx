import Entypo from "@expo/vector-icons/Entypo";
import { colors, fonts } from "@themes";
import React, { JSX, useEffect, useRef, useState } from "react";
import {
  Animated,
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import CountryPicker, { Country } from "react-native-country-picker-modal";
import { customInput } from "../styles/components/custom-input";

type InputType = "text" | "email" | "phone" | "date";

type CustomInputProps = {
  type: InputType;
  label: string;
  valueInput?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
};

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
      outputRange: [18, 10], // sigue dentro del input
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // se hace más pequeño
    }),
    color: colors.sand,
  };

  const onSelectCountry = (selectedCountry: Country) =>
    setCountry(selectedCountry);

  return (
    <View style={[customInput.wrapper, containerStyle]}>
      <View
        style={[
          customInput.container,
          isFocused && customInput.containerFocused,
        ]}
      >
        {type === "phone" && (
          <View style={customInput.inputIcon}>
            <CountryPicker
              countryCode={country.cca2}
              withFlag
              withCallingCode
              withFilter
              onSelect={onSelectCountry}
              containerButtonStyle={{}}
            />
            <Entypo name="chevron-small-down" size={35} color={colors.gray} />
          </View>
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
            { flex: 1 },
            type === "phone" && { paddingLeft: 10 },
            { paddingTop: 18 }, // Space for the label inside the input
          ]}
        />
      </View>
    </View>
  );
}
