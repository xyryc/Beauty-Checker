import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { useVideoPlayer, VideoView } from "expo-video";

import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const videoHeight = Dimensions.get("screen").height;

const Discover = () => {
  const POST_HEIGHT = 753;

  const post = {
    type: "video", // or "image"
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    username: "anik.dev",
    userImage:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creationhill-1681010.jpg&fm=jpg",
    caption: "Enjoying the vibes!",
    time: "2 hours ago",
  };

  const isVideo = post.type === "video";

  // Video player setup
  const player = useVideoPlayer(post.url, (player) => {
    player.loop = true;
    player.play(); // start playback
  });

  return (
    <SafeAreaView className="flex-1 bg-customBlack">
      <StatusBar style="light" backgroundColor="#111111" />

      {/* Top Bar */}
      <View className="bg-customBlack px-5 py-2 mb-6 flex-row justify-between">
        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="bars" size={20} color="#FEFEFE" />
          <Text className="text-white text-xl font-medium font-poppins">
            For You
          </Text>
        </View>
        <FontAwesome6 name="sliders" size={20} color="#FEFEFE" />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Post */}
        <View className="mb-6">
          <View
            className="w-full overflow-hidden relative"
            style={{ height: POST_HEIGHT }}
          >
            {isVideo ? (
              <>
                <VideoView
                  style={styles.video}
                  player={player}
                  contentFit="cover"
                />

                {/* Overlay -> like, comment, share, save */}
                <View className="absolute bottom-24 right-0 z-10 px-5">
                  <View className="items-center p-2.5 mb-2.5">
                    <Ionicons name="heart" size={32} color="white" />
                    <Text className="text-xs font-poppins text-white">32</Text>
                  </View>

                  <View className="items-center p-2.5 mb-2.5">
                    <MaterialCommunityIcons
                      name="comment-processing"
                      size={32}
                      color="white"
                    />
                    <Text className="text-xs font-poppins text-white">22</Text>
                  </View>

                  <View className="items-center p-2.5 mb-2.5">
                    <FontAwesome name="send" size={32} color="white" />
                    <Text className="text-xs font-poppins text-white">18</Text>
                  </View>

                  <View className="items-center p-2.5 mb-2.5">
                    <FontAwesome name="bookmark" size={32} color="white" />
                    <Text className="text-xs font-poppins text-white">6</Text>
                  </View>
                </View>

                {/* Overlay on video */}
                <View className="absolute bottom-0 left-0 right-0 px-5">
                  <View className="flex-row justify-between items-center">
                    <View className="flex-row gap-2 items-center">
                      <Image
                        source={{ uri: post.userImage }}
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                        contentFit="cover"
                      />
                      <Text className="text-xl font-medium font-poppins text-white">
                        {post.username}
                      </Text>
                    </View>

                    <TouchableOpacity className="py-2 px-11 bg-[#ffffff1A] border-white border rounded">
                      <Text className="font-medium font-poppins text-white">
                        Book
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View className="flex-row gap-2 my-2">
                    <Text className="text-white font-poppins">
                      Lorem ipsum dolor sit, ipsum dolor sit amet.
                    </Text>
                    <Text className="text-purpleAccent font-poppins">
                      See More
                    </Text>
                  </View>
                </View>
              </>
            ) : (
              <>
                <Image
                  source={{ uri: post.url }}
                  className="w-full h-full"
                  style={{ height: "100%" }}
                  contentFit="cover"
                />
                {/* Overlay for image */}
                <View className="absolute bottom-0 left-0 right-0 p-4 bg-white/80">
                  <View>
                    <Image
                      source={{ uri: post.url }}
                      style={{ height: 40, width: 40 }}
                      contentFit="cover"
                    />
                    <Text className="text-xl font-medium font-poppins">
                      {post.username}
                    </Text>
                  </View>
                  <Text>{post.caption}</Text>
                  <Text className="text-gray-500 text-xs">{post.time}</Text>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View className="absolute bottom-0 w-full bg-customBlack py-4 px-5" />
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: videoHeight,
  },
});
