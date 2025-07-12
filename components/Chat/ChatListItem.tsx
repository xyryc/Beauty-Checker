import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ChatListItem = () => {
  return (
    <Link href="/chat/ChatScreen" className="mb-4">
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
  );
};

export default ChatListItem;
