import notifee from "@notifee/react-native";
import {
  AuthorizationStatus,
  getMessaging,
  getToken,
  requestPermission,
} from "@react-native-firebase/messaging";

export async function requestFCMPermission() {
  // Request Notifee permission first (for Android 13+)
  const messaging = getMessaging();
  await notifee.requestPermission();

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
