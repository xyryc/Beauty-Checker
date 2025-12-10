import { storage } from "@/services/storage";
import { useAuthStore } from "@/store/authStore";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const isFocused = (index: number) => state.index === index;
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    const checkRole = async () => {
      const selectedRole = await storage.getSelectedRole();

      // if (isAuthenticated && user) {
      setRole(selectedRole);
      // }
    };
    checkRole();
  }, []);

  console.log("role", role);

  return (
    <View className="relative shadow-2xl">
      {/* Background Image */}
      <Image
        source={require("@/assets/images/menu.svg")}
        contentFit="cover"
        cachePolicy="memory-disk"
        style={{
          position: "absolute",
          width: "100%",
          height: 90,
          bottom: 0,
          zIndex: 10,
        }}
      />

      {/* search */}
      <Pressable
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
        onPress={() => navigation.navigate("search")}
      >
        <Image
          source={require("@/assets/images/search-center.svg")}
          style={{ width: 46, height: 46 }}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
      </Pressable>

      {/* Discover */}
      <View className="absolute bottom-10 z-20 flex-row justify-between w-full px-10">
        <View className="flex-row gap-8 justify-between w-[30%]">
          {/* discover */}
          <Pressable
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
          </Pressable>

          {/* chat */}
          <Pressable
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
          </Pressable>
        </View>

        <View className="flex-row gap-8 justify-between w-[30%]">
          {/* booking */}
          <Pressable
            onPress={() => {
              if (role === "customer") {
                router.push("/customer-booking");
              } else {
                router.push("/provider-booking");
              }
            }}
            className="items-center gap-1.5 flex"
          >
            <Ionicons
              name="calendar-outline"
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
          </Pressable>

          {/* profile */}
          <Pressable
            onPress={() => {
              if (role === "customer") {
                router.push("/customer-profile");
              } else {
                router.push("/provider-profile");
              }
            }}
            className="items-center gap-1.5 flex"
          >
            <Feather
              name="user"
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
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CustomTabBar;
