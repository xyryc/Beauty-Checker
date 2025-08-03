import { authService } from "@/services/auth";
import { storage } from "@/services/storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      // Check onboarding status
      const onboardingCompleted = await storage.getOnboardingStatus();

      if (!onboardingCompleted) {
        router.replace("/onboarding");
        return;
      }

      // Check role selection
      const selectedRole = await storage.getSelectedRole();

      if (!selectedRole) {
        router.replace("/role-selection");
        return;
      }

      // Check authentication
      const { isAuthenticated } = await authService.checkAuthStatus();

      if (!isAuthenticated) {
        router.replace("/(auth)/login");
        return;
      }

      // Navigate to role-specific home
      if (selectedRole === "customer") {
        router.replace("/(customer)/(tabs)");
      } else if (selectedRole === "admin") {
        router.replace("/(provider)/(tabs)");
      }
    } catch (error) {
      console.error("Error checking app state:", error);
      router.replace("/onboarding");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  return null;
}
