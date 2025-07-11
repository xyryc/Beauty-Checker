import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./globals.css";

export default function RootLayout() {
  const router = useRouter();
  const isSignedIn = false;
  const inAuthScreen = false;

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!isSignedIn && !inAuthScreen) router.replace("/(auth)");
      else if (isSignedIn && inAuthScreen) router.replace("/(tabs)");
    });
  }, []);

  const [fontsLoaded] = useFonts({
    "EduQLDHand-Regular": require("../assets/fonts/EduQLDHand-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>

      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
