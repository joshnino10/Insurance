import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from "@expo-google-fonts/montserrat";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { useEffect } from "react";
import BotHeader from "@/Component/BotScreen/BotHeader";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
    PoppinsExtraBold: Poppins_800ExtraBold,

    InterRegular: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterBold: Inter_700Bold,
    InterSemiBold: Inter_600SemiBold,
    InterExtraBold: Inter_800ExtraBold,

    MontserratRegular: Montserrat_400Regular,
    MontserratMedium: Montserrat_500Medium,
    MontserratBold: Montserrat_700Bold,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratExtraBold: Montserrat_800ExtraBold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"/>


     
    </Stack>
  );
}
