import { storage } from "@/services/storage";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function ProviderLayout() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has provider role
    const checkRole = async () => {
      const role = await storage.getSelectedRole();
      const token = await storage.getAuthToken();

      if (!token) {
        router.replace("/(auth)/login");
        return;
      }

      if (role !== "provider") {
        router.replace("/role-selection");
        return;
      }
    };

    checkRole();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Provider Dashboard",
        }}
      />
    </Stack>
  );
}
