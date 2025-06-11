import SafeScreen from "@/components/SafeScreen"; // update path as needed
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row items-center px-5 py-2">
        <TouchableOpacity onPress={() => navigation.goBack()} className="pr-4">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-medium absolute left-0 right-0 text-center">
          Settings
        </Text>
      </View>

      <View className="mt-8 px-5">
        {/* Notification Toggle */}
        <View className="flex-row items-center justify-between py-4">
          <View className="flex-row items-center gap-3">
            <Feather name="bell" size={20} color="black" />
            <Text className="text-base font-medium text-gray-800">
              Notification
            </Text>
          </View>
          <Switch
            value={isEnabled}
            onValueChange={setIsEnabled}
            thumbColor={isEnabled ? "#9333EA" : "#f4f3f4"}
            trackColor={{ false: "#ccc", true: "#E9D5FF" }}
          />
        </View>

        <View className="border-b-[0.5px] border-accent" />

        {/* Language Option */}
        <TouchableOpacity className="flex-row items-center justify-between py-4">
          <View className="flex-row items-center gap-3">
            <FontAwesome name="globe" size={20} color="black" />
            <Text className="text-base font-medium text-gray-800">
              Language
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        <View className="border-b-[0.5px] border-accent" />
      </View>
    </SafeScreen>
  );
};

export default SettingsScreen;
