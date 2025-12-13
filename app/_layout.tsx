import { getFCMToken, requestFCMPermission } from "@/services/fcm";
import messaging from "@react-native-firebase/messaging";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./globals.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  // const segments = useSegments();
  // console.log("From root", segments);

  useEffect(() => {
    async function setup() {
      const granted = await requestFCMPermission();
      if (!granted) return;

      const token = await getFCMToken();
      console.log("fcm token from main", token);

      // await fetch('https://your-api.com/save-token', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ token }),
      // });
    }

    setup();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log("📬 Foreground notification:", remoteMessage);
    });

    return unsubscribe;
  }, []);

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("📦 Background message:", remoteMessage);
  });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="index" />
      <Stack.Screen name="role-selection" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
