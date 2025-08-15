import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import { signUp } from "@/styles/screens/sign-up";
import { colors, spacing } from "@/themes";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function logIn() {
  return (
    <View style={[spacing.safeArea, spacing.safeStatusBar, signUp.container]}>
      <View>
        <TouchableOpacity
          onPress={() => router.back()}
          style={signUp.goBackButton}
        >
          <Entypo name="chevron-small-left" size={50} color={colors.black} />
        </TouchableOpacity>
        <CustomText type="TitleBig" text={"Crear cuenta"} numberOfLines={2} />
      </View>
      <View style={signUp.containerInputs}>
        <CustomInput type={"text"} label={"Nombre"} />
        <CustomInput type={"text"} label={"Email"} />
        <CustomInput type={"text"} label={"Número de celular"} />
        <CustomInput type={"text"} label={"Cumpleaños"} />
      </View>
      <View style={signUp.containerConditions}>
        <View style={signUp.containerCheckBox}>
          <Feather name={"square"} size={30} color={colors.gray} />
        </View>
        <View style={signUp.containerConditionsText}>
          <CustomText type="TextSmall">
            Al crear una cuenta, aceptas nuestros{" "}
            <CustomText
              type="linkSmall"
              onPress={() => console.log("Términos clic")}
            >
              Términos y Condiciones
            </CustomText>
          </CustomText>
        </View>
      </View>
      <View style={signUp.containerButton}>
        <CustomButton
          title="Crear cuenta"
          onPress={() => {}}
          disabled={false}
        />
      </View>
      <View style={signUp.containerLogin}>
        <CustomText type={"TextRegular"} text={"¿Ya tienes una cuenta?"} />
        <TouchableOpacity onPress={() => router.push("/logIn")}>
          <CustomText type={"link"} text={"Inicia sesión"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
