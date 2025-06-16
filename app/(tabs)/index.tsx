import CommentModal from "@/components/CommentModal";
import SafeScreen from "@/components/SafeScreen";
import ShareModal from "@/components/ShareModal";
import VideoPost from "@/components/VideoPost";
import { Post } from "@/types/types";
import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useVideoPlayer } from "expo-video";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

const POST_HEIGHT = (height * 77) / 100;

const posts: Post[] = [
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
    userImage:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
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
];

const Discover = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const [commentVisible, setCommentVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    setVisible(false);
    navigation.navigate(screen);
  };

  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* Top Bar */}
      <View className="bg-customBlack px-5 py-5 flex-row justify-between">
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View className="flex-row items-center gap-2">
            <FontAwesome6 name="bars" size={20} color="#FEFEFE" />
            <Text
              className="text-white text-xl font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              For You
            </Text>
          </View>
        </TouchableOpacity>
        <FontAwesome6 name="sliders" size={20} color="#FEFEFE" />
      </View>

      {/* For You Modal */}
      <Modal transparent visible={visible} animationType="fade">
        <Pressable className="flex-1" onPress={() => setVisible(false)}>
          <View className="absolute top-16 left-5 w-48 bg-white/60 rounded-2xl p-4 space-y-4">
            {/* For You */}
            <TouchableOpacity className="flex-row items-center space-x-1">
              <View className="p-2.5">
                <Entypo name="video" size={16} color="#9333EA" />
              </View>
              <Text className="text-base font-semibold text-[#9333EA]">
                For You
              </Text>
            </TouchableOpacity>

            {/* Saved */}
            <TouchableOpacity
              className="flex-row items-center space-x-1"
              onPress={() => router.push("/discover/SavedScreen")}
            >
              <View className="p-2.5">
                <FontAwesome name="bookmark" size={16} color="#111" />
              </View>
              <Text className="text-base font-semibold text-black">Saved</Text>
            </TouchableOpacity>

            {/* History */}
            <TouchableOpacity
              className="flex-row items-center space-x-1"
              onPress={() => handleNavigate("history")}
            >
              <View className="p-2.5">
                <FontAwesome6 name="clock-rotate-left" size={16} color="#111" />
              </View>
              <Text className="text-base font-semibold text-black">
                History
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

      {/* Posts */}
      <ScrollView>
        {posts.map((post, index) => {
          const isVideo = post.type === "video";
          const player = isVideo
            ? useVideoPlayer(post.url, (player) => {
                player.loop = true;
                player.play();
              })
            : null;

          return (
            <View
              key={index}
              style={{ height: POST_HEIGHT, width: "100%", overflow: "hidden" }}
            >
              {isVideo ? (
                <>
                  <VideoPost
                    post={post}
                    player={player}
                    commentVisible={commentVisible}
                    setCommentVisible={setCommentVisible}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                </>
              ) : (
                <>
                  <Image
                    source={{ uri: post.url }}
                    style={{ height: "82%", width: "100%" }}
                    contentFit="cover"
                  />

                  <View className="absolute bottom-24 right-0 z-10 px-5">
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

                  <View className="absolute bottom-0 left-0 right-0 px-5">
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
                      <Text
                        className="text-white"
                        style={{ fontFamily: "Poppins" }}
                      >
                        {post.caption}
                      </Text>
                      <Text
                        className="text-purpleAccent"
                        style={{ fontFamily: "Poppins" }}
                      >
                        See More
                      </Text>
                    </View>
                  </View>
                </>
              )}
            </View>
          );
        })}
      </ScrollView>

      <ShareModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <CommentModal
        visible={commentVisible}
        onClose={() => setCommentVisible(false)}
      />
    </SafeScreen>
  );
};

export default Discover;
