import { colors } from "@/themes";
import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const logInSyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20,
    color: colors.black,
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
  button: {
    backgroundColor: colors.black,
    paddingVertical: 14,
    paddingHorizontal: 60,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
  },
  loginText: {
    fontSize: 14,
    color: colors.black,
  },
  loginLink: {
    fontSize: 14,
    color: colors.black,
    textDecorationLine: "underline",
  },
});
