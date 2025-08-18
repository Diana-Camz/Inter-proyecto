import { signUpValidationRules } from "./validationRules";
import { Alert } from 'react-native';

type ValidationRule<T> = {
  check: (data: T) => boolean;
  message: string;
};

type ScreenType =
  | 'signUp';



const useFormValidation = <T>(data: T, screen: ScreenType): (() => boolean) => {
  let validations: ValidationRule<T>[] = [];
  if (screen === 'signUp') {
    validations = signUpValidationRules as ValidationRule<T>[];
  }

  const validateForm = () => {
    const errors = validations.filter(rule => rule.check(data)).map(rule => rule.message);
    if (errors.length) {
      const validationMessage =
        errors.length === 1 ? errors[0] : errors.map(e => `• ${e}`).join('\n');
      Alert.alert('Por favor revisa los siguientes campos', validationMessage);
      return false;
    }
    return true;
  };
  return validateForm;
};

export default useFormValidation;
