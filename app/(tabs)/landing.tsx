import CustomText from "@/components/ CustomText";
import CustomButton from "@/components/CustomButton";
import { logInSyles as styles } from "@/styles/screens/log-in.styles";
import { spacing } from "@/themes";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

const Images = [
  {
    source: require("../../assets/images/Interestelar_Name.png"),
  },
  {
    source: require("../../assets/images/LogIn_Coffes.png"),
  },
];

export default function landing() {
  return (
    <View style={[spacing.safeArea, spacing.safeStatusBar, styles.container]}>
      <Image source={Images[0].source} style={styles.logoImage} />
      <CustomText
        type="TitleExtraBig"
        text={"¡Hola!\nOrdena ahora"}
        numberOfLines={2}
        align="center"
      />
      <View style={styles.coffeesImageContainer}>
        <Image
          source={Images[1].source}
          style={styles.coffeesImage}
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
