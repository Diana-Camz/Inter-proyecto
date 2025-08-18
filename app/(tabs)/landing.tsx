import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import TextLinkRow from "@/components/TextLinkRow";
import { landingStyles as styles } from "@/styles/screens/landing.styles";
import { spacing } from "@/themes";
import { useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const Images = [
  {
    source: require("../../assets/images/Interestelar_Name.png"),
  },
  {
    source: require("../../assets/images/LogIn_Coffes.png"),
  },
];

export default function Landing() {
  const router = useRouter();
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
      <CustomButton
        title="Crear cuenta"
        onPress={() => router.push("/signUp")}
        disabled={false}
      />
      <TextLinkRow
        message="¿Ya tienes una cuenta?"
        linkText="Inicia sesión"
        onPress={() => router.push("/logIn")}
      />
    </View>
  );
}
