import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, SafeAreaView, Text, TextInput, View } from "react-native";

const ChangePassword = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header text="Change Password" />

      <View className="flex-1 justify-between px-5">
        {/* Top container */}
        <View className="mt-9">
          <Text
            className="text-primary text-2xl font-bold text-center mb-10"
            style={{ fontFamily: "Poppins" }}
          >
            Set a new password
          </Text>

          {/* password */}
          <View className="mb-6">
            <Text
              className="text-lg font-medium mb-2 text-primary"
              style={{ fontFamily: "Poppins" }}
            >
              Password
            </Text>
            <TextInput
              className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm placeholder:text-accent bg-white ${
                Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
              }`}
              style={{ fontFamily: "Poppins" }}
              placeholder="Enter Your Password"
            />
          </View>

          {/* confirm password */}
          <View>
            <Text
              className="text-lg font-medium mb-2 text-primary"
              style={{ fontFamily: "Poppins" }}
            >
              Confirm Password
            </Text>
            <TextInput
              className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm placeholder:text-accent bg-white ${
                Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
              }`}
              style={{ fontFamily: "Poppins" }}
              placeholder="Enter Your Password"
            />
          </View>
        </View>

        {/* Bottom container */}
        <View className="mb-16">
          {/* Sign in button */}
          <ButtonPrimary
            text="Change Password"
            onPress={() => router.push("/(auth)")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
