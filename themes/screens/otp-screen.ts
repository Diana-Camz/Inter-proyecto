import { StyleSheet } from 'react-native';
import { colors } from '../colors';

export const otpScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 70,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: colors.black,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        color: colors.black,
        lineHeight: 22,
    },
    codeFieldRoot: {
        marginTop: 10,
        marginBottom: 30,
        justifyContent: 'center',
    },
    cell: {
        width: 48,
        height: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
        borderColor: colors.gray,
        borderWidth: 2,
    },
    cellText: {
        fontSize: 24,
        color: colors.black,
        fontWeight: '800',
    },
    resendButton: {
        marginBottom: 40,
    },
    resendText: {
        textAlign: 'center',
        color: colors.black,
        fontSize: 16,
    },
    resendLink: {
        fontWeight: 'bold',
        color: colors.black,
        textDecorationLine: 'underline',
    },
    resendField: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    disabledResend: {
        color: colors.gray,
    },
    validateButton: {
        paddingVertical: 16,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    validateButtonActive: {
        backgroundColor: colors.black,
    },
    validateButtonInactive: {
        backgroundColor: colors.gray,
    },
    validateButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});