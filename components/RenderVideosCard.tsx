import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

const RenderVideosCard = () => {
  const posts = [
    {
      type: "video",
      url: "https://videos.pexels.com/video-files/7815883/7815883-hd_1080_1920_25fps.mp4",
      username: "Adam",
      userImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      caption: "Enjoying the vibes!",
      time: "2 hours ago",
    },
    {
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
      type: "video",
      url: "https://videos.pexels.com/video-files/7525920/7525920-hd_1080_1920_30fps.mp4",
      username: "David",
      userImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      caption: "Enjoying the vibes!",
      time: "3 hours ago",
    },
    {
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

  return (
    <View className="flex-row flex-wrap items-center justify-start">
      {posts
        .filter((post) => post.type === "video") // Only render video posts
        .map((post, idx) => {
          const player = useVideoPlayer(post.url, (player) => {
            player.loop = true;
            player.pause();
          });

          return (
            <View key={idx} className="mx-[0.5px] my-[0.5px]">
              <TouchableOpacity style={{ width: imageSize, height: imageSize }}>
                <VideoView
                  style={{ width: "100%", height: "100%" }}
                  player={player}
                  contentFit="cover"
                  nativeControls={false}
                />
              </TouchableOpacity>
            </View>
          );
        })}
    </View>
  );
};

export default RenderVideosCard;
