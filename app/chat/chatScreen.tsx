import SafeScreen from "@/components/SafeScreen";
import { Entypo, Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <SafeScreen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 25}
      >
        <View className="flex-1 px-5 pt-3 pb-2 bg-white">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row gap-2.5 items-center">
              <TouchableOpacity onPress={() => router.back()} className="p-2">
                <FontAwesome6 name="arrow-left" size={24} />
              </TouchableOpacity>
              <View className="flex-row gap-2.5 items-center">
                <Image
                  source="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
                  style={{ height: 40, width: 40, borderRadius: 50 }}
                />
                <Text
                  className="text-2xl font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Motin Mia
                </Text>
              </View>
            </View>
            <TouchableOpacity className="p-2">
              <Entypo name="dots-three-vertical" size={24} />
            </TouchableOpacity>
          </View>

          {/* Messages */}
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end", // ⬅️ This pushes content to the bottom
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* Date */}
            <View className="items-center my-4">
              <View className="flex-row items-center">
                <View className="flex-1 h-px bg-accent" />
                <Text
                  className="mx-3 font-light text-sm text-accent"
                  style={{ fontFamily: "Poppins" }}
                >
                  16 May 2025
                </Text>
                <View className="flex-1 h-px bg-accent" />
              </View>
            </View>

            {/* Received Message */}
            <View className="flex-row mb-2">
              <View className="max-w-[70%] bg-gray-200 px-4 py-2 rounded-full">
                <Text
                  className="text-primary font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Hello
                </Text>
              </View>
            </View>

            {/* Sent Messages */}
            <View className="items-end space-y-2 mb-2">
              <LinearGradient
                colors={["#B78AF7", "#612AC3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  marginBottom: 16,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 9999,
                  maxWidth: "70%",
                }}
              >
                <Text
                  className="text-white font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Hello
                </Text>
              </LinearGradient>

              <LinearGradient
                colors={["#B78AF7", "#612AC3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 9999,
                  maxWidth: "70%",
                }}
              >
                <Text className="text-white" style={{ fontFamily: "Poppins" }}>
                  Some Thing....
                </Text>
              </LinearGradient>
              <Text
                className="text-right text-xs mt-1 text-accent"
                style={{ fontFamily: "Poppins" }}
              >
                Seen
              </Text>
            </View>

            {/* Time */}
            <View className="items-center my-4">
              <View className="flex-row items-center">
                <View className="flex-1 h-px bg-accent" />
                <Text
                  className="mx-3 font-light text-sm text-accent"
                  style={{ fontFamily: "Poppins" }}
                >
                  12.30 AM
                </Text>
                <View className="flex-1 h-px bg-accent" />
              </View>
            </View>

            {/* Received Again */}
            <View className="flex-row mb-2">
              <View className="max-w-[70%] bg-gray-200 px-4 py-2 rounded-full">
                <Text
                  className="text-primary font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Hello
                </Text>
              </View>
            </View>

            {/* Sent Again */}
            <View className="items-end">
              <LinearGradient
                colors={["#B78AF7", "#612AC3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  marginBottom: 16,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 9999,
                  maxWidth: "70%",
                }}
              >
                <Text className="text-white" style={{ fontFamily: "Poppins" }}>
                  Hello
                </Text>
              </LinearGradient>

              <LinearGradient
                colors={["#B78AF7", "#612AC3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 9999,
                  maxWidth: "70%",
                }}
              >
                <Text className="text-white" style={{ fontFamily: "Poppins" }}>
                  Some Thing....
                </Text>
              </LinearGradient>
              <Text
                className="text-right text-xs mt-1 text-accent"
                style={{ fontFamily: "Poppins" }}
              >
                Delivered
              </Text>
            </View>
          </ScrollView>

          {/* Input Bar */}
          <View className="flex-row items-center gap-2 rounded-full py-2 mt-3">
            <TouchableOpacity className="border border-l-purpleAccent p-2.5 rounded-full">
              <Ionicons name="image-outline" size={24} color="#A855F7" />
            </TouchableOpacity>

            <TextInput
              className="flex-1 text-accent border border-purple-300 rounded-[50px] px-6 py-4"
              value={message}
              onChangeText={setMessage}
              placeholder="Write Your Message...."
              placeholderTextColor="#aaa"
              style={{ fontFamily: "Poppins" }}
            />

            <TouchableOpacity
              onPress={() => {
                console.log("Sent:", message);
                setMessage("");
              }}
              style={{ borderRadius: 9999, overflow: "hidden" }}
            >
              <LinearGradient
                colors={["#612AC3", "#B78AF7"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  padding: 12,
                  borderRadius: 9999,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 64,
                  minHeight: 46,
                }}
              >
                <Feather name="send" size={24} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
};

export default ChatScreen;
