import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CommonCard = ({ item }: any) => {
  return (
    <TouchableOpacity className="relative w-[48%] h-[312px] rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white mb-4">
      <Image
        className="absolute"
        source={item.image}
        style={{ width: "100%", height: "100%", borderRadius: 12 }}
        contentFit="cover"
        transition={500}
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "55%",
        }}
        className="rounded-b-xl p-1"
      />

      <View className="absolute bottom-0 p-3">
        <Text className="text-white text-base font-semibold">{item.title}</Text>

        <View className="flex-row items-center mt-1">
          <Text className="text-white text-xs">{item.subtitle}</Text>

          <View className="flex-row items-center bg-purple-600 px-2 py-0.5 rounded-md ml-2">
            <Text className="text-white text-xs font-semibold mr-1">
              {item.rating}
            </Text>
            <FontAwesome name="star" size={10} color="#fff" />
          </View>
        </View>

        <Text
          className="text-white text-xs mt-2"
          style={{ fontFamily: "Poppins" }}
        >
          Lorem Ipsum Is Simply Dummy Text Of...
          <Text
            className="text-purple-300 text-[10px]"
            style={{ fontFamily: "Poppins" }}
          >
            {" "}
            See More
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommonCard;
