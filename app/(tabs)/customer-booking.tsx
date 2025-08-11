import CancelledCards from "@/components/Booking/CancelledCards";
import CompletedCards from "@/components/Booking/CompletedCards";
import PendingCards from "@/components/Booking/PendingCards";
import { Image } from "expo-image";

import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TABS = ["Pending", "Completed", "Cancelled"];

const CustomerBookingScreen = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const insets = useSafeAreaInsets();

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
    <SafeAreaView
      className="flex-1"
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: "#fefefe",
        },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fefefe" />

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
        <View className="h-full">
          {activeTab === "Pending" && <PendingCards />}
          {activeTab === "Completed" && <CompletedCards />}
          {activeTab === "Cancelled" && <CancelledCards />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomerBookingScreen;
