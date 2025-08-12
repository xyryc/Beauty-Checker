import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import * as VideoThumbnails from "expo-video-thumbnails";
import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddVideoScreen = () => {
  const [description, setDescription] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const router = useRouter();
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  // Check permissions when component mounts
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Please enable video library access in settings"
        );
      }
    })();
  }, []);

  const handleAddVideo = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
        allowsMultipleSelection: false,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const videoUri = result.assets[0].uri;

        // Generate thumbnail from video
        try {
          const { uri } = await VideoThumbnails.getThumbnailAsync(videoUri, {
            time: 5000, // Get frame at 5 seconds (or first frame if video is shorter)
          });

          setSelectedVideo(videoUri);
          setThumbnail(uri); // Store the generated thumbnail
        } catch (thumbnailError) {
          console.error("Thumbnail generation failed:", thumbnailError);
          // Fallback: still set video but show generic icon or black screen
          setSelectedVideo(videoUri);
          setThumbnail(null); // Use fallback UI
        }
      }
    } catch (error) {
      console.error("Video picker error:", error);
      Alert.alert("Error", "Failed to pick video. Please try again.");
    }
  };

  const handleRemoveVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FEFEFE]">
      <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" />

      {/* Header */}
      <Header text="Add Video Post" />

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Description Section */}
        <View className="mt-6">
          <Text
            className="text-primary mb-1.5 text-xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Description
          </Text>

          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Add a description..."
            multiline
            numberOfLines={6}
            className="border-[0.5px] border-accent rounded-xl p-4 text-accent"
            style={{
              fontFamily: "Poppins",
              textAlignVertical: "top",
              minHeight: 120,
            }}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Video Selection Section */}
        <View className="mt-8">
          <Text
            className="text-primary text-xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Select Video
          </Text>

          <View className="pt-4">
            {selectedVideo ? (
              <View className="relative">
                {thumbnail ? (
                  <Image
                    source={{ uri: thumbnail }}
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 8,
                    }}
                    contentFit="cover"
                    transition={300}
                  />
                ) : (
                  <View
                    style={{
                      width: "100%",
                      height: 200,
                      backgroundColor: "#111",
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="film" size={48} color="white" />
                  </View>
                )}
                {/* Video indicator overlay */}
                <View className="absolute inset-0 items-center justify-center">
                  <Ionicons
                    name="play-circle"
                    size={48}
                    color="rgba(255,255,255,0.7)"
                  />
                </View>

                {/* Remove button */}
                <TouchableOpacity
                  onPress={handleRemoveVideo}
                  className="absolute -top-2 -right-2 bg-[#CE0D0D] rounded-full w-6 h-6 items-center justify-center"
                  activeOpacity={0.8}
                >
                  <Ionicons name="close" size={14} color="white" />
                </TouchableOpacity>
              </View>
            ) : (
              // Add Video Button (unchanged)
              <TouchableOpacity
                onPress={handleAddVideo}
                className="border border-gray-200 rounded-xl items-center justify-center"
                style={{ height: 200 }}
                activeOpacity={0.7}
              >
                <View className="items-center">
                  <Ionicons name="videocam" size={48} color="#767676" />
                  <Text className="text-gray-500 mt-2">Add Video</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View className="px-4 pb-8 pt-4">
        <ButtonPrimary
          text="Publish"
          onPress={() => {
            if (!selectedVideo) {
              Alert.alert("Error", "Please select a video first");
              return;
            }
            router.back();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddVideoScreen;
