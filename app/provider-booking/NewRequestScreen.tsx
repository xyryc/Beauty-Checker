import bookingRequests from "@/assets/data/bookingRequests.json";
import BookingStatus from "@/components/Booking/BookingStatus";
import CancelModal from "@/components/Shared/CancelModal";
import Header from "@/components/Shared/Header";
import { BookingRequest } from "@/types/types";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NewRequestScreen = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(
    null
  );
  const [cancelReason, setCancelReason] = useState("");
  const insets = useSafeAreaInsets();

  const handleCancel = (requestId: string) => {
    setSelectedRequestId(requestId);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    console.log("Cancel request:", selectedRequestId, "Reason:", cancelReason);
    setShowCancelModal(false);
    setCancelReason("");
    setSelectedRequestId(null);
  };

  const handleAccept = (requestId: string) => {
    console.log("Accept request:", requestId);
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

      {/* Header */}
      <Header text="New Request" />

      {/* Request List */}
      <FlatList
        data={bookingRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookingStatus
            item={item as BookingRequest}
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

      {/* Cancel Modal */}
      <CancelModal
        showCancelModal={showCancelModal}
        setShowCancelModal={setShowCancelModal}
        cancelReason={cancelReason}
        setCancelReason={setCancelReason}
        confirmCancel={confirmCancel}
      />
    </SafeAreaView>
  );
};

export default NewRequestScreen;
