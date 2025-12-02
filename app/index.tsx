import { storage } from "@/services/storage";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, checkAuthStatus, user } = useAuthStore();

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // 1. Check authentication status first (restore Google session if exists)
      await checkAuthStatus();

      // 2. Check onboarding status
      const onboardingCompleted = await storage.getOnboardingStatus();

      if (!onboardingCompleted) {
        router.replace("/onboarding");
        return;
      }

      // 3. Check role selection
      const selectedRole = await storage.getSelectedRole();

      if (!selectedRole) {
        router.replace("/role-selection");
        return;
      }

      // 4. Check authentication (from Zustand store)
      if (!isAuthenticated) {
        // Not authenticated, go to login
        router.replace("/(auth)/login");
        return;
      }

      // Navigate to tabs
      if (selectedRole) router.replace("/(tabs)");
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
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  return null;
}
