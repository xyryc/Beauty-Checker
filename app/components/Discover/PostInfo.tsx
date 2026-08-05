import { Post } from "@/types/types";
import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonSecondary from "../Shared/ButtonSecondary";

interface PostInfoProps {
  post: Post;
}

const PostInfo: React.FC<PostInfoProps> = React.memo(({ post }) => {
  const handleBookPress = () => {
    console.log("Book pressed for:", post.username);
    // Handle booking logic here
  };

  const handleUserPress = () => {
    console.log("User profile pressed:", post.username);
    // Navigate to user profile
  };

  return (
    <View className="absolute bottom-32 left-0 right-0 p-3">
      <View className="flex-row items-center justify-between mb-2">
        <TouchableOpacity
          className="flex-row items-center flex-1"
          onPress={handleUserPress}
          activeOpacity={0.8}
        >
          <Image
            source={{ uri: post.userImage }}
            style={{ width: 40, height: 40, borderRadius: 100 }}
            transition={0}
            cachePolicy="memory"
          />
          <Text
            className="text-white text-xl ml-2"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            {post.username}
          </Text>
        </TouchableOpacity>

        <ButtonSecondary
          title="Book"
          onPress={handleBookPress}
          className="px-11"
        />
      </View>

      <Text className="text-white text-[13px] leading-[18px]">
        {post.caption}
        <Text className="text-blue-400"> See More</Text>
      </Text>
    </View>
  );
});

PostInfo.displayName = "PostInfo";

export default PostInfo;
