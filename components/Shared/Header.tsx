import { HeaderProps } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = ({ text }: HeaderProps) => {
  const router = useRouter();

  return (
    <View className="flex-row items-center px-5 py-2 bg-[#fefefe] border-b border-gray-200">
      <TouchableOpacity onPress={() => router.back()} className="z-10 p-3.5">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text
        className="text-xl font-medium absolute left-0 right-0 text-center"
        style={{ fontFamily: "Poppins" }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Header;
