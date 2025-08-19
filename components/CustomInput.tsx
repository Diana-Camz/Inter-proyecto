import { customInputStyles as styles } from "@/styles/components/custom-input";
import {
  InputType,
  CustomInputProps as Props,
} from "@/types/components/customInput";
import Entypo from "@expo/vector-icons/Entypo";
import { colors, fonts } from "@themes";
import React, { JSX, useEffect, useRef, useState } from "react";
import {
  Animated,
  KeyboardTypeOptions,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker, { Country } from "react-native-country-picker-modal";

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
    date: 10, // dd/mm/aaaa
  };

  const [displayValue, setDisplayValue] = useState(valueInput ?? "");

  const handleChangeText = (text: string) => {
    let formatted = text;
    let digits = text.replace(/\D/g, ""); // Remove all non-digit characters
    let raw = "";

    if (type === "phone") {
      // Limitar a 10 dígitos
      if (digits.length > 10) {
        digits = digits.slice(0, 10);
      }

      // Format: 3 first digits in parentheses + space
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
      // Guardamos el valor REAL con lada
      raw = digits.length > 0 ? `+${country.callingCode[0]}${digits}` : "";
    } else if (type === "date") {
      digits = digits.slice(0, 8); // ddmmyyyy
      const day = digits.slice(0, 2);
      const month = digits.slice(2, 4);
      const year = digits.slice(4, 8);

      // Correcciones suaves
      let correctedDay = day;
      let correctedMonth = month;
      if (day.length === 2 && Number(day) > 31) correctedDay = "31";
      if (month.length === 2 && Number(month) > 12) correctedMonth = "12";

      // Formateo para mostrar en el input
      if (digits.length <= 2) {
        formatted = correctedDay;
      } else if (digits.length <= 4) {
        formatted = `${correctedDay}/${correctedMonth}`;
      } else {
        formatted = `${correctedDay}/${correctedMonth}/${year}`;
      }

      // Construir valor RAW como Date ISO
      if (day && month && year && year.length === 4) {
        const isoDate = new Date(`${year}-${correctedMonth}-${correctedDay}`);
        raw = !isNaN(isoDate.getTime()) ? isoDate.toISOString() : "";
      } else {
        raw = "";
      }
    } else {
      // Para otros tipos de input, simplemente usamos el texto ingresado
      raw = text;
    }

    // Mandamos el raw al padre
    if (onChange) {
      onChange(raw);
    }

    // Para mostrar el formateado en el input necesitamos manejar un estado local
    setDisplayValue(formatted);
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
                onChange(
                  `+${selected.callingCode[0]}${displayValue.replace(
                    /\D/g,
                    ""
                  )}`
                );
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
          value={displayValue}
          onChangeText={handleChangeText}
          keyboardType={keyboardTypeMap[type]}
          autoCapitalize="none"
          maxLength={maxLengthMap[type]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...inputProps}
          style={[
            fonts.TextMedium,
            styles.textInput,
            type === "phone" && styles.textInputPhone,
            Platform.OS === "android"
              ? styles.textInputAndroid
              : styles.textInputiOS,
          ]}
        />
      </View>
    </View>
  );
}
