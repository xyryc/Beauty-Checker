import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonPrimary = ({ text, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} className="rounded-2xl overflow-hidden">
      <LinearGradient
        colors={["#B78AF7", "#612AC3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="rounded-2xl"
      >
        <Text
          className="text-white py-[14.5px] text-lg font-medium text-center"
          style={{ fontFamily: "Poppins" }}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
