import Header from "@/components/Header";
import SafeScreen from "@/components/SafeScreen";
import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const NotificationScreen = () => {
  const router = useRouter();

  return (
    <SafeScreen>
      <Header text="Notification" />

      {/* all notification */}
      <ScrollView className="px-5 pt-6 h-screen-safe">
        <View className="border-b-[0.5px] border-primary py-4">
          <TouchableOpacity className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-4">
              <Octicons name="gear" size={24} color="#612AC3" />
              <Text className="text-accent">Notification</Text>
            </View>

            <Feather name="chevron-right" size={24} color="#767676" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

export default NotificationScreen;
