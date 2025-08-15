export type FontStyles = {
  [key: string]: {
    fontFamily: string;
    fontSize: number;
    fontWeight: string | number;
    lineHeight?: number;
    letterSpacing?: number;
  };
};

export const fonts: FontStyles = {
  TitleExtraBig: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: 800,
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
};
