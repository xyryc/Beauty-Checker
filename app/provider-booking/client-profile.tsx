import bookingRequests from "@/assets/data/bookingRequests.json";
import BookingStatus from "@/components/Booking/BookingStatus";
import ButtonSmallOutline from "@/components/Shared/ButtonSmallOutline";
import { BookingRequest } from "@/types/types";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ClientProfileScreen = () => {
  const { clientId } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Find the booking request by clientId
  const bookingData = bookingRequests.find((item) => item.id === clientId);

  // If no booking data found, show error
  if (!bookingData) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 justify-center items-center">
        <Text className="text-gray-500 text-lg">Client not found</Text>
      </SafeAreaView>
    );
  }

  const handleMessage = () => {
    console.log("Message client:", bookingData.clientName);
    // Navigate to chat or open messaging
  };

  const handleCancel = (requestId: string) => {
    console.log("Cancel booking request:", requestId);
    router.back();
  };

  const handleAccept = (requestId: string) => {
    console.log("Accept booking request:", requestId);
    router.back();
  };

  return (
    <SafeAreaView
      className="flex-1 bg-gray-50"
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Client Profile Section */}
        <View className=" px-5 pt-6 pb-6">
          {/* Profile Image */}
          <View className=" overflow-hidden mb-6">
            <Image
              source={{ uri: bookingData.clientImage }}
              style={{ width: 150, height: 150, borderRadius: 100 }}
              contentFit="cover"
            />
          </View>

          {/* Client Name */}
          <Text
            className="text-primary text-2xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            {bookingData.clientName}
          </Text>

          {/* Message Button */}
          <ButtonSmallOutline
            text="Message"
            onPress={handleMessage}
            className="w-full my-2"
          />

          {/* Description Text */}
          <Text
            className="text-accent leading-5"
            style={{ fontFamily: "Poppins" }}
          >
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since...{" "}
            <Text className="text-purple-600 font-medium">See More</Text>
          </Text>
        </View>

        {/* Booking Request Card - Using BookingStatus Component */}
        <View className="mt-10">
          <BookingStatus
            item={bookingData as BookingRequest}
            status="new"
            onCancel={handleCancel}
            onAccept={handleAccept}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClientProfileScreen;
