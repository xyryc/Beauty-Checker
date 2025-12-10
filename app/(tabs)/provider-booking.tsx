import ButtonSmallOutline from "@/components/Shared/ButtonSmallOutline";
import SubscriptionModal from "@/components/Shared/SubscriptionModal";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

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
  const [notificationCount, setNotificationCount] = useState(3);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  // Mock subscription status (should come from backend/storage)
  const [isSubscribed, setIsSubscribed] = useState(false);

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
    if (!isSubscribed) {
      setShowSubscriptionModal(true);
      return;
    }

    setSelectedTimeSlots((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const handleDateSelect = (day: number) => {
    if (!isSubscribed) {
      setShowSubscriptionModal(true);
      return;
    }
    setSelectedDate(day);
  };

  const handleSubscribe = () => {
    // TODO: Navigate to subscription/payment screen
    console.log("Navigate to subscription");
    setShowSubscriptionModal(false);
    // In production, this would be set after successful payment
    // setIsSubscribed(true);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#FEFEFE]"
      edges={["top", "bottom", "left", "right"]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" />

      {/* Header */}
      <View
        className="flex-row items-center justify-between px-5 py-4 bg-gray-50"
        style={{
          shadowColor: "3F4F4426",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 2,
          zIndex: 1,
        }}
      >
        <Text className="text-xl font-semibold text-gray-900">
          Julian Assange
        </Text>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
          }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
          contentFit="cover"
        />
      </View>

      <ScrollView
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
              onPress={() => router.push("/provider-booking/new-request")}
              className="bg-purple-100 rounded-2xl p-4 mb-4 w-[48%]"
            >
              <View className="bg-purple-600 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="document-text" size={20} color="white" />
              </View>
              <Text
                className="text-primary text-xl mb-3"
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
                router.push("/provider-booking/accept-request")
              }
              className="bg-green-100 rounded-2xl p-4 mb-4 w-[48%]"
            >
              <View className="bg-green-600 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="checkmark-circle" size={20} color="white" />
              </View>
              <Text
                className="text-primary text-xl mb-3"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Appointments
              </Text>
              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                05 ($5200)
              </Text>
            </TouchableOpacity>

            {/* Completed */}
            <TouchableOpacity
              onPress={() => router.push("/provider-booking/completed")}
              className="bg-gray-100 rounded-2xl p-4 mb-4 w-[48%]"
            >
              <View className="bg-gray-600 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="checkmark-done" size={20} color="white" />
              </View>
              <Text
                className="text-primary text-xl mb-3"
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
              onPress={() => router.push("/provider-booking/cancelled")}
              className="bg-red-100 rounded-2xl p-4 mb-4 w-[48%]"
            >
              <View className="bg-red-600 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="close-circle" size={20} color="white" />
              </View>
              <Text
                className="text-primary text-xl mb-3"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Cancelled
              </Text>
              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                05 ($5200)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Subscription Status Banner */}
        {!isSubscribed && (
          <View className="mx-5 my-4">
            <TouchableOpacity
              onPress={() => setShowSubscriptionModal(true)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#612AC3", "#B78AF7"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center flex-1">
                    <View className="bg-white/20 rounded-full p-2 mr-3">
                      <Ionicons name="lock-closed" size={20} color="white" />
                    </View>
                    <View className="flex-1">
                      <Text
                        className="text-white font-semibold text-base"
                        style={{ fontFamily: "Poppins-SemiBold" }}
                      >
                        Unlock Calendar Access
                      </Text>
                      <Text
                        className="text-white/90 text-xs"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Subscribe to manage your bookings
                      </Text>
                    </View>
                  </View>
                  <Ionicons name="arrow-forward" size={20} color="white" />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}

        {/* Calendar Section with Lock */}
        <View className="mx-5 mb-8 relative">
          <View className="bg-[#612AC3] rounded-t-2xl p-4 flex-row items-center justify-between">
            <Text
              className="text-white text-lg"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              July, 2025
            </Text>
            {!isSubscribed && (
              <View className="bg-white/20 rounded-full px-3 py-1 flex-row items-center">
                <Ionicons name="lock-closed" size={14} color="white" />
                <Text
                  className="text-white text-xs ml-1"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  Locked
                </Text>
              </View>
            )}
            {isSubscribed && (
              <View className="bg-green-500/30 rounded-full px-3 py-1 flex-row items-center">
                <Ionicons name="lock-open" size={14} color="white" />
                <Text
                  className="text-white text-xs ml-1"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  Active
                </Text>
              </View>
            )}
          </View>

          <View className="bg-white rounded-b-2xl p-4 shadow-sm border border-[#B78AF7]">
            {/* Days of week header */}
            <View className="flex-row justify-between mb-4">
              {daysOfWeek.map((day) => (
                <Text
                  key={day}
                  className="text-primary text-lg w-12 text-center"
                  style={{
                    opacity: isSubscribed ? 1 : 0.4,
                  }}
                >
                  {day}
                </Text>
              ))}
            </View>

            {/* Calendar grid */}
            <View className="flex-row flex-wrap relative">
              {/* Empty cells for proper alignment */}
              <View className="w-12 h-12" />

              {calendarDays.map((day) => {
                const isSelected = day === selectedDate;
                return (
                  <TouchableOpacity
                    key={day}
                    onPress={() => handleDateSelect(day)}
                    className={`w-12 h-12 rounded-lg items-center justify-center m-1 ${
                      isSelected && isSubscribed
                        ? "bg-purple-700"
                        : "bg-transparent"
                    }`}
                    style={{
                      opacity: isSubscribed ? 1 : 0.4,
                    }}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={{ fontFamily: "Poppins-Medium" }}
                      className={`text-lg ${
                        isSelected && isSubscribed
                          ? "text-white font-semibold"
                          : "text-gray-900"
                      }`}
                    >
                      {day}
                    </Text>
                  </TouchableOpacity>
                );
              })}

              {/* Lock Overlay */}
              {!isSubscribed && (
                <TouchableOpacity
                  onPress={() => setShowSubscriptionModal(true)}
                  activeOpacity={0.9}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 12,
                  }}
                >
                  <View className="items-center">
                    <View className="bg-purple-600 rounded-full p-4 mb-3">
                      <Ionicons name="lock-closed" size={32} color="white" />
                    </View>
                    <Text
                      className="text-primary text-lg font-semibold mb-1"
                      style={{ fontFamily: "Poppins-SemiBold" }}
                    >
                      Calendar Locked
                    </Text>
                    <Text
                      className="text-accent text-sm text-center px-8"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Subscribe to unlock calendar access
                    </Text>

                    <ButtonSmallOutline
                      onPress={() => setShowSubscriptionModal(true)}
                      className="w-full px-4 mt-4"
                      text="Unlock Now"
                    />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <Text
          style={{
            fontFamily: "Poppins-Medium",
            opacity: isSubscribed ? 1 : 0.4,
          }}
          className="text-xl text-primary mb-4 mx-5"
        >
          Total Bookings: 12
        </Text>

        {/* Time Slots Section with Lock */}
        <View className="mx-5 mb-8 relative border border-[#B78AF7] rounded-2xl">
          <View className="bg-white rounded-2xl p-4 shadow-sm">
            <View className="flex-row flex-wrap justify-between">
              {timeSlots.map((time, index) => {
                const isSelected = selectedTimeSlots.includes(time);
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => toggleTimeSlot(time)}
                    className={`w-[48%] rounded-xl py-4 px-3 mb-3 ${
                      isSelected && isSubscribed
                        ? "bg-purple-600"
                        : "bg-gray-100"
                    }`}
                    style={{
                      opacity: isSubscribed ? 1 : 0.4,
                    }}
                    activeOpacity={0.8}
                  >
                    <Text
                      className={`text-center ${
                        isSelected && isSubscribed
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                      style={{ fontFamily: "Poppins-Medium" }}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Lock Overlay for Time Slots */}
            {!isSubscribed && (
              <TouchableOpacity
                onPress={() => setShowSubscriptionModal(true)}
                activeOpacity={0.9}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 16,
                }}
              >
                <View className="items-center">
                  <View className="bg-purple-600 rounded-full p-3 mb-2">
                    <Ionicons name="lock-closed" size={24} color="white" />
                  </View>
                  <Text
                    className="text-primary text-base font-semibold"
                    style={{ fontFamily: "Poppins-SemiBold" }}
                  >
                    Time Slots Locked
                  </Text>
                  <Text
                    className="text-accent text-xs text-center px-6 mt-1"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Subscribe to manage availability
                  </Text>

                  <ButtonSmallOutline
                    onPress={() => setShowSubscriptionModal(true)}
                    className="w-full px-4 mt-4"
                    text="Unlock Now"
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Subscription Modal */}
        <SubscriptionModal
          showSubscriptionModal={showSubscriptionModal}
          setShowSubscriptionModal={setShowSubscriptionModal}
          handleSubscribe={handleSubscribe}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProviderBookingScreen;
