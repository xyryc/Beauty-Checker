import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const VerifyCode = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
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
          {/* Sign in button */}
          <TouchableOpacity
            onPress={() => router.push("/(auth)/change-password")}
            className="rounded-2xl overflow-hidden"
          >
            <LinearGradient
              colors={["#B78AF7", "#612AC3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="rounded-2xl"
            >
              <Text
                className="text-white py-[14.5px] text-lg font-medium text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Verify Code
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyCode;
