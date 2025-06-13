import CancelledCards from "@/components/CancelledCards";
import CompletedCards from "@/components/CompletedCards";
import PendingCards from "@/components/PendingCards";
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
        return "text-purple-600";
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
        return "bg-purple-600";
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
            className={`w-full rounded-full mt-2.5 ${getUnderlineColor(tab)} ${
              isActive ? "h-[2px] opacity-100 shadow" : "h-[0px] opacity-0"
            }`}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeScreen>
      {/* header */}
      <StatusBar style="dark" />

      <View className="bg-white">
        {/* header */}
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
          <Text
            className="text-xl font-medium"
            style={{ fontFamily: "Poppins" }}
          >
            Julian Assange
          </Text>

          <Image
            className="rounded-full"
            source="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
        </View>

        {/* Tabs */}
        <View
          className="flex-row justify-between pt-6 px-5 bg-white"
          style={{
            shadowColor: "#111111",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.15,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          {TABS.map(renderTab)}
        </View>

        {/* Tab Content */}
        <View className="bg-[#e7e7e7] h-full">
          {activeTab === "Pending" && <PendingCards />}
          {activeTab === "Completed" && <CompletedCards />}
          {activeTab === "Cancelled" && <CancelledCards />}
        </View>
      </View>
    </SafeScreen>
  );
};

export default Booked;
