export type FontStyles = { [key: string]: { 
    fontFamily: string; 
    fontSize: number, 
    fontWeight: string | number, 
    lineHeight?: number, 
    letterSpacing?: number 
} };

export const fonts: FontStyles = {
  TitleExtraBig: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: 800,
    fontSize: 36,
    lineHeight: 100,
    letterSpacing: 0
  },
  TitleBig: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 0
  },
  TextButtons: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19.2,
    letterSpacing: 0
  },
  TextRegular: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: 'medium',
    fontSize: 13,
    lineHeight: 15.6,
    letterSpacing: 0
  },
  TextMedium: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: 'medium',
    fontSize: 16,
    lineHeight: 19.2,
    letterSpacing: 0
  },
  TextSmall: {
    fontFamily: `Plus Jakarta Sans`,
    fontWeight: 'medium',
    fontSize: 12,
    lineHeight: 14.4,
    letterSpacing: 0
  },
  label: {
    fontFamily: `PlusJakartaSans_500Medium`,
    fontWeight: 'medium',
    fontSize: 16,
    lineHeight: 19.2,
    letterSpacing: 0
  },
  LabelSmall: {
    fontFamily: `PlusJakartaSans_500Medium`,
    fontWeight: 'medium',
    fontSize: 12,
    lineHeight: 14.4,
    letterSpacing: 0
  },
  
};
