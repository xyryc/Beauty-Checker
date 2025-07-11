import SocialLogin from "@/components/SocialLogin";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignIn = () => {};

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="h-screen bg-white">
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
                Welcome Back To BEAUTYCHECKER
              </Text>
              <Text
                className="text-sm text-accent"
                style={{ fontFamily: "Poppins" }}
              >
                Please Sign In To Continue
              </Text>
            </View>

            {/* Email, password fields */}
            <View>
              {/* email */}
              <View className="mb-6">
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
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              {/* password */}
              <View>
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
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <View className="mt-5">
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/forgot-password")}
                >
                  <Text
                    className="text-link text-center"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* social login */}
            <SocialLogin />
          </View>

          {/* Bottom container */}
          <View className="mb-16">
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
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Sign up link */}
            <View className="flex flex-row mt-6 justify-center gap-1">
              <Text className="text-sm" style={{ fontFamily: "Poppins" }}>
                Don't Have An Account?
              </Text>
              <Link
                href="/signup"
                className="text-sm text-link"
                style={{ fontFamily: "Poppins" }}
              >
                Sign Up
              </Link>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
