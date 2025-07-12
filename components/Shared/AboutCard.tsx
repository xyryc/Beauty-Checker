import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const AboutCard = () => {
  return (
    <View className="px-5">
      {/* item */}
      <View className="flex-row gap-2.5 items-center py-1 mb-1 ">
        <Image
          source={require("@/assets/images/time.svg")}
          style={{ width: 32, height: 32 }}
        />

        <View>
          <Text className="text-primary mb-1" style={{ fontFamily: "Poppins" }}>
            Opening & Closing Time
          </Text>
        </View>
      </View>

      {/* item */}
      <View className="flex-row gap-2.5 items-center py-1 mb-1">
        <Image
          source={require("@/assets/images/location.svg")}
          style={{ width: 32, height: 32 }}
        />

        <View>
          <Text className="text-primary mb-1" style={{ fontFamily: "Poppins" }}>
            Dhaka, Bangladesh
          </Text>
          <Text
            className="text-primary text-[10px]"
            style={{ fontFamily: "Poppins" }}
          >
            Current town/City
          </Text>
        </View>
      </View>

      {/* item */}
      <View className="flex-row gap-2.5 items-center py-1 mb-1">
        <Image
          source={require("@/assets/images/facebook.svg")}
          style={{ width: 32, height: 32 }}
        />

        <View>
          <Text className="text-primary mb-1" style={{ fontFamily: "Poppins" }}>
            Julian Assange
          </Text>
          <Text
            className="text-primary text-[10px]"
            style={{ fontFamily: "Poppins" }}
          >
            Facebook
          </Text>
        </View>
      </View>

      {/* item */}
      <View className="flex-row gap-2.5 items-center py-1 mb-1">
        <Image
          source={require("@/assets/images/instagram.svg")}
          style={{ width: 32, height: 32 }}
        />

        <View>
          <Text className="text-primary mb-1" style={{ fontFamily: "Poppins" }}>
            Julian Assange
          </Text>
          <Text
            className="text-primary text-[10px]"
            style={{ fontFamily: "Poppins" }}
          >
            Instagram
          </Text>
        </View>
      </View>

      {/* item */}
      <View className="flex-row gap-2.5 items-center py-1">
        <Image
          source={require("@/assets/images/web.svg")}
          style={{ width: 32, height: 32 }}
        />

        <View>
          <Text className="text-primary mb-1" style={{ fontFamily: "Poppins" }}>
            beautychecker.app
          </Text>
          <Text
            className="text-primary text-[10px]"
            style={{ fontFamily: "Poppins" }}
          >
            Website
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutCard;
