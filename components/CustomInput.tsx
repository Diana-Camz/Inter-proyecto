import React, { JSX, useEffect, useRef, useState } from "react";
import {
  Animated,
  KeyboardTypeOptions,
  Platform,
  TextInput,
  View,
} from "react-native";
import CountryPicker, { Country } from "react-native-country-picker-modal";
import { CustomInputProps as Props, InputType } from "@/types/components/customInput";
import Entypo from "@expo/vector-icons/Entypo";
import { customInput } from "../styles/components/custom-input";
import { colors, fonts } from "@themes";

export default function CustomInput({
  type,
  label,
  valueInput,
  onChange,
  disabled = false,
  containerStyle,
  inputProps,
}: Props): JSX.Element {
  const keyboardTypeMap: Record<InputType, KeyboardTypeOptions> = {
    text: "default",
    email: "email-address",
    phone: "phone-pad",
    date: "number-pad",
  };

  const maxLengthMap: Partial<Record<InputType, number>> = {
    phone: 14, // (123) 4567890
    date: 10,  // dd/mm/aaaa
  };

  const handleChangeText = (text: string) => {
    let formatted = text;

    if (type === "phone") {
      
      // Delete all non-digit characters
      let digits = text.replace(/\D/g, "");

        // Limitar a 10 dígitos
      if (digits.length > 10) {
        digits = digits.slice(0, 10);
      }

      // Format: 3 first digits in parentheses + space
      if(digits.length == 0 ){
        formatted = "";
      }else if ( digits.length <= 3  ) {
        formatted = `(${digits}`;
      } else {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 10)}`;
      } 
    }

    if(type === "date"){
      // Delete all non-digit characters
      let digits = text.replace(/\D/g, "");

      // Máximo 8 dígitos (ddmmAAAA)
      digits = digits.slice(0, 8);
      // Correcciones suaves de día y mes (opcional)
      const day = digits.slice(0, 2);
      const month = digits.slice(2, 4);
      if (day.length === 2 && Number(day) > 31) digits = `31${digits.slice(2)}`;
      if (month.length === 2 && Number(month) > 12) digits = `${digits.slice(0, 2)}12${digits.slice(4)}`;

      if (digits.length <= 2) {
        formatted = digits;
      } else if (digits.length <= 4) {
        formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
      } else {
        // Limit to 10 digits
        formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
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
          maxLength={maxLengthMap[type]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...inputProps}
          style={[
            fonts.TextMedium,
            { flex: 1 },
            type === "phone" && { paddingLeft: 10 },
            { paddingTop: Platform.OS === "android" ? 27 : 18 }, // Space for the label inside the input
          ]}
        />
      </View>
    </View>
  );
}
