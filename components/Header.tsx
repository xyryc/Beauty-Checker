import { HeaderProps } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = ({ text }: HeaderProps) => {
  const router = useRouter();

  return (
    <View
      className="flex-row items-center px-5 py-3 bg-white"
      style={{
        shadowColor: "#fefefe", // slightly darker for natural shadow
        shadowOffset: {
          width: 0,
          height: 4, // ↓ downwards only
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2, // Android fallback
        zIndex: 1,
      }}
    >
      <TouchableOpacity onPress={() => router.back()} className="z-10">
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
