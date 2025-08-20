import CustomText from '@/components/ CustomText';
import CustomButton from '@/components/CustomButton';
import GoBackButton from '@/components/GoBackButton';
import TextLinkRow from '@/components/TextLinkRow';
import { spacing } from '@/themes';
import { otpScreenStyles } from '@/themes/screens/otp-screen';
import type { OtpScreenProps } from '@/types/screens/otpScreen';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Keyboard, View } from 'react-native';
import { CodeField, CodeFieldProps, Cursor } from 'react-native-confirmation-code-field';

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

                Alert.alert('Código verificado correctamente');
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
        <View style={[otpScreenStyles.cell]} key={index}>
            <CustomText text={symbol || (isFocused ? <Cursor /> : null)} type='TitleExtraBig' />
        </View>
    );

    return (
        <View style={[spacing.safeArea]}>
            <View style={[otpScreenStyles.container]}>
                <GoBackButton />
                <View style={otpScreenStyles.titleContainer} >
                    <CustomText text='Código de Autenticación' type='TitleBig' />
                </View>
                <View style={otpScreenStyles.titleContainer} >

                    <CustomText
                        text={
                            <>
                                Hemos enviado un código de autenticación OTP al número{" "}
                                <CustomText text={phoneNumber} type='AvenirBodyBold' />
                                . Ingresa el código para verificar y continuar.
                            </>
                        }
                        type="TextMedium"
                        numberOfLines={3}
                    />
                </View>


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
                <TextLinkRow
                    message='¿No recibiste el código? ' linkText={resendDisabled ? `Reenviar en ${resendTimer}s` : 'Reenviar código'}
                    onPress={handleResendCode}
                    disabled={resendDisabled}
                />
                <View style={otpScreenStyles.resendButton}>
                    <CustomButton
                        title="Validar"
                        onPress={handleValidation}
                        disabled={value.length !== CELL_COUNT}
                    />
                </View>
            </View>
        </View>
    );
};

export default OtpScreen;