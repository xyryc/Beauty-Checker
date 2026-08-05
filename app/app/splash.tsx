import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  setTimeout(() => {
    router.replace("/role-selection");
  }, 1500);

  return (
    <View className="flex-1">
      <StatusBar hidden />
      <Image
        source={require("@/assets/images/onboarding.png")}
        style={StyleSheet.absoluteFillObject}
        contentFit="cover"
      />
    </View>
  );
}
