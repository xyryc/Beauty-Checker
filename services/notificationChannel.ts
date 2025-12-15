import notifee, { AndroidImportance } from "@notifee/react-native";
import { Platform } from "react-native";

export async function createNotificationChannel() {
  if (Platform.OS === "android") {
    // Default channel
    await notifee.createChannel({
      id: "default",
      name: "Default Notifications",
      importance: AndroidImportance.HIGH,
      sound: "default",
      vibration: true,
      vibrationPattern: [300, 500],
    });

    // Booking channel
    await notifee.createChannel({
      id: "bookings",
      name: "Booking Notifications",
      importance: AndroidImportance.HIGH,
      sound: "default",
      vibration: true,
    });

    // Chat channel
    await notifee.createChannel({
      id: "chat",
      name: "Chat Messages",
      importance: AndroidImportance.HIGH,
      sound: "default",
      vibration: true,
    });

    console.log("✅ Notification channels created");
  }
}
