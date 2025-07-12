import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const VerifyCode = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header text="Verify Code" />

      <View className="flex-1 justify-between px-5">
        {/* Top container */}
        <View>
          <View className="mt-9 mb-2.5">
            <Text
              className="text-2xl font-medium mb-2 text-center"
              style={{ fontFamily: "Poppins" }}
            >
              Check Your Email
            </Text>
            <Text
              className="text-sm text-center text-accent"
              style={{ fontFamily: "Poppins" }}
            >
              We Sent A Reset Link To contact@gmail.com
            </Text>
            <Text
              className="text-sm text-center text-accent"
              style={{ fontFamily: "Poppins" }}
            >
              Please Enter The 6 Digit Code
            </Text>
          </View>
        </View>

        {/* Bottom container */}
        <View className="mb-16">
          <ButtonPrimary
            text="Verify Code"
            onPress={() => router.push("/(auth)/change-password")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyCode;
