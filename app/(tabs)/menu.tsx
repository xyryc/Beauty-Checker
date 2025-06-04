import SafeScreen from "@/components/SafeScreen";
import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Menu = () => {
  const router = useRouter();

  return (
    <SafeScreen>
      <View className="px-5 mt-6">
        {/* account */}
        <View>
          <Text
            className="text-2xl font-medium text-primary mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Account
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/menu/profile")}
            className="flex-row items-center justify-between py-2 mb-4"
          >
            <View className="flex-row items-center gap-2">
              <Image
                className="mr-2"
                style={{ width: 40, height: 40, borderRadius: 50 }}
                contentFit="cover"
                source="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              />

              <Text
                className="text-primary text-xl font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Julian Assange
              </Text>
            </View>

            <View className="p-2">
              <FontAwesome6 name="angle-right" size={20} color="#767676" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center gap-4">
              <Feather name="settings" size={24} color="#6200EE" />

              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                Settings
              </Text>
            </View>

            <View className="p-2">
              <FontAwesome6 name="angle-right" size={20} color="#767676" />
            </View>
          </TouchableOpacity>
        </View>

        {/* help and support */}
        <View className="mt-8">
          <Text
            className="text-2xl font-medium text-primary mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Help & Support
          </Text>

          <TouchableOpacity className="flex-row items-center justify-between py-2 mb-4">
            <View className="flex-row items-center gap-4">
              <SimpleLineIcons name="question" size={24} color="#6200EE" />

              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                FAQs
              </Text>
            </View>

            <View className="p-2">
              <FontAwesome6 name="angle-right" size={20} color="#767676" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-2 mb-4">
            <View className="flex-row items-center gap-4">
              <MaterialCommunityIcons
                name="file-lock-outline"
                size={24}
                color="#6200EE"
              />

              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                Privacy Policy
              </Text>
            </View>

            <View className="p-2">
              <FontAwesome6 name="angle-right" size={20} color="#767676" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center gap-4">
              <Feather name="file-text" size={24} color="#6200EE" />

              <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                Terms & Conditions
              </Text>
            </View>

            <View className="p-2">
              <FontAwesome6 name="angle-right" size={20} color="#767676" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeScreen>
  );
};

export default Menu;
