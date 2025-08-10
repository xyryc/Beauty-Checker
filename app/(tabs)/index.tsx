import posts from "@/assets/data/posts.json";
import CommentModal from "@/components/Discover/CommentModal";
import ImagePost from "@/components/Shared/ImagePost";
import ShareModal from "@/components/Shared/ShareModal";
import VideoPost from "@/components/Shared/VideoPost";
import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { useVideoPlayer } from "expo-video";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const POST_HEIGHT = (height * 77) / 100;

const Discover = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const [commentVisible, setCommentVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleNavigate = (screen: string) => {
    setVisible(false);
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView
      className="bg-[#000000]"
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle="default" backgroundColor="#000000" />

      {/* Top Bar */}
      <View className="bg-[#000000] px-5 py-5 flex-row justify-between">
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View className="flex-row items-center gap-2">
            <FontAwesome6 name="bars" size={24} color="white" />
            <Text
              className="text-white text-xl font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              For You
            </Text>
          </View>
        </TouchableOpacity>

        <MaterialCommunityIcons
          name="bell-badge-outline"
          size={24}
          color="white"
        />
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
    </SafeAreaView>
  );
};

export default Discover;
