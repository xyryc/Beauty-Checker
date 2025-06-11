import ChatListItem from "@/components/ChatListItem";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="flex-1">
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
              source={require("@/assets/images/search.svg")}
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
        {/* chatlist item */}
        <ChatListItem />

        <ChatListItem />

        <ChatListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
