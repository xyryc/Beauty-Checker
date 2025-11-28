import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import ButtonSmallOutline from "@/components/Shared/ButtonSmallOutline";
import Header from "@/components/Shared/Header";
import SubscriptionModal from "@/components/Shared/SubscriptionModal";
import {
  checkVideoUploadQuota,
  VIDEO_CONFIG,
} from "@/services/videoUploadService";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import * as VideoThumbnails from "expo-video-thumbnails";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddVideoScreen = () => {
  const [description, setDescription] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const router = useRouter();

  // Mock user data (should come from backend/storage)
  const [totalVideosUploaded, setTotalVideosUploaded] = useState(5); // Example: 4 videos uploaded
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Animation for upload button
  const scaleAnim = useState(new Animated.Value(1))[0];

  const quota = checkVideoUploadQuota(totalVideosUploaded, isSubscribed);

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

  // Pulse animation for add video button
  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.05,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, []);

  const handleAddVideo = async () => {
    // Check quota before allowing upload
    if (!quota.canUpload) {
      setShowSubscriptionModal(true);
      return;
    }

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

        try {
          const { uri } = await VideoThumbnails.getThumbnailAsync(videoUri, {
            time: 5000,
          });
          setSelectedVideo(videoUri);
          setThumbnail(uri);
        } catch (thumbnailError) {
          console.error("Thumbnail generation failed:", thumbnailError);
          setSelectedVideo(videoUri);
          setThumbnail(null);
        }
      }
    } catch (error) {
      console.error("Video picker error:", error);
      Alert.alert("Error", "Failed to pick video. Please try again.");
    }
  };

  const handleRemoveVideo = () => {
    setSelectedVideo(null);
    setThumbnail(null);
  };

  const handlePublish = () => {
    if (!selectedVideo) {
      Alert.alert("Error", "Please select a video first");
      return;
    }

    if (!description.trim()) {
      Alert.alert("Error", "Please add a description");
      return;
    }

    // TODO: API call to upload video
    console.log("Publishing video:", { video: selectedVideo, description });

    // Increment video count (in production, this comes from backend)
    setTotalVideosUploaded(totalVideosUploaded + 1);

    Alert.alert("Success", "Video published successfully!", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  const handleSubscribe = () => {
    // TODO: Navigate to subscription/payment screen
    console.log("Navigate to subscription");
    setShowSubscriptionModal(false);
    // router.push("/subscription");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FEFEFE]">
      <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" />

      <Header text="Add Video Post" />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          {/* Upload Quota Banner */}
          {/* {!isSubscribed && (
          <View className="mt-4 mb-2">
            <LinearGradient
              colors={
                quota.remainingFreeUploads > 0
                  ? ["#10B981", "#059669"]
                  : ["#EF4444", "#DC2626"]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 12,
                padding: 12,
              }}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text
                    className="text-white font-medium text-sm"
                    style={{ fontFamily: "Poppins-Medium" }}
                  >
                    {quota.remainingFreeUploads > 0
                      ? `${quota.remainingFreeUploads} free upload${
                          quota.remainingFreeUploads === 1 ? "" : "s"
                        } remaining`
                      : "Free uploads exhausted"}
                  </Text>
                  <Text
                    className="text-white/80 text-xs mt-0.5"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {quota.remainingFreeUploads > 0
                      ? "Upgrade for unlimited uploads"
                      : "Subscribe to continue uploading"}
                  </Text>
                </View>
                {quota.remainingFreeUploads === 0 && (
                  <TouchableOpacity
                    onPress={() => setShowSubscriptionModal(true)}
                    className="bg-white px-4 py-2 rounded-full"
                  >
                    <Text
                      className="text-red-600 text-xs font-medium"
                      style={{ fontFamily: "Poppins-Medium" }}
                    >
                      Upgrade
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </LinearGradient>
          </View>
        )} */}

          {/* Video Selection Section - More Engaging */}
          <View className="mt-6">
            <View className="flex-row items-center justify-between mb-3">
              <Text
                className="text-primary text-xl"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Upload Video
              </Text>
              {selectedVideo && (
                <View className="flex-row items-center bg-green-100 px-3 py-1 rounded-full">
                  <Ionicons name="checkmark-circle" size={16} color="#10B981" />
                  <Text
                    className="text-green-700 text-xs ml-1"
                    style={{ fontFamily: "Poppins-Medium" }}
                  >
                    Ready
                  </Text>
                </View>
              )}
            </View>

            <View className="pt-2">
              {selectedVideo ? (
                <View className="relative">
                  {/* Video Preview */}
                  <View className="rounded-2xl overflow-hidden">
                    {thumbnail ? (
                      <Image
                        source={{ uri: thumbnail }}
                        style={{
                          width: "100%",
                          height: 240,
                        }}
                        contentFit="cover"
                        transition={300}
                      />
                    ) : (
                      <View
                        style={{
                          width: "100%",
                          height: 240,
                          backgroundColor: "#111",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons name="film" size={48} color="white" />
                      </View>
                    )}

                    {/* Play overlay with gradient */}
                    <LinearGradient
                      colors={["transparent", "rgba(0,0,0,0.7)"]}
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View className="items-center">
                        <Ionicons name="play-circle" size={56} color="white" />
                        <Text
                          className="text-white text-xs mt-2"
                          style={{ fontFamily: "Poppins-Medium" }}
                        >
                          Preview
                        </Text>
                      </View>
                    </LinearGradient>
                  </View>

                  {/* Remove button */}
                  <TouchableOpacity
                    onPress={handleRemoveVideo}
                    className="absolute -top-2 -right-2 bg-red-500 rounded-full w-8 h-8 items-center justify-center"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                    activeOpacity={0.8}
                  >
                    <Ionicons name="close" size={18} color="white" />
                  </TouchableOpacity>

                  {/* Change video button */}
                  <ButtonSmallOutline
                    className="mt-4"
                    text="Change Video"
                    onPress={handleAddVideo}
                    icon={<Ionicons name="repeat" size={24} color="#9654F4" />}
                  />
                </View>
              ) : (
                // Enhanced Add Video Button
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                  <TouchableOpacity
                    onPress={handleAddVideo}
                    className="rounded-2xl items-center justify-center overflow-hidden"
                    style={{ height: 240 }}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={["#F3E8FF", "#E9D5FF"]}
                      style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 2,
                        borderColor: "#D8B4FE",
                        borderStyle: "dashed",
                        borderRadius: 16,
                      }}
                    >
                      <View className="items-center">
                        <View className="bg-primary/10 rounded-full p-6 mb-4">
                          <Ionicons name="videocam" size={48} color="#612AC3" />
                        </View>
                        <Text
                          className="text-primary text-lg font-medium"
                          style={{ fontFamily: "Poppins-Medium" }}
                        >
                          Tap to Select Video
                        </Text>
                        <Text
                          className="text-accent text-sm mt-2"
                          style={{ fontFamily: "Poppins" }}
                        >
                          Max {VIDEO_CONFIG.MAX_VIDEO_DURATION}s, under{" "}
                          {VIDEO_CONFIG.MAX_VIDEO_SIZE}MB
                        </Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </Animated.View>
              )}
            </View>
          </View>

          {/* Description Section */}
          <View className="mt-8">
            <Text
              className="text-primary mb-2 text-xl"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Description
            </Text>

            <View className="relative">
              <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Tell your audience about this video..."
                multiline
                numberOfLines={6}
                className="border-2 border-gray-200 rounded-xl p-4 text-primary"
                style={{
                  fontFamily: "Poppins",
                  textAlignVertical: "top",
                  minHeight: 120,
                }}
                placeholderTextColor="#9CA3AF"
              />
              <View className="absolute bottom-3 right-3">
                <Text
                  className="text-accent text-xs"
                  style={{ fontFamily: "Poppins" }}
                >
                  {description.length}/500
                </Text>
              </View>
            </View>
          </View>

          {/* Tips Section */}
          <View className="mt-6 mb-8 bg-blue-50 rounded-xl p-4 border border-blue-200">
            <View className="flex-row items-center mb-2">
              <Ionicons name="bulb" size={20} color="#3B82F6" />
              <Text
                className="text-blue-800 font-medium ml-2"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Pro Tips
              </Text>
            </View>
            <Text
              className="text-blue-700 text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              • Keep videos under 60 seconds{"\n"}• Show your best work{"\n"}•
              Add engaging descriptions{"\n"}• Use good lighting
            </Text>
          </View>
        </ScrollView>

        {/* Bottom Section */}
        <View className="px-4 py-2 border-t border-gray-100">
          <ButtonPrimary text="Publish Video" onPress={handlePublish} />
        </View>

        {/* Subscription Modal */}
        <SubscriptionModal
          showSubscriptionModal={showSubscriptionModal}
          setShowSubscriptionModal={setShowSubscriptionModal}
          handleSubscribe={handleSubscribe}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddVideoScreen;
