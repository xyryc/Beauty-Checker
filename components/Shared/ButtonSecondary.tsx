import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View } from "react-native";

const ButtonSecondary = () => {
  return (
    <View className="border border-white flex-row items-center justify-center gap-2.5 py-2.5 rounded-sm">
      <Text
        className="text-sm text-white text-center"
        style={{ fontFamily: "Poppins" }}
      >
        Details
      </Text>

      <FontAwesome name="angle-right" size={16} color="white" />
    </View>
  );
};

export default ButtonSecondary;
