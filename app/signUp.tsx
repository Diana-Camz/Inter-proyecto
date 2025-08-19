import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import GoBackButton from "@/components/GoBackButton";
import Loader from "@/components/Loader";
import TextLinkRow from "@/components/TextLinkRow";
import { handleInputChange } from "@/hooks/handleInputChange";
import useFormValidation from "@/hooks/useFormValidation";
import { signUp } from "@/styles/screens/sign-up";
import { colors, spacing } from "@/themes";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { UserData as data } from "types/screens/signUp";

export default function SignUp() {
  const [accept, setAccept] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [registrationData, setRegistrationData] = useState<data>({
    name: "",
    email: "",
    phone: "",
    birthday: "",
  });
  const validate = useFormValidation(registrationData, "signUp");

  const handleAcceptTerms = () => {
    setAccept(!accept);
  };

  const completedFields = Object.values(registrationData).every(
    (v) => v !== ""
  );
  const disabled = !(completedFields && accept);

  console.log("Datos de registro:", registrationData);

  const handleSubmit = () => {
    setLoading(true);
    if (!validate()) {
      setLoading(false);
      return;
    }
    try {
      Alert.alert("Registro exitoso", "Te registraste correctamente.");
      console.log(registrationData);
      //router.replace('/home');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Registro fallido: " + error.message);
      } else {
        Alert.alert("Error desconocido", String(error));
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView
      style={[spacing.safeArea, spacing.safeStatusBar, signUp.container]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}
    >
      {loading && <Loader />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={
            Platform.OS === "ios" ? "interactive" : "on-drag"
          }
          showsVerticalScrollIndicator={false}
        >
          <View style={signUp.container}>
            <View>
              <GoBackButton />
              <CustomText
                type="TitleBig"
                text={"Crear cuenta"}
                numberOfLines={2}
              />
            </View>
            <View style={signUp.containerInputs}>
              <CustomInput
                type={"text"}
                label={"Nombre"}
                valueInput={registrationData.name}
                onChange={(data) =>
                  handleInputChange(setRegistrationData, "name", data)
                }
              />
              <CustomInput
                type={"email"}
                label={"Email"}
                valueInput={registrationData.email}
                onChange={(data) =>
                  handleInputChange(setRegistrationData, "email", data)
                }
              />
              <CustomInput
                type={"phone"}
                label={"Número de celular"}
                valueInput={registrationData.phone}
                onChange={(data) =>
                  handleInputChange(setRegistrationData, "phone", data)
                }
              />
              <CustomInput
                type={"date"}
                label={"Cumpleaños (dd/mm/aaaa)"}
                valueInput={registrationData.birthday}
                onChange={(data) =>
                  handleInputChange(setRegistrationData, "birthday", data)
                }
              />
            </View>
            <View style={signUp.containerConditions}>
              <Pressable
                onPress={handleAcceptTerms}
                style={signUp.containerCheckBox}
              >
                <MaterialIcons
                  name={accept ? "check-box" : "check-box-outline-blank"}
                  size={30}
                  color={accept ? colors.black : colors.gray}
                />
              </Pressable>
              <View style={signUp.containerConditionsText}>
                <CustomText type="TextRegular">
                  Al crear una cuenta, aceptas nuestros{" "}
                  <CustomText
                    type="linkRegular"
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
                onPress={handleSubmit}
                disabled={disabled}
              />
            </View>
            <TextLinkRow
              lines={true}
              message="¿Ya tienes una cuenta?"
              linkText="Inicia sesión"
              onPress={() => console.log("Iniciar sesión clic")}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
