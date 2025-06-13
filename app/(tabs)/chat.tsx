import ChatListItem from "@/components/ChatListItem";
import SafeScreen from "@/components/SafeScreen";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

const Chat = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeScreen>
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
          <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2">
            <Image
              source={require("@/assets/images/search_purple.svg")}
              style={{ width: 24, height: 24 }}
              contentFit="cover"
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

      <ScrollView className="px-5 pt-6 h-full">
        {/* chatlist item */}
        <ChatListItem />

        <ChatListItem />

        <ChatListItem />
      </ScrollView>
    </SafeScreen>
  );
};

export default Chat;
