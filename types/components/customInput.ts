import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type InputType = "text" | "email" | "phone" | "date";

export type CustomInputProps = {
  type: InputType;
  label: string;
  valueInput?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
};
