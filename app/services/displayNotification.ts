import notifee from "@notifee/react-native";

interface NotificationOptions {
  title: string;
  body: string;
  channelId?: "default" | "bookings" | "chat";
  data?: Record<string, any>;
}

export async function displayLocalNotification({
  title,
  body,
  channelId = "default",
  data = {},
}: NotificationOptions) {
  try {
    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
        importance: 4, // HIGH
        pressAction: {
          id: "default",
        },
        smallIcon: "ic_launcher",
        color: "#612AC3",
        sound: "default",
      },
      data,
    });

    console.log("✅ Notification displayed:", title);
  } catch (error) {
    console.error("❌ Error displaying notification:", error);
  }
}
