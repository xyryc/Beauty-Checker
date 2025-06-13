import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

type CommonCardProps = {
  item: any;
  location: string;
};

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
      <View className="m-1">
        <Image
          className="absolute"
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

        <View className="absolute bottom-0 p-3">
          <Text className="text-white text-base font-semibold">
            {item.title}
          </Text>

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

        <View className="absolute top-0 right-0 p-3 z-10">
          <Image
            source={require("@/assets/images/bookmark.svg")}
            style={{ width: 20, height: 24 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CommonCard;
