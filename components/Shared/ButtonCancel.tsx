import { ButtonSmallProps } from "@/types/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ButtonCancel = ({ icon, text, onPress }: ButtonSmallProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-[4px] overflow-hidden w-1/2 border border-[#CE0D0D]"
    >
      <View className="flex-row items-center justify-center gap-2.5 py-2">
        {/* <LinearGradient
          colors={["#B78AF7", "#612AC3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="rounded-2xl"
        > */}
        {icon && icon}
        {/* </LinearGradient> */}
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
