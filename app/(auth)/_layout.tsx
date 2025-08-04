import { storage } from "@/services/storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const AuthLayout = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the selected role when auth layout mounts
    const getRole = async () => {
      try {
        const role = await storage.getSelectedRole();
        setSelectedRole(role);
      } catch (error) {
        console.error("Error getting selected role:", error);
      } finally {
        setLoading(false);
      }
    };

    getRole();
  }, []);

  // console.log("Auth Layout:", selectedRole);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="verify-code" />
      <Stack.Screen name="change-password" />
    </Stack>
  );
};

export default AuthLayout;
