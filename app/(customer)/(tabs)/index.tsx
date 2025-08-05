import posts from "@/assets/data/posts.json";
import CommentModal from "@/components/Discover/CommentModal";
import ImagePost from "@/components/Shared/ImagePost";
import SafeScreen from "@/components/Shared/SafeScreen";
import ShareModal from "@/components/Shared/ShareModal";
import VideoPost from "@/components/Shared/VideoPost";
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
            ? useVideoPlayer(post.url[0], (player) => {
                player.loop = true;
                // player.pause();
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
                    setCommentVisible={setCommentVisible}
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
