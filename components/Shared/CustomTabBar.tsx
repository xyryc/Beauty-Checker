import { authService } from "@/services/auth";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const isFocused = (index: number) => state.index === index;
  const [role, setRole] = useState<"customer" | "provider" | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkRole = async () => {
      const authStatus = await authService.checkAuthStatus();
      if (authStatus.isAuthenticated && authStatus.user) {
        setRole(authStatus.user.role); // Assuming role is stored in user object
      }
      setLoading(false);
    };
    checkRole();
  }, []);

  return (
    <View className="relative shadow-android">
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
      <TouchableOpacity
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
        onPress={() => navigation.navigate("search")}
      >
        <Image
          source={require("@/assets/images/search-center.svg")}
          style={{ width: 46, height: 46 }}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
      </TouchableOpacity>

      {/* Discover */}
      <View className="absolute bottom-10 z-20 flex-row justify-between w-full px-10">
        <View className="flex-row gap-8 justify-between w-[30%]">
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

        <View className="flex-row gap-8 justify-between w-[30%]">
          <TouchableOpacity
            onPress={() => {
              if (role === "customer") {
                router.push("/customer-booking");
              } else {
                router.push("/provider-booking");
              }
            }}
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
            onPress={() => {
              if (role === "customer") {
                router.push("/customer-profile");
              } else {
                router.push("/provider-profile");
              }
            }}
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
