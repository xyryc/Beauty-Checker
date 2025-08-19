import { ButtonSmallProps } from "@/types/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ButtonCancel = ({
  icon,
  text,
  onPress,
  className = "rounded-[4px]",
}: ButtonSmallProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`overflow-hidden w-[48%] border border-[#CE0D0D] ${className}`}
    >
      <View className="flex-row items-center justify-center gap-2.5 py-2">
        {icon && icon}
        <Text
          className="text-center text-[#CE0D0D]"
          style={{ fontFamily: "Poppins-Medium" }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCancel;
