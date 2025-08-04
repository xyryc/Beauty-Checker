import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const isFocused = (index: number) => state.index === index;

  return (
    <View className="relative">
      {/* Background Image */}
      <Image
        source={require("@/assets/images/menu.png")}
        contentFit="cover"
        style={{
          position: "absolute",
          width: "100%",
          height: 90,
          bottom: 0,
          zIndex: 10,
        }}
      />

      <TouchableOpacity
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
        onPress={() => navigation.navigate("search")}
      >
        <Image
          source={require("@/assets/images/search-center.svg")}
          style={{ width: 46, height: 46 }}
          contentFit="cover"
        />
      </TouchableOpacity>

      {/* Discover */}
      <View className="absolute bottom-10 z-20 flex-row justify-between w-full px-6">
        <View className="flex-row gap-8 justify-between w-[27%]">
          <TouchableOpacity
            onPress={() => navigation.navigate("index")}
            className="items-center gap-1.5"
          >
            <FontAwesome
              name="play-circle"
              size={24}
              color={isFocused(0) ? "#9333EA" : "#999"}
            />
            <Text
              style={{ fontFamily: "Poppins" }}
              className={`text-xs font-medium ${
                isFocused(0) ? "text-purple-600" : "text-accent"
              }`}
            >
              Discover
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("chat")}
            className="items-center gap-1.5 flex"
          >
            <Ionicons
              name="chatbubble-ellipses"
              size={24}
              color={isFocused(1) ? "#9333EA" : "#999"}
            />
            <Text
              style={{ fontFamily: "Poppins" }}
              className={`text-xs font-medium ${
                isFocused(1) ? "text-purple-600" : "text-accent"
              }`}
            >
              Chat
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-8 justify-between w-[27%]">
          <TouchableOpacity
            onPress={() => navigation.navigate("booked")}
            className="items-center gap-1.5 flex"
          >
            <Feather
              name="calendar"
              size={24}
              color={isFocused(3) ? "#9333EA" : "#999"}
            />
            <Text
              style={{ fontFamily: "Poppins" }}
              className={`text-xs font-medium ${
                isFocused(3) ? "text-purple-600" : "text-accent"
              }`}
            >
              Booking
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("profile")}
            className="items-center gap-1.5 flex"
          >
            <Ionicons
              name="person-outline"
              size={24}
              color={isFocused(4) ? "#9333EA" : "#999"}
            />
            <Text
              style={{ fontFamily: "Poppins" }}
              className={`text-xs font-medium ${
                isFocused(4) ? "text-purple-600" : "text-accent"
              }`}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomTabBar;
