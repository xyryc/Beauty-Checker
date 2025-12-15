import { getFCMToken, requestFCMPermission } from "@/services/fcm";
import { createNotificationChannel } from "@/services/notificationChannel";
import notifee, { EventType } from "@notifee/react-native";
import {
  getInitialNotification,
  getMessaging,
  onMessage,
  onNotificationOpenedApp,
} from "@react-native-firebase/messaging";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import "./globals.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const { addNotification } = useNotificationStore();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  // Create notification channel
  useEffect(() => {
    createNotificationChannel();
  }, []);

  // request FCM Permission
  useEffect(() => {
    async function setup() {
      const granted = await requestFCMPermission();
      if (!granted) {
        console.log("❌ Notification permission denied");
        return;
      }

      const token = await getFCMToken();

      // await fetch('https://your-api.com/save-token', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ token }),
      // });
    }

    setup();
  }, []);

  // ✅ Handle foreground notifications (when app is open and visible)
  useEffect(() => {
    const messaging = getMessaging();
    const unsubscribe = onMessage(messaging, async (remoteMessage) => {
      console.log("📬 Foreground notification received:", remoteMessage);

      // Store in Zustand (uncomment when ready)
      // addNotification({
      //   title: remoteMessage.notification?.title || 'New Notification',
      //   body: remoteMessage.notification?.body || '',
      //   type: remoteMessage.data?.type as any,
      //   data: remoteMessage.data,
      // });

      // Display notification with Notifee
      await notifee.displayNotification({
        title: remoteMessage.notification?.title || "New Notification",
        body: remoteMessage.notification?.body || "",
        android: {
          channelId: remoteMessage.data?.channelId || "default",
          pressAction: {
            id: "default",
          },
          importance: 4, // HIGH
          smallIcon: "ic_launcher",
          color: "#612AC3",
          sound: "default",
        },
        ios: {
          sound: "default",
          foregroundPresentationOptions: {
            alert: true,
            badge: true,
            sound: true,
          },
        },
        data: remoteMessage.data,
      });
    });

    return unsubscribe;
  }, []);

  // ✅ Handle foreground notification interactions (taps, dismissals, etc.)
  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(({ type, detail }) => {
      console.log("📱 Foreground notification event:", type, detail);

      if (type === EventType.PRESS) {
        console.log("User pressed notification:", detail.notification);

        // Navigate based on notification data
        const screen = detail.notification?.data?.screen;
        if (screen) {
          router.push(screen as any);
        } else {
          router.push("/discover/customer-notification");
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  // ✅ Handle notification tap when app was in background/quit state
  useEffect(() => {
    // Handle notification opened from background state
    const messaging = getMessaging();
    const unsubscribe = onNotificationOpenedApp(messaging, (remoteMessage) => {
      console.log("🚀 Notification opened app from background:", remoteMessage);

      // Store in Zustand (uncomment when ready)
      // addNotification({
      //   title: remoteMessage.notification?.title || 'Notification',
      //   body: remoteMessage.notification?.body || '',
      //   data: remoteMessage.data,
      // });

      // Navigate based on notification data
      const screen = remoteMessage.data?.screen;
      if (screen) {
        setTimeout(() => router.push(screen as any), 500);
      } else {
        setTimeout(() => router.push("/discover/customer-notification"), 500);
      }
    });

    // Handle notification opened from quit state (app was completely closed)
    getInitialNotification(messaging).then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "🚀 App opened from quit state via notification:",
          remoteMessage
        );

        // Store in Zustand (uncomment when ready)
        // addNotification({
        //   title: remoteMessage.notification?.title || 'Notification',
        //   body: remoteMessage.notification?.body || '',
        //   data: remoteMessage.data,
        // });

        // Navigate based on notification data
        const screen = remoteMessage.data?.screen;
        if (screen) {
          setTimeout(() => router.push(screen as any), 1000);
        } else {
          setTimeout(
            () => router.push("/discover/customer-notification"),
            1000
          );
        }
      }
    });

    return unsubscribe;
  }, [router]);

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
