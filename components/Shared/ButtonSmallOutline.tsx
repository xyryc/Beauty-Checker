import { ButtonSmallProps } from "@/types/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ButtonSmallOutline = ({ icon, text, onPress }: ButtonSmallProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-[4px] overflow-hidden w-[48%] border border-purpleButton"
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
          className="font-medium text-center text-purplePrimary"
          style={{ fontFamily: "Poppins" }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSmallOutline;
