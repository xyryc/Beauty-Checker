import CustomTabBar from "@/components/Shared/CustomTabBar";
import { storage } from "@/services/storage";
import { useAuthStore } from "@/store/authStore";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";

const TabLayout = () => {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    const checkRole = async () => {
      const selectedRole = await storage.getSelectedRole();

      if (isAuthenticated && user) {
        setRole(selectedRole);
      }
      setLoading(false);
    };
    checkRole();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="search" />

      <Tabs.Screen
        name={role === "customer" ? "customer-booking" : "provider-booking"}
      />

      <Tabs.Screen
        name={role === "customer" ? "customer-profile" : "provider-profile"}
      />
    </Tabs>
  );
};

export default TabLayout;
