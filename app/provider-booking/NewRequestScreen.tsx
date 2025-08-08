import BookingStatus from "@/components/Booking/BookingStatus";
import Header from "@/components/Shared/Header";
import { BookingRequest } from "@/types/types";
import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";

const NewRequestScreen = () => {
  const bookingRequests: BookingRequest[] = [
    {
      id: "1",
      clientName: "Julian Assange",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "2",
      clientName: "Julian Assange",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "3",
      clientName: "Julian Assange",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "4",
      clientName: "Julian Assange",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "5",
      clientName: "Julian Assange",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
  ];

  const handleCancel = (requestId: string) => {
    console.log("Cancel request:", requestId);
  };

  const handleAccept = (requestId: string) => {
    console.log("Accept request:", requestId);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <Header text="New Request" />
      {/* Request List */}
      <FlatList
        data={bookingRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookingStatus
            item={item}
            status="new"
            onCancel={handleCancel}
            onAccept={handleAccept}
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

export default NewRequestScreen;
