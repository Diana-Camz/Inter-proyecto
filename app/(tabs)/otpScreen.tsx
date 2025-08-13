import { spacing } from '@/themes';
import { otpScreenStyles } from '@/themes/screens/otp-screen';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { CodeField, CodeFieldProps, Cursor } from 'react-native-confirmation-code-field';

type OtpScreenProps = {
    phoneNumber: string;
    onVerificationSuccess?: () => void;
    onResendCode?: () => Promise<void>;
};

const CELL_COUNT = 6;
const RESEND_TIMEOUT = 30;

const OtpScreen: React.FC<OtpScreenProps> = ({
    phoneNumber = '3123456789',
    onVerificationSuccess,
    onResendCode
}) => {
    const [value, setValue] = useState<string>('');
    const [resendDisabled, setResendDisabled] = useState<boolean>(false);
    const [resendTimer, setResendTimer] = useState<number>(RESEND_TIMEOUT);
    const codeFieldRef = useRef<any>(null);

    useEffect(() => {
        // Clear temporary timer on unmount
        return () => {
            setResendDisabled(false);
            setResendTimer(RESEND_TIMEOUT);
        };
    }, []);

    useEffect(() => {
        let interval: number;

        if (resendDisabled) {
            interval = setInterval(() => {
                setResendTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setResendDisabled(false);
                        return RESEND_TIMEOUT;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [resendDisabled]);

    const handleValidation = async (): Promise<void> => {
        Keyboard.dismiss();

        if (value.length === CELL_COUNT) {
            try {
                // logic for real validation
                // await verifyOtp(value);

                Alert.alert('Éxito', 'Código verificado correctamente');
                onVerificationSuccess?.();
            } catch (error) {
                Alert.alert('Error', 'Código incorrecto. Intenta nuevamente.');
                codeFieldRef.current?.focus();
            }
        }
    };

    const handleResendCode = async (): Promise<void> => {
        setResendDisabled(true);
        setResendTimer(RESEND_TIMEOUT);

        try {
            await onResendCode?.();
            Alert.alert('Código reenviado', 'Se ha enviado un nuevo código OTP');
        } catch (error) {
            Alert.alert('Error', 'No se pudo reenviar el código. Intenta nuevamente.');
            setResendDisabled(false);
        }
    };

    const renderCell: CodeFieldProps['renderCell'] = ({ index, symbol, isFocused }) => (
        <View style={[otpScreenStyles.cell, isFocused && otpScreenStyles.focusCell]} key={index}>
            <Text style={otpScreenStyles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
        </View>
    );

    return (
        <View style={[spacing.safeArea]}>
            <View style={[otpScreenStyles.container]}>

                <Text style={otpScreenStyles.title}>Código de Autenticación</Text>
                <Text style={otpScreenStyles.subtitle}>
                    Hemos enviado un código de autenticación OTP a tu numero de teléfono {<Text style={otpScreenStyles.resendLink}>{phoneNumber}</Text>}.
                    Ingresa el código para verificar y continuar.
                </Text>

                <CodeField
                    ref={codeFieldRef}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={otpScreenStyles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={renderCell}
                />
                <View style={otpScreenStyles.resendField}>

                    <Text style={otpScreenStyles.resendText}>
                        ¿No recibiste el código?{' '}
                    </Text>
                    <TouchableOpacity
                        onPress={handleResendCode}
                        disabled={resendDisabled}
                        style={otpScreenStyles.resendButton}
                        activeOpacity={0.7}
                    >

                        <Text style={[otpScreenStyles.resendLink, resendDisabled && otpScreenStyles.disabledResend]}>
                            {resendDisabled ? `Reenviar en ${resendTimer}s` : 'Reenviar código'}
                        </Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    style={[
                        otpScreenStyles.validateButton,
                        value.length === CELL_COUNT
                            ? otpScreenStyles.validateButtonActive
                            : otpScreenStyles.validateButtonInactive
                    ]}
                    onPress={handleValidation}
                    disabled={value.length !== CELL_COUNT}
                    activeOpacity={0.8}
                >
                    <Text style={otpScreenStyles.validateButtonText}>Validar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OtpScreen;