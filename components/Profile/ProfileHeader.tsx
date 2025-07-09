import { Feather, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import ButtonSmall from "../ButtonSmall";
import ButtonSmallOutline from "../ButtonSmallOutline";

const ProfileHeader = () => {
  return (
    <View className="mb-8">
      <View className="py-6 flex-row justify-between">
        <Image
          style={{
            height: 150,
            width: 150,
            borderRadius: 100,
            borderWidth: 2,
          }}
          source={
            "https://images.pexels.com/photos/31776332/pexels-photo-31776332.jpeg"
          }
          contentFit="cover"
        />

        <FontAwesome6 name="bars" size={24} color="black" />
      </View>

      <View>
        {/* name */}
        <Text
          className="text-2xl font-medium"
          style={{ fontFamily: "Poppins" }}
        >
          Fatima Zahra
        </Text>

        <View className="flex-row items-center gap-2 my-2">
          <ButtonSmall
            icon={<FontAwesome5 name="edit" size={16} color="white" />}
            text="Edit Profile"
          />

          <ButtonSmallOutline
            icon={<Feather name="send" size={16} color="#612AC3" />}
            text="Share Profile"
          />
        </View>

        <Text style={{ fontFamily: "Poppins" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since...
          <Text className="text-[#6200EE]" style={{ fontFamily: "Poppins" }}>
            See More
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
