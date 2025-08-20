export type SignUpValidationRules = {
  name: string;
  email: string;
  phone: number;
  birthday: number;
};

type ValidationRule<T> = {
  check: (data: T) => boolean;
  message: string;
};
// Validaciones para pantalla de Registro ( Sign Up )
export const signUpValidationRules: ValidationRule<SignUpValidationRules>[] = [
  {
    check: data => !data.name || data.name.length < 2,
    message: 'Nombre',
  },
  {
    check: data => !data.email,
    message: 'Correo',
  },
  {
    check: data => Boolean(data.email) && !/\S+@\S+\.\S+/.test(data.email),
    message: 'Correo inválido',
  },
  {
    check: data => !data.phone,
    message: 'Telefono' 
  },
  {
    check: data => Boolean(data.phone) && data.phone.toString().length < 10,
    message: 'Tu numero telefonico debe tener al menos 10 digitos.',
  },
    {
    check: data => !data.birthday,
    message: 'Cumpleaños' 
  },
];