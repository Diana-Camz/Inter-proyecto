import { StyleProp, TextProps, TextStyle } from "react-native";

type TextTypes = 
  | "TitleExtraBig"
  | "TitleBig"
  | "TextButtons"
  | "TextRegular"
  | "TextMedium"
  | "TextSmall"
  | "label"
  | "LabelSmall"
  | "linkRegular"
  | "linkSmall";


 export type CustomTextProps = {
    text?: string;
    type: TextTypes;
    numberOfLines?: number;
    style?: StyleProp<TextStyle>;
    onPress?: () => void;
    color?: string;
    lineHeight?: number;
    children?: React.ReactNode;
  } & Omit<TextProps, "style" | "onPress" | "children">;
