import notifee from "@notifee/react-native";
import messaging from "@react-native-firebase/messaging";

export async function requestFCMPermission() {
  // Request Notifee permission first (for Android 13+)
  await notifee.requestPermission();

  //  request FCM permission
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  return enabled;
}

export async function getFCMToken() {
  const token = await messaging().getToken();
  console.log("📱 FCM Token:", token);
  return token;
}
