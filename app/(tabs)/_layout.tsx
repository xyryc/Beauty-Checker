import CustomTabBar from "@/components/Shared/CustomTabBar";
import { authService } from "@/services/auth";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";

const TabLayout = () => {
  const [role, setRole] = useState<"customer" | "provider" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      const authStatus = await authService.checkAuthStatus();
      if (authStatus.isAuthenticated && authStatus.user) {
        setRole(authStatus.user.role); // Assuming role is stored in user object
      }
      setLoading(false);
    };
    checkRole();
  }, []);

  // console.log(role);

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
