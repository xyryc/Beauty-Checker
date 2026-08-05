import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

import ButtonCancel from "./ButtonCancel";
import ButtonPrimary from "./ButtonPrimary";

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  visible,
  onClose,
  onLogout,
}) => {
  const handleLogout = () => {
    onLogout();
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide" // ← set to "none" if you want *no* animation at all
      onRequestClose={onClose}
    >
      {/* Dark overlay – tap anywhere outside the dialog to close */}
      <Pressable
        className="flex-1 bg-black/20 justify-center items-center"
        onPress={onClose}
      >
        {/* Dialog container – stop propagation so taps inside don’t close the modal */}
        <Pressable
          className="bg-white rounded-3xl mx-6 w-80 overflow-hidden"
          onPress={(e) => e.stopPropagation()}
        >
          {/* ---------- Header (icon, title, message) ---------- */}
          <View className="items-center pt-8 pb-4">
            <View className="w-16 h-16 bg-red-100 rounded-full items-center justify-center mb-4">
              <Ionicons name="log-out-outline" size={32} color="#EF4444" />
            </View>

            <Text className="text-xl font-bold text-gray-900 mb-2">Logout</Text>

            <Text className="text-gray-600 text-center px-6 leading-5">
              Are you sure you want to logout? You'll need to sign in again to
              access your account.
            </Text>
          </View>

          {/* ---------- Action buttons ---------- */}
          <View className="p-6 pt-4 flex-row gap-4">
            <ButtonPrimary
              text="Yes, Logout"
              onPress={handleLogout}
              className="w-[48%]"
            />

            <ButtonCancel
              text="Cancel"
              onPress={onClose}
              className="w-[48%] py-2 rounded-2xl"
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default LogoutModal;
