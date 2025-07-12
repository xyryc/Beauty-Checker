import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import SafeScreen from "@/components/Shared/SafeScreen";
import { useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ProfilePasswordChange = () => {
  const router = useRouter();

  return (
    <SafeScreen>
      {/* header */}
      <Header text="Password" />

      {/* Input fields */}
      <View className="justify-between px-5 h-screen-safe">
        {/* Top container */}
        <View className="pt-5">
          {/* current password */}
          <View className="mb-6">
            <Text
              className="text-lg font-medium mb-2 text-primary"
              style={{ fontFamily: "Poppins" }}
            >
              Current Password
            </Text>
            <TextInput
              className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm placeholder:text-accent ${
                Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
              }`}
              style={{ fontFamily: "Poppins" }}
              placeholder="Enter Your Current Password"
            />
          </View>

          {/* password */}
          <View className="mb-6">
            <Text
              className="text-lg font-medium mb-2 text-primary"
              style={{ fontFamily: "Poppins" }}
            >
              Password
            </Text>
            <TextInput
              className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm placeholder:text-accent ${
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
              className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm placeholder:text-accent ${
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
          <ButtonPrimary text="Confirm" onPress={() => router.back()} />

          <TouchableOpacity
            onPress={() => router.push("/(auth)/forgot-password")}
          >
            <Text
              className="text-link text-center mt-8"
              style={{ fontFamily: "Poppins" }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeScreen>
  );
};

export default ProfilePasswordChange;
