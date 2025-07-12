import Header from "@/components/Shared/Header";
import SafeScreen from "@/components/Shared/SafeScreen";
import { Post } from "@/types/types";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
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

const ImagePost = () => {
  const { id } = useLocalSearchParams();
  const posts: Post[] = [
    {
      id: 1,
      type: "video",
      url: [
        "https://videos.pexels.com/video-files/7815883/7815883-hd_1080_1920_25fps.mp4",
      ],
      username: "Adam",
      userImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      caption: "Enjoying the vibes!",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "image",
      url: [
        "https://images.pexels.com/photos/2533038/pexels-photo-2533038.jpeg",
        "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg",
      ],
      username: "Joseph",
      userImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      caption: "Nature is healing 🌿",
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "video",
      url: [
        "https://videos.pexels.com/video-files/7525920/7525920-hd_1080_1920_30fps.mp4",
      ],
      username: "David",
      userImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      caption: "Enjoying the vibes!",
      time: "3 hours ago",
    },
    {
      id: 4,
      type: "image",
      url: [
        "https://images.pexels.com/photos/5125328/pexels-photo-5125328.jpeg",
        "https://images.pexels.com/photos/9218727/pexels-photo-9218727.jpeg",
      ],
      username: "Joseph",
      userImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      caption: "Nature is healing 🌿",
      time: "5 hours ago",
    },
    // Add other posts here
  ];

  // Filter the posts by the id from the URL
  const filteredPost = posts.find((post) => post.id === parseInt(id as string));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [commentVisible, setCommentVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Handle image swipe change
  const handleImageSwipe = (index: number) => {
    setCurrentIndex(index);
  };

  // Render each image in the FlatList
  const renderItem = ({ item }: { item: string }) => (
    <Image
      source={{ uri: item }}
      style={{ width: width, height: (height * 80) / 100 }}
      contentFit="cover"
    />
  );

  if (!filteredPost) {
    return <Text>Post not found</Text>;
  }

  return (
    <SafeScreen>
      <Header text="Photo Post" />

      <View className="relative">
        {/* FlatList for swiping images */}
        <FlatList
          data={filteredPost.url} // Use filteredPost.url here
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
          {filteredPost.url.map((_, index) => (
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
                source={{ uri: filteredPost.userImage }}
                style={{ height: 40, width: 40, borderRadius: 50 }}
                contentFit="cover"
              />
              <Text
                className="text-xl font-medium text-white"
                style={{ fontFamily: "Poppins" }}
              >
                {filteredPost.username}
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
              {filteredPost.caption}
            </Text>
            <Text
              className="text-purpleAccent"
              style={{ fontFamily: "Poppins" }}
            >
              See More
            </Text>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
};

export default ImagePost;
