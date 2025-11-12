import Header from "@/components/Shared/Header";
import LogoutModal from "@/components/Shared/LogoutModal";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsActivityScreen = () => {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    // Clear storage, navigate to login, etc.
  };

  return (
    <SafeAreaView
      className="bg-white"
      edges={["top", "bottom", "left", "right"]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header text="Settings & Activity" />

      {/* menu */}
      <ScrollView className="px-5 pt-6 h-screen-safe">
        {/* account center */}
        <View className=" border-b-[0.5px] border-primary py-2">
          <TouchableOpacity className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-4">
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                }}
                source={
                  "https://images.pexels.com/photos/31776332/pexels-photo-31776332.jpeg"
                }
                contentFit="cover"
              />
              <Text
                className="text-primary text-xl font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Account Center
              </Text>
            </View>

            <Feather name="chevron-right" size={24} color="#767676" />
          </TouchableOpacity>
        </View>

        {/* settings */}
        <View className="border-b-[0.5px] border-primary py-4">
          <TouchableOpacity
            onPress={() => router.push("/profile/Rewards")}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row items-center gap-4">
              <MaterialIcons
                name="workspace-premium"
                size={24}
                color="#612AC3"
              />
              <Text className="text-accent">Rewards</Text>
            </View>

            <Feather name="chevron-right" size={24} color="#767676" />
          </TouchableOpacity>
        </View>

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
        <View className=" border-b-[0.5px] border-primary py-4">
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

        {/* logout */}
        <View className=" border-b-[0.5px] border-primary py-4">
          <TouchableOpacity
            onPress={() => setShowLogoutModal(true)}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row items-center gap-4">
              <MaterialIcons name="logout" size={24} color="#612AC3" />
              <Text className="text-accent">Logout</Text>
            </View>

            <Feather name="chevron-right" size={24} color="#767676" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* logout */}
      <LogoutModal
        visible={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleLogout}
      />
    </SafeAreaView>
  );
};

export default SettingsActivityScreen;
