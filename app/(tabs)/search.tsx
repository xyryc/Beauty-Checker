import SafeScreen from "@/components/SafeScreen";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View } from "react-native";

const Search = () => {
  return (
    <SafeScreen>
      {/* header */}
      <StatusBar style="dark" />

      <View className="px-5 bg-[#EFE6FD]">
        {/* name and profile */}
        <View className="py-3 flex-row justify-between items-center">
          <Text
            className="text-xl font-medium"
            style={{ fontFamily: "Poppins" }}
          >
            Julian Assange
          </Text>

          <Image
            className="rounded-full"
            source="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
        </View>

        {/* search bar */}
        <View className="flex-row gap-4 items-center mt-4 mb-3">
          <View className="flex-1 flex-row items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <Image
              source={require("@/assets/images/search_purple.svg")}
              style={{ width: 24, height: 24 }}
              contentFit="cover"
            />

            {/* Purple icon */}
            <TextInput
              placeholder="Which beauty service you look for?"
              placeholderTextColor="#888"
              className="ml-2 flex-1 text-base text-accent"
              style={{ fontFamily: "Poppins" }}
            />
          </View>

          <LinearGradient
            colors={["#B78AF7", "#612AC3"]}
            style={{ padding: 8, borderRadius: 8 }}
          >
            <FontAwesome6 name="sliders" size={24} color="#fff" />
          </LinearGradient>
        </View>
      </View>
    </SafeScreen>
  );
};

export default Search;
