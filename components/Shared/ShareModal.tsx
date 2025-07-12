import { ShareModalProps } from "@/types/types";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

const ShareModal: React.FC<ShareModalProps> = ({ visible, onClose }) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Pressable
        className="flex-1 justify-end bg-black/50 rounded-t-[32px]"
        onPress={onClose}
      >
        <View className="bg-[#444444CC] rounded-t-2xl px-6 pt-4 pb-10">
          {/* Drag Handle */}
          <View className="items-center mb-6">
            <View className="w-14 h-1.5 rounded-full bg-white" />
          </View>

          {/* Title */}
          <Text
            className="text-white text-xl font-medium mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Share By
          </Text>

          {/* Icons Row */}
          <View className="flex-row justify-between">
            {/* Link */}
            <TouchableOpacity className="bg-neutral-700 p-5 rounded-xl items-center border-white border">
              <Entypo name="link" size={32} color="#00B2FF" />
            </TouchableOpacity>

            {/* WhatsApp */}
            <TouchableOpacity className="bg-neutral-700 p-5 rounded-xl items-center border-white border">
              <FontAwesome name="whatsapp" size={32} color="#25D366" />
            </TouchableOpacity>

            {/* Instagram */}
            <TouchableOpacity className="bg-neutral-700 p-5 rounded-xl items-center border-white border">
              <FontAwesome name="instagram" size={32} color="#E1306C" />
            </TouchableOpacity>

            {/* Messenger */}
            <TouchableOpacity className="bg-neutral-700 p-5 rounded-xl items-center border-white border">
              <FontAwesome5
                name="facebook-messenger"
                size={32}
                color="#00B2FF"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ShareModal;
