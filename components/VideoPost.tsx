import { VideoPostProps } from "@/types/types";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { VideoView } from "expo-video";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VideoPost = ({
  post,
  player,
  commentVisible,
  setCommentVisible,
  modalVisible,
  setModalVisible,
}: VideoPostProps) => {
  return (
    <View>
      <VideoView
        style={styles.video}
        player={player!}
        contentFit="cover"
        nativeControls={false}
      />

      <View className="absolute bottom-28 right-0 z-10 px-5">
        {/* Heart */}
        <View className="items-center p-2.5 mb-2.5">
          <TouchableOpacity>
            <Ionicons name="heart" size={32} color="white" />
          </TouchableOpacity>
          <Text
            className="text-xs text-white"
            style={{ fontFamily: "Poppins" }}
          >
            32
          </Text>
        </View>

        {/* Comment Processing */}
        <View className="items-center p-2.5 mb-2.5">
          <TouchableOpacity onPress={() => setCommentVisible(true)}>
            <MaterialCommunityIcons
              name="comment-processing"
              size={32}
              color="white"
            />
          </TouchableOpacity>
          <Text
            className="text-xs text-white"
            style={{ fontFamily: "Poppins" }}
          >
            22
          </Text>
        </View>

        {/* Send */}
        <View className="items-center p-2.5 mb-2.5">
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FontAwesome name="send" size={32} color="white" />
          </TouchableOpacity>
          <Text
            className="text-xs text-white"
            style={{ fontFamily: "Poppins" }}
          >
            8
          </Text>
        </View>

        {/* Bookmark */}
        <View className="items-center p-2.5 mb-2.5">
          <TouchableOpacity>
            <FontAwesome name="bookmark" size={32} color="white" />
          </TouchableOpacity>
          <Text
            className="text-xs text-white"
            style={{ fontFamily: "Poppins" }}
          >
            6
          </Text>
        </View>
      </View>

      <View className="absolute bottom-5 left-0 right-0 px-5">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-2 items-center">
            <Image
              source={{ uri: post.userImage }}
              style={{ height: 40, width: 40, borderRadius: 50 }}
              contentFit="cover"
            />
            <Text
              className="text-xl font-medium text-white"
              style={{ fontFamily: "Poppins" }}
            >
              {post.username}
            </Text>
          </View>
          <TouchableOpacity className="py-2 px-11 bg-[#ffffff1A] border-white border rounded">
            <Text
              className="font-medium text-white"
              style={{ fontFamily: "Poppins" }}
            >
              Book
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 my-2">
          <Text className="text-white" style={{ fontFamily: "Poppins" }}>
            {post.caption}
          </Text>
          <Text className="text-purpleAccent" style={{ fontFamily: "Poppins" }}>
            See More
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VideoPost;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
});
