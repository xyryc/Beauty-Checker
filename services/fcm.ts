import {
  AuthorizationStatus,
  getMessaging,
  getToken,
  requestPermission,
} from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";

export async function requestFCMPermission() {
  // Request notification permission (for Android 13+)
  const messaging = getMessaging();
  await Notifications.requestPermissionsAsync();

  //  request FCM permission
  const authStatus = await requestPermission(messaging);
  const enabled =
    authStatus === AuthorizationStatus.AUTHORIZED ||
    authStatus === AuthorizationStatus.PROVISIONAL;

  return enabled;
}

export async function getFCMToken() {
  const messaging = getMessaging();
  const token = await getToken(messaging);
  console.log("📱 FCM Token:", token);
  return token;
}
