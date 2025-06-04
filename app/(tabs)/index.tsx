import ShareModal from "@/components/ShareModal";
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
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const POST_HEIGHT = 553;

const posts = [
  {
    type: "video",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    username: "anik.dev",
    userImage:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    caption: "Enjoying the vibes!",
    time: "2 hours ago",
  },
  {
    type: "image",
    url: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    username: "puran.exe",
    userImage:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    caption: "Nature is healing 🌿",
    time: "5 hours ago",
  },
];

const Discover = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    setVisible(false);
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView className="flex-1 bg-customBlack">
      <StatusBar style="light" />

      {/* Top Bar */}
      <View className="bg-customBlack px-5 py-2 mb-6 flex-row justify-between">
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View className="flex-row items-center gap-2">
            <FontAwesome6 name="bars" size={20} color="#FEFEFE" />
            <Text className="text-white text-xl font-medium font-poppins">
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
              onPress={() => router.push("/screens/saved")}
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
                  <VideoView
                    style={styles.video}
                    player={player!}
                    contentFit="cover"
                    nativeControls={false}
                  />

                  <View className="absolute bottom-24 right-0 z-10 px-5">
                    {/* Heart */}
                    <View className="items-center p-2.5 mb-2.5">
                      <TouchableOpacity>
                        <Ionicons name="heart" size={32} color="white" />
                      </TouchableOpacity>
                      <Text className="text-xs font-poppins text-white">
                        32
                      </Text>
                    </View>

                    {/* Comment Processing */}
                    <View className="items-center p-2.5 mb-2.5">
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          name="comment-processing"
                          size={32}
                          color="white"
                        />
                      </TouchableOpacity>
                      <Text className="text-xs font-poppins text-white">
                        22
                      </Text>
                    </View>

                    {/* Send */}
                    <View className="items-center p-2.5 mb-2.5">
                      <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <FontAwesome name="send" size={32} color="white" />
                      </TouchableOpacity>
                      <Text className="text-xs font-poppins text-white">8</Text>
                    </View>

                    {/* Bookmark */}
                    <View className="items-center p-2.5 mb-2.5">
                      <TouchableOpacity>
                        <FontAwesome name="bookmark" size={32} color="white" />
                      </TouchableOpacity>
                      <Text className="text-xs font-poppins text-white">6</Text>
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
                        {post.caption}
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
                    style={{ height: "82%", width: "100%" }}
                    contentFit="cover"
                  />

                  <View className="absolute bottom-24 right-0 z-10 px-5">
                    {/* Heart */}
                    <View className="items-center p-2.5 mb-2.5">
                      <TouchableOpacity>
                        <Ionicons name="heart" size={32} color="white" />
                      </TouchableOpacity>
                      <Text className="text-xs font-poppins text-white">
                        32
                      </Text>
                    </View>

                    {/* Comment Processing */}
                    <View className="items-center p-2.5 mb-2.5">
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          name="comment-processing"
                          size={32}
                          color="white"
                        />
                      </TouchableOpacity>
                      <Text className="text-xs font-poppins text-white">
                        22
                      </Text>
                    </View>

                    {/* Send */}
                    <View className="items-center p-2.5 mb-2.5">
                      <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <FontAwesome name="send" size={32} color="white" />
                      </TouchableOpacity>
                      <Text className="text-xs font-poppins text-white">8</Text>
                    </View>

                    {/* Bookmark */}
                    <View className="items-center p-2.5 mb-2.5">
                      <TouchableOpacity>
                        <FontAwesome name="bookmark" size={32} color="white" />
                      </TouchableOpacity>
                      <Text className="text-xs font-poppins text-white">6</Text>
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
                        {post.caption}
                      </Text>
                      <Text className="text-purpleAccent font-poppins">
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
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
});
