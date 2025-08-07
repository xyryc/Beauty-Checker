import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([
    "12.00 Pm",
    "02.00 Pm",
    "03.00 Pm",
    "06.00 Pm",
    "07.00 Pm",
  ]);

  // Stats data
  const stats = [
    {
      title: "New Request",
      count: 5,
      amount: "$5200",
      color: "bg-purple-100",
      iconBg: "bg-purple-600",
      icon: "document-text",
    },
    {
      title: "Accepted",
      count: 5,
      amount: "$5200",
      color: "bg-gray-100",
      iconBg: "bg-gray-600",
      icon: "checkmark-circle",
    },
    {
      title: "Completed",
      count: 15,
      amount: "$5200",
      color: "bg-green-100",
      iconBg: "bg-green-600",
      icon: "checkmark-done",
    },
    {
      title: "Canceled",
      count: 5,
      amount: "$5200",
      color: "bg-red-100",
      iconBg: "bg-red-600",
      icon: "close-circle",
    },
  ];

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
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

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
      >
        {/* Stats Cards */}
        <View className="px-5 mb-6">
          <View className="flex-row flex-wrap justify-between">
            {stats.map((stat, index) => (
              <View
                key={index}
                className={`${stat.color} rounded-2xl p-4 mb-4 w-[48%]`}
              >
                <View
                  className={`${stat.iconBg} w-10 h-10 rounded-xl items-center justify-center mb-3`}
                >
                  <Ionicons name={stat.icon as any} size={20} color="white" />
                </View>
                <Text className="text-gray-900 font-medium text-base mb-1">
                  {stat.title}
                </Text>
                <Text className="text-gray-600 text-sm">
                  {stat.count.toString().padStart(2, "0")} ({stat.amount})
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Calendar Section */}
        <View className="mx-5 mb-6">
          <View className="bg-purple-600 rounded-t-2xl px-4 py-3">
            <Text className="text-white font-semibold text-lg">July, 2025</Text>
          </View>

          <View className="bg-white rounded-b-2xl p-4 shadow-sm">
            {/* Days of week header */}
            <View className="flex-row justify-between mb-4">
              {daysOfWeek.map((day) => (
                <Text
                  key={day}
                  className="text-gray-600 font-medium text-sm w-10 text-center"
                >
                  {day}
                </Text>
              ))}
            </View>

            {/* Calendar grid */}
            <View className="flex-row flex-wrap">
              {/* Empty cells for proper alignment (assuming July 1st starts on Tuesday) */}
              <View className="w-10 h-10" />

              {calendarDays.map((day) => {
                const isSelected = day === selectedDate;
                return (
                  <TouchableOpacity
                    key={day}
                    onPress={() => setSelectedDate(day)}
                    className={`w-10 h-10 rounded-lg items-center justify-center m-1 ${
                      isSelected ? "bg-purple-600" : "bg-transparent"
                    }`}
                    activeOpacity={0.7}
                  >
                    <Text
                      className={`text-base ${
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
                      className={`text-center font-medium ${
                        isSelected ? "text-white" : "text-gray-700"
                      }`}
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

export default BookingScreen;
