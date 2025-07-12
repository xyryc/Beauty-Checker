import { PostProps } from "@/types/types";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Get screen width for responsive layout
const { width, height } = Dimensions.get("window");

const ImagePost = ({ post, setCommentVisible, setModalVisible }: PostProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle image swipe change
  const handleImageSwipe = (index: number) => {
    setCurrentIndex(index);
  };

  // Render each image in the FlatList
  const renderItem = ({ item }: { item: string }) => (
    <Image
      source={{ uri: item }}
      style={{ width: width, height: height }}
      contentFit="cover"
    />
  );

  return (
    <View className="relative">
      {/* FlatList for swiping images */}
      <FlatList
        data={post.url} // `post.url` should be an array of image URLs
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const currentPage = Math.floor(
            contentOffsetX / e.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(currentPage);
        }}
      />

      {/* Image Indicator */}
      <View className="absolute bottom-5 left-0 right-0 flex-row justify-center items-center">
        {post.url.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </View>

      {/* Post Action Bar */}
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

export default ImagePost;
