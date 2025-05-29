import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between px-5">
        {/* Top container */}
        <View className="mt-[27px]">
          {/* header text */}
          <View className="items-center mb-8">
            <Text className="text-2xl font-medium mb-2 text-primary font-poppins">
              Hello!
            </Text>
            <Text className="text-sm text-accent font-poppins">
              Welcome To Beaty Checker.
            </Text>
            <Text className="text-sm text-accent font-poppins">
              Please Sign Up To Continue.
            </Text>
          </View>

          {/* Email, password fields */}
          <View>
            {/* Full name */}
            <View className="mb-6">
              <Text className="text-lg font-medium mb-2 text-primary font-poppins">
                Full Name
              </Text>
              <TextInput
                className="font-poppins py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent"
                placeholder="Enter Your Full Name"
              />
            </View>

            {/* email */}
            <View className="mb-6">
              <Text className="text-lg font-medium mb-2 text-primary font-poppins">
                Email
              </Text>
              <TextInput
                className="font-poppins py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent"
                placeholder="Enter Your Email"
              />
            </View>

            {/* phone */}
            <View className="mb-6">
              <Text className="text-lg font-medium mb-2 text-primary font-poppins">
                Phone Number
              </Text>
              <TextInput
                className="font-poppins py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent"
                placeholder="Enter Your Phone Number"
              />
            </View>

            {/* password */}
            <View className="mb-6">
              <Text className="text-lg font-medium mb-2 text-primary font-poppins">
                Password
              </Text>
              <TextInput
                className="font-poppins py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent"
                placeholder="Enter Your Password"
              />
            </View>

            {/* confirm password */}
            <View>
              <Text className="text-lg font-medium mb-2 text-primary font-poppins">
                Confirm Password
              </Text>
              <TextInput
                className="font-poppins py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg text-sm font-normal text-accent"
                placeholder="Confirm Your Password"
              />
            </View>
          </View>
        </View>

        {/* Bottom container */}
        <View className="mb-16">
          {/* Sign in button */}
          <TouchableOpacity className="rounded-2xl overflow-hidden">
            <LinearGradient
              colors={["#B78AF7", "#612AC3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="rounded-2xl"
            >
              <Text className="text-white py-[14.5px] text-lg font-medium text-center font-poppins">
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Sign up link */}
          <View className="flex flex-row mt-6 justify-center gap-1">
            <Text className="text-sm font-poppins">
              Already Have An Account?
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-sm text-link font-poppins">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
