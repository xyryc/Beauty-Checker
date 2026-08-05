import { Post } from "@/types/types";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PostActionsProps {
  post: Post;
  onCommentPress: () => void;
  onSharePress: () => void;
}

const PostActions: React.FC<PostActionsProps> = React.memo(
  ({ post, onCommentPress, onSharePress }) => {
    return (
      <View className="absolute right-3 bottom-1/4 items-center">
        {/* Like */}
        <TouchableOpacity className="items-center mb-4 rounded-[20px] p-2">
          <Ionicons name="heart" size={36} color="white" />
          <Text className="text-white text-[11px] font-semibold mt-0.5">
            {post.likes}
          </Text>
        </TouchableOpacity>

        {/* Comment */}
        <TouchableOpacity
          className="items-center mb-4 rounded-[20px] p-2"
          onPress={onCommentPress}
        >
          <Ionicons name="chatbubble-ellipses" size={32} color="white" />
          <Text className="text-white text-[11px] font-semibold mt-0.5">
            {post.comments}
          </Text>
        </TouchableOpacity>

        {/* Share */}
        <TouchableOpacity
          className="items-center mb-4 rounded-[20px] p-2"
          onPress={onSharePress}
        >
          <FontAwesome name="send" size={28} color="white" />
          <Text className="text-white text-[11px] font-semibold mt-0.5">
            {post.shares}
          </Text>
        </TouchableOpacity>

        {/* Bookmark */}
        <TouchableOpacity className="items-center rounded-[20px] p-2">
          <Ionicons name="bookmark" size={32} color="white" />
          <Text className="text-white text-[11px] font-semibold mt-0.5">
            {post.shares}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
);

PostActions.displayName = "PostActions";

export default PostActions;
