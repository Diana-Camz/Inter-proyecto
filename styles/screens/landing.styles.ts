import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const landingStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  coffeesImage: {
    width: screenWidth + 16,
    height: 322,
  },
  coffeesImageContainer: {
    marginHorizontal: -16,
    width: "100%",
    height: 322,
    alignSelf: "flex-start",
  },
  logoImage: { width: 180, height: 32 },
});
