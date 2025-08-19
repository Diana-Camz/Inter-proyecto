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
    titleContainer: {
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        color: colors.black,
        lineHeight: 22,
    },
    codeFieldRoot: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
    },
    cell: {
        width: 50,
        height: 60,
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
        marginTop: 10,
        marginBottom: 20,
    },
    disabledResend: {
        color: colors.gray,
    },
    resendButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    resendButtonActive: {
        backgroundColor: colors.black,
    },
    resendButtonInactive: {
        backgroundColor: colors.gray,
    },
    validateButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});