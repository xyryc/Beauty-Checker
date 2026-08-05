import bookingRequests from "@/assets/data/bookingRequests.json";
import BookingStatus from "@/components/Booking/BookingStatus";
import Header from "@/components/Shared/Header";
import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CompletedScreen = () => {
  const insets = useSafeAreaInsets();

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

      {/* Header */}
      <Header text="Completed" />
      {/* todays appointment list */}
      <FlatList
        data={bookingRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookingStatus item={item} status="completed" />
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

export default CompletedScreen;
