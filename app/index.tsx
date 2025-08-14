import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import SplashScreen from "./splashScreen";

export default function App() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    // Google Fonts
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,

    // Custom Fonts
    "AvenirNextCondensed-Regular": require("../assets/fonts/avenir-next-condensed-regular.otf"),
    "AvenirNextCondensed-Bold": require("../assets/fonts/avenir-next-condensed-bold.ttf"),
  });

  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    if (!showSplash && fontsLoaded) {
      router.replace("/landing");
    }
  }, [showSplash, fontsLoaded, router]);

  if (showSplash || !fontsLoaded) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return null;
}
