import { getFCMToken, requestFCMPermission } from "@/services/fcm";
import { createNotificationChannel } from "@/services/notificationChannel";
import { getApps, initializeApp } from "@react-native-firebase/app";
import {
  getInitialNotification,
  getMessaging,
  onMessage,
} from "@react-native-firebase/messaging";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import { Slot, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "react-native";
import "./globals.css";

// Initialize Firebase at the top level (using modern API)
if (getApps().length === 0) {
  initializeApp();
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  // Configure notification behavior
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // ✅ Setup FCM and notification channel
  useEffect(() => {
    async function setup() {
      try {
        await createNotificationChannel();
        const granted = await requestFCMPermission();
        if (!granted) {
          console.log("❌ Notification permission denied");
          return;
        }
        const token = await getFCMToken();
      } catch (error) {
        console.error("Firebase setup error:", error);
      }
    }

    setup();
  }, []);

  // ✅ Handle foreground notifications (when app is open and visible)
  useEffect(() => {
    try {
      const messaging = getMessaging();
      const unsubscribe = onMessage(messaging, async (remoteMessage) => {
        console.log("📬 Foreground notification received:", remoteMessage);

        // Display notification with expo-notifications
        await Notifications.scheduleNotificationAsync({
          content: {
            title: remoteMessage.notification?.title || "New Notification",
            body: remoteMessage.notification?.body || "",
            data: remoteMessage.data,
            sound: "default",
          },
          trigger: null, // Show immediately
        });
      });

      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.error("Foreground notification setup error:", error);
    }
  }, []);

  // Handle notification interactions with expo-notifications
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("📱 Notification interaction:", response);

        const screen = response.notification.request.content.data?.screen;
        if (screen) {
          router.push(screen as any);
        } else {
          router.push("/discover/customer-notification");
        }
      }
    );

    return () => subscription.remove();
  }, [router]);

  // ✅ Handle notification when app was opened from killed state
  useEffect(() => {
    async function checkInitialNotification() {
      try {
        const messaging = getMessaging();
        const remoteMessage = await getInitialNotification(messaging);

        if (remoteMessage) {
          console.log(
            "📱 App opened from killed state via notification:",
            remoteMessage
          );

          const screen = remoteMessage.data?.screen;
          if (screen) {
            router.push(screen as any);
          } else {
            router.push("/discover/customer-notification");
          }
        }
      } catch (error) {
        console.error("Initial notification check error:", error);
      }
    }

    checkInitialNotification();
  }, [router]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Slot />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
