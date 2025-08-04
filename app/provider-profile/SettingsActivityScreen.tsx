import Header from "@/components/Shared/Header";
import SafeScreen from "@/components/Shared/SafeScreen";
import { Feather, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const SettingsActivityScreen = () => {
  const router = useRouter();

  return (
    <SafeScreen>
      <Header text="Settings & Activity" />

      {/* menu */}
      <ScrollView className="px-5 pt-6 h-screen-safe">
        {/* settings */}
        <View className="border-b-[0.5px] border-primary py-4">
          <TouchableOpacity
            onPress={() => router.push("/profile/SettingsScreen")}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row items-center gap-4">
              <Octicons name="gear" size={24} color="#612AC3" />
              <Text className="text-accent">Settings</Text>
            </View>

            <Feather name="chevron-right" size={24} color="#767676" />
          </TouchableOpacity>
        </View>

        {/* privacy policy */}
        <View className="border-b-[0.5px] border-primary py-4">
          <TouchableOpacity
            onPress={() => router.push("/profile/PrivacyPolicyScreen")}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row items-center gap-4">
              <MaterialCommunityIcons
                name="file-document-multiple-outline"
                size={24}
                color="#612AC3"
              />
              <Text className="text-accent">Privacy Policy</Text>
            </View>

            <Feather name="chevron-right" size={24} color="#767676" />
          </TouchableOpacity>
        </View>

        {/* terms & conditions */}
        <View className=" border-b-[0.5px] border-primary py-4">
          <TouchableOpacity
            onPress={() => router.push("/profile/TermsConditionsScreen")}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row items-center gap-4">
              <MaterialCommunityIcons
                name="file-sign"
                size={24}
                color="#612AC3"
              />
              <Text className="text-accent">Terms & Conditions</Text>
            </View>

            <Feather name="chevron-right" size={24} color="#767676" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

export default SettingsActivityScreen;
