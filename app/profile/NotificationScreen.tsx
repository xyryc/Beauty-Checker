import Header from "@/components/Shared/Header";
import SafeScreen from "@/components/Shared/SafeScreen";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

const NotificationScreen = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeScreen>
      <Header text="Notification" />

      {/* all notification */}
      <ScrollView className="px-5 pt-6 h-screen-safe">
        <View className="border-b-[0.5px] border-primary py-4">
          <TouchableOpacity className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-4">
              <Octicons name="gear" size={24} color="#612AC3" />
              <Text className="text-accent">All Notification</Text>
            </View>

            <Switch
              trackColor={{ false: "#767577", true: "#CEB0FA" }}
              thumbColor={isEnabled ? "#612AC3" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

export default NotificationScreen;
