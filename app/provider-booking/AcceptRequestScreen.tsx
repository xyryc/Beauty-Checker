import bookingRequests from "@/assets/data/bookingRequests.json";
import BookingStatus from "@/components/Booking/BookingStatus";
import Header from "@/components/Shared/Header";
import React from "react";
import { FlatList, SafeAreaView, StatusBar, Text } from "react-native";

const AcceptRequestScreen = () => {
  const handleMessage = (requestId: string) => {
    console.log("Message to:", requestId);
  };

  const handleComplete = (requestId: string) => {
    console.log("Complete request:", requestId);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <Header text="Accepted" />
      {/* todays appointment list */}
      <FlatList
        data={bookingRequests}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="px-5 mb-6 text-2xl"
          >
            Today’s Appointments
          </Text>
        }
        renderItem={({ item }) => (
          <BookingStatus
            item={item}
            status="accepted"
            onMessage={handleMessage}
            onComplete={handleComplete}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 32,
        }}
      />
    </SafeAreaView>
  );
};

export default AcceptRequestScreen;
