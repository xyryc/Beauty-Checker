import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, Modal, Pressable, Text, View } from "react-native";
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
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Animate in
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Animate out
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1 bg-black/50 justify-center items-center"
        onPress={onClose}
      >
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          <Pressable
            className="bg-white rounded-3xl mx-6 w-80 overflow-hidden"
            onPress={() => {}} // Prevent closing when tapping inside modal
          >
            {/* Icon */}
            <View className="items-center pt-8 pb-4">
              <View className="w-16 h-16 bg-red-100 rounded-full items-center justify-center mb-4">
                <Ionicons name="log-out-outline" size={32} color="#EF4444" />
              </View>

              {/* Title */}
              <Text className="text-xl font-bold text-gray-900 mb-2">
                Logout
              </Text>

              {/* Message */}
              <Text className="text-gray-600 text-center px-6 leading-5">
                Are you sure you want to logout? You'll need to sign in again to
                access your account.
              </Text>
            </View>

            {/* Buttons */}
            <View className="p-6 pt-4 flex gap-4">
              <ButtonPrimary
                text="Yes, Logout"
                onPress={handleLogout}
                className="w-[48%]"
              />

              <ButtonCancel
                onPress={onClose}
                text="Cancel"
                className="w-full py-2 rounded-2xl"
              />
            </View>
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export default LogoutModal;
