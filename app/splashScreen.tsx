import { splashScreenStyles as styles } from "@/styles/screens/splas-screen.styles";
import React, { useEffect } from "react";
import { Image, StatusBar, View } from "react-native";
import { Props } from "types/screens/splashScreen";

export default function SplashScreen({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <Image
        source={require("../assets/images/InterestelarLogo.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
