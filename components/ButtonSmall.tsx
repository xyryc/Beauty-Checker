import { ButtonSmallProps } from "@/types/types";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ButtonSmall = ({ icon, text, onPress }: ButtonSmallProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-[4px] overflow-hidden w-[48%]"
    >
      <LinearGradient
        colors={["#B78AF7", "#612AC3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="rounded-2xl"
      >
        <View className="flex-row items-center justify-center gap-2.5 py-2">
          {icon && icon}
          <Text
            className="text-white font-medium text-center"
            style={{ fontFamily: "Poppins" }}
          >
            {text}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonSmall;
