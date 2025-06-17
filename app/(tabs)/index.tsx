import ImagePost from "@/app/discover/ImagePost";
import VideoPost from "@/app/discover/VideoPost";
import CommentModal from "@/components/CommentModal";
import SafeScreen from "@/components/SafeScreen";
import ShareModal from "@/components/ShareModal";
import { Post } from "@/types/types";
import { Entypo, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
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
                  <ImagePost
                    post={post}
                    player={player}
                    commentVisible={commentVisible}
                    setCommentVisible={setCommentVisible}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
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
