export type OtpScreenProps = {
    phoneNumber: string;
    onVerificationSuccess?: () => void;
    onResendCode?: () => Promise<void>;
};
