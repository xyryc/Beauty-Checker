import SafeScreen from "@/components/SafeScreen";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./globals.css";

export default function RootLayout() {
  const router = useRouter();
  const isSignedIn = true;
  const inAuthScreen = true;

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!isSignedIn && !inAuthScreen) router.replace("/(auth)");
      else if (isSignedIn && inAuthScreen) router.replace("/(tabs)");
    });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeScreen>

      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
