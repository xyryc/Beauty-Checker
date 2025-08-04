import Header from "@/components/Shared/Header";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScheduleScreen = () => {
  const insets = useSafeAreaInsets();

  const scheduleData = [
    { day: "Monday", opening: "09:00Am", closing: "04:00Pm" },
    { day: "Tuesday", opening: "09:00Am", closing: "04:00Pm" },
    { day: "Wednesday", opening: "09:00Am", closing: "04:00Pm" },
    { day: "Thursday", opening: "09:00Am", closing: "04:00Pm" },
    { day: "Friday", opening: "09:00Am", closing: "04:00Pm" },
    { day: "Saturday", opening: "09:00Am", closing: "04:00Pm" },
    { day: "Sunday", opening: "09:00Am", closing: "04:00Pm" },
  ];

  const handleBackPress = () => {
    // Handle back navigation
    console.log("Back pressed");
  };

  const handleChangeTime = () => {
    // Handle change time action
    console.log("Change time pressed");
  };

  return (
    <SafeAreaView
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <Header text="Opening & Closing Time" />

      {/* Schedule Container */}
      <View className="mx-4 mt-4 bg-purple-100 rounded-2xl overflow-hidden">
        {/* Table Header */}
        <View className="flex-row bg-purple-200/50 px-4 py-4">
          <Text className="flex-1 text-base font-medium text-gray-800">
            Day
          </Text>
          <Text className="w-20 text-base font-medium text-gray-800 text-center">
            Opening
          </Text>
          <Text className="w-20 text-base font-medium text-gray-800 text-center">
            Closing
          </Text>
        </View>

        {/* Schedule Rows */}
        {scheduleData.map((item, index) => (
          <View
            key={item.day}
            className={`flex-row px-4 py-4 ${
              index !== scheduleData.length - 1
                ? "border-b border-purple-200/30"
                : ""
            }`}
          >
            <Text className="flex-1 text-base text-gray-700">{item.day}</Text>
            <Text className="w-20 text-base text-gray-700 text-center">
              {item.opening}
            </Text>
            <Text className="w-20 text-base text-gray-700 text-center">
              {item.closing}
            </Text>
          </View>
        ))}
      </View>

      {/* Bottom Section */}
      <View className="flex-1 justify-end pb-8">
        {/* Change Time Button */}
        <TouchableOpacity
          onPress={handleChangeTime}
          className="mx-4 bg-purple-600 rounded-2xl py-4 shadow-sm"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-semibold text-center">
            Change Time
          </Text>
        </TouchableOpacity>

        {/* Bottom Indicator */}
        <View className="items-center mt-4">
          <View className="w-32 h-1 bg-gray-800 rounded-full" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
