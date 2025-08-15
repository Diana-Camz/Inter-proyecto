import { TextStyle } from "react-native";

export type FontStyles = {
  [key: string]: {
    fontFamily: string;
    fontSize: number;
    fontWeight: string | number;
  };
};

export const fonts: Record<string, TextStyle> = {
  TitleExtraBig: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: "800",
    fontSize: 36,
  },
  TitleBig: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: "bold",
    fontSize: 25,
  },
  TextButtons: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: "bold",
    fontSize: 16,
  },
  TextRegular: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: "medium",
    fontSize: 13,
  },
  TextMedium: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: "medium",
    fontSize: 16,
  },
  TextSmall: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: "medium",
    fontSize: 12,
  },
  label: {
    fontFamily: `PlusJakartaSans_500Medium`,
    fontWeight: "medium",
    fontSize: 16,
  },
  LabelSmall: {
    fontFamily: `PlusJakartaSans_500Medium`,
    fontWeight: "medium",
    fontSize: 12,
  },
  AvenirBodyBold: {
    fontFamily: "AvenirNextCondensed-Bold",
    fontSize: 16,
    fontWeight: 700,
  },
  AvenirBodyRegular: {
    fontFamily: "AvenirNextCondensed-Regular",
    fontSize: 16,
    fontWeight: 500,
  },
  link: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: "bold",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  linkSmall: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: "bold",
    fontSize: 12,
    textDecorationLine: "underline",
  },
};
