import Header from "@/components/Header";
import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, SafeAreaView, Text, TextInput, View } from "react-native";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header text="Forgot Password" />

      <View className="flex-1 justify-between px-5">
        {/* Email fields */}
        <View className="mt-11">
          <Text
            className="text-lg font-medium mb-2 text-primary"
            style={{ fontFamily: "Poppins" }}
          >
            Email
          </Text>
          <TextInput
            className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal placeholder:text-accent bg-white ${
              Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
            }`}
            style={{ fontFamily: "Poppins" }}
            placeholder="Enter Your Email"
          />
        </View>

        {/* Bottom container */}
        <View className="mb-16">
          <ButtonPrimary
            text="Send The Code"
            onPress={() => router.push("/(auth)/verify-code")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
