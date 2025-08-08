import bookingRequests from "@/assets/data/bookingRequests.json";
import BookingStatus from "@/components/Booking/BookingStatus";
import ButtonCancel from "@/components/Shared/ButtonCancel";
import Header from "@/components/Shared/Header";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const NewRequestScreen = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(
    null
  );
  const [cancelReason, setCancelReason] = useState("");

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

      {/* Cancel Modal */}
      <Modal
        visible={showCancelModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCancelModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <BlurView
            intensity={10} // Increase for stronger blur
            tint="light" // "light", "dark", or "default"
            style={{
              width: "90%",
              borderRadius: 16, // rounded corners for the modal
              overflow: "hidden", // ensure blur respects the border radius
            }}
          >
            <View className="p-4 bg-white/40 border border-[#B78AF7]">
              {/* Close button */}
              <TouchableOpacity
                className="bg-[#E11E18]"
                onPress={() => setShowCancelModal(false)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  borderRadius: 8,
                }}
              >
                <Ionicons name="close" size={28} color="white" />
              </TouchableOpacity>

              {/* Input */}
              <TextInput
                placeholder="Write the reason of canceling here"
                value={cancelReason}
                onChangeText={setCancelReason}
                multiline
                style={{
                  color: "#767676",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 16,
                  padding: 10,
                  height: 120,
                  textAlignVertical: "top",
                  marginTop: 64,
                }}
              />

              {/* Cancel Button */}
              <View className="mt-8 items-center">
                <ButtonCancel text="Cancel" onPress={confirmCancel} />
              </View>
            </View>
          </BlurView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default NewRequestScreen;
