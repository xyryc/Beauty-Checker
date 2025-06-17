import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

const RenderPhotosCard = () => {
  const posts = [
    {
      id: 1,
      type: "video",
      url: "https://videos.pexels.com/video-files/7815883/7815883-hd_1080_1920_25fps.mp4",
      username: "Adam",
      userImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      caption: "Enjoying the vibes!",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "image",
      url: "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg",
      username: "Joseph",
      userImage: [
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      ],
      caption: "Nature is healing 🌿",
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "video",
      url: "https://videos.pexels.com/video-files/7525920/7525920-hd_1080_1920_30fps.mp4",
      username: "David",
      userImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      caption: "Enjoying the vibes!",
      time: "3 hours ago",
    },
    {
      id: 4,
      type: "image",
      url: "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg",
      username: "Joseph",
      userImage: [
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      ],
      caption: "Nature is healing 🌿",
      time: "5 hours ago",
    },
    {
      id: 5,
      type: "image",
      url: "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg",
      username: "Joseph",
      userImage: [
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      ],
      caption: "Nature is healing 🌿",
      time: "5 hours ago",
    },
    {
      id: 6,
      type: "image",
      url: "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg",
      username: "Joseph",
      userImage: [
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      ],
      caption: "Nature is healing 🌿",
      time: "5 hours ago",
    },
    {
      id: 7,
      type: "image",
      url: "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg",
      username: "Joseph",
      userImage: [
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      ],
      caption: "Nature is healing 🌿",
      time: "5 hours ago",
    },
  ];

  // Get screen width for responsiveness
  const { width } = Dimensions.get("window");
  const imageSize = width / 3 - 1;

  const router = useRouter();
  console.log(router);

  return (
    <TouchableOpacity className="flex-row flex-wrap items-center justify-start">
      {posts
        .filter((post) => post.type === "image") // Only render image posts
        .map((post) => (
          <View key={post.id} className="relative mx-[0.5px] my-[0.5px]">
            <TouchableOpacity
              onPress={() => router.push(`/search/photo-post/${post.id}`)}
            >
              <Image
                source={{ uri: post.url }}
                style={{ width: imageSize, height: imageSize }}
                className="rounded-lg"
                contentFit="cover"
              />
              {post.userImage.length > 1 && (
                <View className="absolute top-2 right-2  bg-opacity-50 rounded-full p-2">
                  <MaterialIcons name="photo-library" size={18} color="white" />
                </View>
              )}
            </TouchableOpacity>
          </View>
        ))}
    </TouchableOpacity>
  );
};

export default RenderPhotosCard;
