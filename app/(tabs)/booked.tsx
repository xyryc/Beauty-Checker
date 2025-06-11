import SafeScreen from "@/components/SafeScreen";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TABS = ["Pending", "Completed", "Cancelled"];

const Booked = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  const getTabColor = (tab: string) => {
    switch (tab) {
      case "Pending":
        return "text-purple-600";
      case "Completed":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "text-accent";
    }
  };

  const getUnderlineColor = (tab: string) => {
    switch (tab) {
      case "Pending":
        return "bg-purple-600";
      case "Completed":
        return "bg-green-600";
      case "Cancelled":
        return "bg-red-600";
      default:
        return "bg-accent";
    }
  };

  const renderTab = (tab: string) => {
    const isActive = activeTab === tab;

    return (
      <TouchableOpacity
        key={tab}
        onPress={() => setActiveTab(tab)}
        className="flex-1 items-center pt-2.5"
      >
        <Text
          className={`font-medium text-sm ${
            isActive ? getTabColor(tab) : "text-accent"
          }`}
          style={{ fontFamily: "Poppins" }}
        >
          {tab}
        </Text>

        {isActive && (
          <View
            className={`h-[2px] w-full rounded-full mt-2.5 ${getUnderlineColor(
              tab
            )}`}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeScreen>
      {/* header */}
      <StatusBar style="dark" />

      <View
        className="px-5 py-3 bg-white flex-row justify-between items-center"
        style={{
          shadowColor: "#111111",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 5,
          backgroundColor: "white",
        }}
      >
        {/* title and search */}
        <Text className="text-xl font-medium" style={{ fontFamily: "Poppins" }}>
          Julian Assange
        </Text>

        <Image
          className="rounded-full"
          source="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
      </View>

      {/* Tabs */}
      <View className="flex-row justify-between mt-6 bg-white">
        {TABS.map(renderTab)}
      </View>
    </SafeScreen>
  );
};

export default Booked;
