import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function createNotificationChannel() {
  if (Platform.OS === "android") {
    // Default channel
    await Notifications.setNotificationChannelAsync("default", {
      name: "Default Notifications",
      importance: Notifications.AndroidImportance.HIGH,
      sound: "default",
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });

    // Booking channel
    await Notifications.setNotificationChannelAsync("bookings", {
      name: "Booking Notifications",
      importance: Notifications.AndroidImportance.HIGH,
      sound: "default",
      vibrationPattern: [0, 250, 250, 250],
    });

    // Chat channel
    await Notifications.setNotificationChannelAsync("chat", {
      name: "Chat Messages",
      importance: Notifications.AndroidImportance.HIGH,
      sound: "default",
      vibrationPattern: [0, 250, 250, 250],
    });

    console.log("✅ Notification channels created");
  }
}
