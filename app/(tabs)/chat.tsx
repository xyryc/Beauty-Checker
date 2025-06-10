import { Image } from "expo-image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="px-5 bg-white py-3">
        {/* title and search */}
        <View>
          <Text
            className="font-medium text-xl py-2.5 mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Inbox
          </Text>

          {/* search bar */}
          <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <Image
              source={require("@/assets/images/search.png")}
              style={{ width: 24, height: 24 }}
            />

            {/* Purple icon */}
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholderTextColor="#888"
              className="ml-2 flex-1 text-base text-black"
              style={{ fontFamily: "Poppins" }}
            />
          </View>
        </View>
      </View>

      <ScrollView className="px-5 mt-6">
        {/* chatlist */}
        <Link href="/chat/ChatScreen">
          <View className="w-full flex-row gap-3 items-center border-b border-primary pb-2 mb-4">
            <Image
              className="rounded-full"
              source="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
              style={{ width: 62, height: 62, borderRadius: 50 }}
            />

            <View>
              <Text
                className="text-xl font-medium mb-1"
                style={{ fontFamily: "Poppins" }}
              >
                Alex Jones
              </Text>

              <Text
                className="text-sm font-medium text-accent"
                style={{ fontFamily: "Poppins" }}
              >
                Hey, How are you doing?
              </Text>
            </View>
          </View>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
