import { Ionicons } from "@expo/vector-icons"; // For icons
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        // Customize the tab bar using NativeWind classes
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: 12,
          paddingTop: 12,
          height: 72,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        },
        tabBarActiveTintColor: "#fff", // Color of the active tab label
        tabBarInactiveTintColor: "#888", // Color of inactive tab labels
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        // Define the tab bar icon for each route
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Assign icons to each route
          if (route.name === "index") {
            iconName = "play-circle-outline"; // Discover icon
          } else if (route.name === "chat") {
            iconName = "chatbubble-outline"; // Chat icon
          } else if (route.name === "search") {
            iconName = "search-outline"; // Search icon (highlighted in the image)
          } else if (route.name === "booking") {
            iconName = "calendar-outline"; // Booking icon
          } else if (route.name === "menu") {
            iconName = "grid-outline"; // Menu icon
          }

          // Return the icon with a custom background for the active tab using NativeWind
          return (
            <View
              className={`flex items-center justify-center w-10 h-10 ${
                focused ? "bg-purple-500 rounded-full" : ""
              }`}
            >
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? "#fff" : "#888"} // White for active, gray for inactive
              />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Discover" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="search" options={{ title: "" }} />{" "}
      {/* No label for the highlighted tab */}
      <Tabs.Screen name="booking" options={{ title: "Booking" }} />
      <Tabs.Screen name="menu" options={{ title: "Menu" }} />
    </Tabs>
  );
};

export default TabLayout;
