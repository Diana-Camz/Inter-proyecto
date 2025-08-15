import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import GoBackButton from "@/components/GoBackButton";
import { logInStyles as styles } from "@/styles/screens/log-in.styles";
import { spacing } from "@/themes";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function LogIn() {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  return (
    <View style={[spacing.safeArea, spacing.safeStatusBar, styles.container]}>
      <View>
        <GoBackButton />
        <CustomText type="TitleBig" text={"Iniciar sesión"} numberOfLines={2} />
      </View>
      <View style={styles.containerInputs}>
        <CustomInput
          type={"phone"}
          label={"Número de celular"}
          valueInput={phoneNumber}
          onChange={setPhoneNumber}
        />
      </View>
      <CustomButton
        title="Iniciar sesión"
        onPress={() => {}}
        disabled={false}
      />
      <View style={styles.containerLogin}>
        <CustomText type={"TextRegular"} text={"¿No tienes una cuenta?"} />
        <TouchableOpacity onPress={() => router.push("/signUp")}>
          <CustomText type={"link"} text={"Crear cuenta"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
