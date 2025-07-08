import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
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
          zIndex: -1,
        }}
      />

      {/* Tab Bar Content */}
      <View className="flex-row justify-center bg-transparent">
        <View className="w-[20%] flex-grow items-center justify-center gap-8 flex-row rounded-tr-[40px] pb-5 pt-2 h-[90px]">
          {/* Discover */}
          <TouchableOpacity
            onPress={() => navigation.navigate("index")}
            className="items-center gap-1.5 flex"
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

          {/* Chat */}
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

        {/* Center Search */}
        <TouchableOpacity
          onPress={() => navigation.navigate("search")}
          className="absolute -top-6 z-10"
        >
          <LinearGradient
            colors={["#B78AF7", "#612AC3"]}
            style={{
              borderRadius: 100,
              padding: 11,
              backgroundColor: "transparent",
            }}
          >
            <Image
              source={require("@/assets/images/search.svg")}
              style={{ width: 24, height: 24 }}
              contentFit="cover"
            />
          </LinearGradient>
        </TouchableOpacity>

        <View className="w-[20%] flex-grow items-center justify-center gap-8 flex-row rounded-tl-[40px] pb-5 pt-2 h-[90px]">
          {/* Booking */}
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

          {/* Profile */}
          <TouchableOpacity
            onPress={() => navigation.navigate("menu")}
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
