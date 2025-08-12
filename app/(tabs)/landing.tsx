import CustomText from "@/components/ CustomText";
import CustomButton from "@/components/CustomButton";
import { spacing } from "@/themes";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function landing() {
  return (
    <View style={[spacing.safeArea, spacing.safeStatusBar, styles.container]}>
      <Image
        source={require("../../assets/images/Interestelar_Name.png")}
        style={{ width: 180, height: 32 }}
      />
      <CustomText
        type="TitleExtraBig"
        text={"¡Hola!\nOrdena ahora"}
        numberOfLines={2}
        align="center"
      />

      <View
        style={{
          marginHorizontal: -16,
          width: "100%",
          height: 322,
          alignSelf: "flex-start",
        }}
      >
        <Image
          source={require("../../assets/images/LogIn_Coffes.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <CustomButton title="Crear cuenta" onPress={() => {}} />
      <View style={styles.loginContainer}>
        <CustomText type="AvenirBodyRegular" text="¿Ya tienes una cuenta?" />
        <TouchableOpacity onPress={() => {}}>
          <CustomText
            type="AvenirBodyBold"
            text=" Inicia sesión"
            decoration="underline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: "#333",
  },
  image: {
    width: screenWidth + 16,
    height: 322,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 8,
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
    color: "#666",
  },
  loginLink: {
    fontSize: 14,
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});
