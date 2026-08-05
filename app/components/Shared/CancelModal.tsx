import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React from "react";
import { Modal, TextInput, TouchableOpacity, View } from "react-native";
import ButtonSmallOutline from "./ButtonSmallOutline";

const CancelModal = ({
  showCancelModal,
  setShowCancelModal,
  cancelReason,
  setCancelReason,
  confirmCancel,
}) => {
  return (
    <Modal
      visible={showCancelModal}
      transparent
      animationType="none"
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
          <View className="p-4 bg-white/70 border border-[#B78AF7]">
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
                borderColor: "#E8E4DB",
                borderRadius: 16,
                padding: 10,
                height: 120,
                textAlignVertical: "top",
                marginTop: 64,
              }}
            />

            {/* Cancel Button */}
            <View className="mt-8 items-center">
              <ButtonSmallOutline text="Submit" onPress={confirmCancel} />
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default CancelModal;
