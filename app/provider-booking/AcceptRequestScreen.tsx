import BookingStatus from "@/components/Booking/BookingStatus";
import Header from "@/components/Shared/Header";
import { BookingRequest } from "@/types/types";
import React from "react";
import { FlatList, SafeAreaView, StatusBar, Text } from "react-native";

const AcceptRequestScreen = () => {
  const bookingRequests: BookingRequest[] = [
    {
      id: "1",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "2",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "3",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "4",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "5",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
  ];

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
      <Header text="New Request" />
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
