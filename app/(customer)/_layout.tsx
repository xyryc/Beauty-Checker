import { storage } from "@/services/storage";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function CustomerLayout() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has customer role
    const checkRole = async () => {
      const role = await storage.getSelectedRole();
      const token = await storage.getAuthToken();

      if (!token) {
        router.replace("/(auth)/login");
        return;
      }

      if (role !== "customer") {
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
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Customer Dashboard",
        }}
      />
    </Stack>
  );
}
