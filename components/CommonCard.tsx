import { CommonCardProps } from "@/types/types";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import ButtonSecondary from "./ButtonSecondary";

const CommonCard = ({ item, location }: CommonCardProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(location as any)}
      className={`relative w-[48%] h-[312px] border border-primary rounded-lg mb-4 bg-white ${
        Platform.OS === "ios"
          ? "shadow-ios-tertiary"
          : "shadow-android-tertiary"
      }`}
    >
      <View className="absolute top-0 right-0 p-3 z-10">
        <Image
          source={require("@/assets/images/bookmark.svg")}
          style={{ width: 20, height: 24 }}
        />
      </View>

      <View className="m-1">
        <Image
          source={item.image}
          style={{ width: "100%", height: "100%", borderRadius: 6 }}
          contentFit="cover"
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "55%",
            borderRadius: 6,
          }}
          className="p-1 overflow-hidden"
        />

        <View className="absolute bottom-0 p-3 w-full">
          <Text
            className="text-white font-medium"
            style={{ fontFamily: "Poppins" }}
          >
            {item.company}
          </Text>

          <View className="flex-row items-center justify-between mt-1">
            <Text
              className="text-white font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              ${item.price}.00
            </Text>

            <View className="flex-row items-center bg-purple-600 px-2 py-0.5 rounded-md ml-2">
              <Text
                className="text-white text-xs mr-1"
                style={{ fontFamily: "Poppins" }}
              >
                {item.rating}
              </Text>
              <FontAwesome name="star" size={10} color="#fff" />
              <Text
                className="text-white text-xs ml-1"
                style={{ fontFamily: "Poppins" }}
              >
                (99)
              </Text>
            </View>
          </View>

          <Text
            className="text-[#FEFEFE] text-xs mt-1"
            style={{ fontFamily: "Poppins" }}
          >
            {item.service_name}
          </Text>

          <Text
            className="text-[#FEFEFE] text-xs mt-1"
            style={{ fontFamily: "Poppins" }}
          >
            {item.city}
          </Text>

          <View className="mt-2 ">
            <ButtonSecondary />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CommonCard;
