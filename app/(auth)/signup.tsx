import SocialLogin from "@/components/Auth/SocialLogin";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <SafeAreaView className="bg-white">
          <View className="flex-1 justify-between px-5">
            {/* Top container */}
            <View className="mt-[27px]">
              {/* header text */}
              <View className="items-center mb-8">
                <Text
                  className="text-2xl font-medium mb-2 text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Hello!
                </Text>
                <Text
                  className="text-sm text-accent"
                  style={{ fontFamily: "Poppins" }}
                >
                  Welcome To Beaty Checker.
                </Text>
                <Text
                  className="text-sm text-accent"
                  style={{ fontFamily: "Poppins" }}
                >
                  Please Sign Up To Continue.
                </Text>
              </View>

              {/* Email, password fields */}
              <View>
                {/* Full name */}
                <View className="mb-6">
                  <Text
                    className="text-lg font-medium mb-2 text-primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Full Name
                  </Text>
                  <TextInput
                    className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent bg-white ${
                      Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                    }`}
                    style={{ fontFamily: "Poppins" }}
                    placeholder="Enter Your Full Name"
                  />
                </View>

                {/* email */}
                <View className="mb-6">
                  <Text
                    className="text-lg font-medium mb-2 text-primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Email
                  </Text>
                  <TextInput
                    className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent bg-white ${
                      Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                    }`}
                    style={{ fontFamily: "Poppins" }}
                    placeholder="Enter Your Email"
                  />
                </View>

                {/* phone */}
                <View className="mb-6">
                  <Text
                    className="text-lg font-medium mb-2 text-primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Phone Number
                  </Text>
                  <TextInput
                    className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent bg-white ${
                      Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                    }`}
                    style={{ fontFamily: "Poppins" }}
                    placeholder="Enter Your Phone Number"
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
                    className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent bg-white ${
                      Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                    }`}
                    style={{ fontFamily: "Poppins" }}
                    placeholder="Confirm Your Password"
                  />
                </View>
              </View>

              {/* social login */}
              <SocialLogin />
            </View>

            {/* Bottom container */}
            <View className="pt-16 pb-5">
              {/* Sign in button */}
              <TouchableOpacity
                onPress={() => router.push("/(tabs)")}
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
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* Sign up link */}
              <View className="flex flex-row mt-6 justify-center gap-1">
                <Text className="text-sm" style={{ fontFamily: "Poppins" }}>
                  Already Have An Account?
                </Text>
                <TouchableOpacity onPress={() => router.back()}>
                  <Text
                    className="text-sm text-link"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
