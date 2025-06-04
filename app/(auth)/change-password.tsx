import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ChangePassword = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
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
              className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent bg-white ${
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
              className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm text-accent bg-white ${
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
          <TouchableOpacity
            onPress={() => router.replace("/(auth)")}
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
                Change Password
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
