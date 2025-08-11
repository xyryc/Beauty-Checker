import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProviderBookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([
    "12.00 Pm",
    "02.00 Pm",
    "03.00 Pm",
    "06.00 Pm",
    "07.00 Pm",
  ]);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Calendar data for July 2025
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // Time slots data
  const timeSlots = [
    "11.00 Pm",
    "12.00 Pm",
    "01.00 Pm",
    "02.00 Pm",
    "03.00 Pm",
    "04.00 Pm",
    "05.00 Pm",
    "06.00 Pm",
    "07.00 Pm",
    "08.00 Pm",
  ];

  const toggleTimeSlot = (time: string) => {
    setSelectedTimeSlots((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#FEFEFE]"
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" />

      {/* Header */}
      <View
        className="flex-row items-center justify-between px-5 py-4 bg-gray-50"
        style={{
          shadowColor: "3F4F4426", // slightly darker for natural shadow
          shadowOffset: {
            width: 0,
            height: 10, // ↓ downwards only
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 2, // Android fallback
          zIndex: 1,
        }}
      >
        <Text className="text-xl font-semibold text-gray-900">Name</Text>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
          }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
          contentFit="cover"
        />
      </View>

      <ScrollView
        contentContainerClassName="py-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        {/* Stats Cards */}
        <View className="mx-5 my-8">
          <View className="flex-row flex-wrap justify-between">
            {/* New Request */}
            <TouchableOpacity
              onPress={() => router.push("/provider-booking/NewRequestScreen")}
              className="bg-purple-100 rounded-2xl p-4 mb-4 w-[48%]"
            >
              <View className="bg-purple-600 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="document-text" size={20} color="white" />
              </View>
              <Text
                className="text-primary text-lg mb-3"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                New Request
              </Text>
              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                05 ($5200)
              </Text>
            </TouchableOpacity>

            {/* Accepted */}
            <TouchableOpacity
              onPress={() =>
                router.push("/provider-booking/AcceptRequestScreen")
              }
              className="bg-gray-100 rounded-2xl p-4 mb-4 w-[48%]"
            >
              <View className="bg-gray-600 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="checkmark-circle" size={20} color="white" />
              </View>
              <Text
                className="text-primary text-lg mb-3"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Accepted
              </Text>
              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                05 ($5200)
              </Text>
            </TouchableOpacity>

            {/* Completed */}
            <TouchableOpacity
              onPress={() => router.push("/provider-booking/CompletedScreen")}
              className="bg-green-100 rounded-2xl p-4 mb-4 w-[48%]"
            >
              <View className="bg-green-600 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="checkmark-done" size={20} color="white" />
              </View>
              <Text
                className="text-primary text-lg mb-3"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Completed
              </Text>
              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                15 ($5200)
              </Text>
            </TouchableOpacity>

            {/* Cancelled */}
            <TouchableOpacity
              onPress={() => router.push("/provider-booking/CancelledScreen")}
              className="bg-red-100 rounded-2xl p-4 mb-4 w-[48%]"
            >
              <View className="bg-red-600 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="close-circle" size={20} color="white" />
              </View>
              <Text
                className="text-primary text-lg mb-3"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Canceled
              </Text>
              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                05 ($5200)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Calendar Section */}
        <View className="mx-5 mb-8">
          <View className="bg-[#612AC3] rounded-t-2xl p-4">
            <Text
              className="text-white text-lg"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              July, 2025
            </Text>
          </View>

          <View className="bg-white rounded-b-2xl p-4 shadow-sm">
            {/* Days of week header */}
            <View className="flex-row justify-between mb-4">
              {daysOfWeek.map((day) => (
                <Text
                  key={day}
                  className="text-primary text-lg w-12 text-center"
                >
                  {day}
                </Text>
              ))}
            </View>

            {/* Calendar grid */}
            <View className="flex-row flex-wrap">
              {/* Empty cells for proper alignment (assuming July 1st starts on Tuesday) */}
              <View className="w-12 h-12" />

              {calendarDays.map((day) => {
                const isSelected = day === selectedDate;
                return (
                  <TouchableOpacity
                    key={day}
                    onPress={() => setSelectedDate(day)}
                    className={`w-12 h-12 rounded-lg items-center justify-center m-1 ${
                      isSelected ? "bg-purple-700" : "bg-transparent"
                    }`}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={{ fontFamily: "Poppins-Medium" }}
                      className={`text-lg ${
                        isSelected
                          ? "text-white font-semibold"
                          : "text-gray-900"
                      }`}
                    >
                      {day}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* Time Slots Section */}
        <View className="mx-5 mb-8">
          <View className="bg-white rounded-2xl p-4 shadow-sm">
            <View className="flex-row flex-wrap justify-between">
              {timeSlots.map((time, index) => {
                const isSelected = selectedTimeSlots.includes(time);
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => toggleTimeSlot(time)}
                    className={`w-[48%] rounded-xl py-4 px-3 mb-3 ${
                      isSelected ? "bg-purple-600" : "bg-gray-100"
                    }`}
                    activeOpacity={0.8}
                  >
                    <Text
                      className={`text-center ${
                        isSelected ? "text-white" : "text-gray-700"
                      }`}
                      style={{ fontFamily: "Poppins-Medium" }}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProviderBookingScreen;
