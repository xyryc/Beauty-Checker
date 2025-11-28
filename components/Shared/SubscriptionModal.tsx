import {
  getSubscriptionBenefits,
  VIDEO_CONFIG,
} from "@/services/videoUploadService";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ButtonPrimary from "./ButtonPrimary";

const SubscriptionModal = ({
  showSubscriptionModal,
  setShowSubscriptionModal,
  handleSubscribe,
}: any) => {
  return (
    <Modal
      visible={showSubscriptionModal}
      transparent
      animationType="slide"
      onRequestClose={() => setShowSubscriptionModal(false)}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-3xl p-6 pb-8">
          {/* Close button */}
          <TouchableOpacity
            onPress={() => setShowSubscriptionModal(false)}
            className="absolute top-4 right-4 z-10"
          >
            <Ionicons name="close" size={28} color="#9CA3AF" />
          </TouchableOpacity>

          {/* Header */}
          <View className="items-center mt-4 mb-6">
            <View className="bg-purple-100 rounded-full p-4 mb-4">
              <Ionicons name="rocket" size={40} color="#612AC3" />
            </View>
            <Text
              className="text-2xl font-bold text-primary text-center"
              style={{ fontFamily: "Poppins-Bold" }}
            >
              Upgrade to Super Boost
            </Text>
            <Text
              className="text-accent text-center mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              Unlock premium features, unlimited uploads and more
            </Text>
          </View>

          {/* Price */}
          <View className="bg-purple-50 rounded-2xl p-4 mb-6 items-center">
            <Text
              className="text-accent text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              Only
            </Text>
            <View className="flex-row items-baseline">
              <Text
                className="text-primary text-4xl font-bold"
                style={{ fontFamily: "Poppins-Bold" }}
              >
                €{VIDEO_CONFIG.SUBSCRIPTION_PRICE}
              </Text>
              <Text
                className="text-accent text-lg ml-1"
                style={{ fontFamily: "Poppins" }}
              >
                /month
              </Text>
            </View>
          </View>

          {/* Benefits */}
          <View className="mb-6">
            {getSubscriptionBenefits().map((benefit, index) => (
              <View key={index} className="flex-row items-center mb-3">
                <View className="bg-green-100 rounded-full p-1 mr-3">
                  <Ionicons name="checkmark" size={16} color="#10B981" />
                </View>
                <Text
                  className="text-primary flex-1"
                  style={{ fontFamily: "Poppins" }}
                >
                  {benefit}
                </Text>
              </View>
            ))}
          </View>

          {/* CTA Buttons */}
          <ButtonPrimary text="Subscribe Now" onPress={handleSubscribe} />

          <TouchableOpacity
            onPress={() => setShowSubscriptionModal(false)}
            className="py-3 mt-2"
          >
            <Text
              className="text-accent text-center"
              style={{ fontFamily: "Poppins" }}
            >
              Maybe Later
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SubscriptionModal;
