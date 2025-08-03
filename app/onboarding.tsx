import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();

  setTimeout(() => {
    router.replace("/role-selection");
  }, 200);

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-2xl font-bold mb-4">Welcome to Our App!</Text>
      <Text className="text-center mb-8">
        Let's get you started with a quick tour.
      </Text>
    </View>
  );
}
