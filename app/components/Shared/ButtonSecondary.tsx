import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonSecondary = ({ title = "Details", onPress, className }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border border-white flex-row items-center justify-center gap-2.5 py-2.5 rounded-sm ${className}`}
    >
      <Text
        className="text-sm text-white text-center"
        style={{ fontFamily: "Poppins" }}
      >
        {title}
      </Text>

      <FontAwesome name="angle-right" size={16} color="white" />
    </TouchableOpacity>
  );
};

export default ButtonSecondary;
