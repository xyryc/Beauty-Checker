import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
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

const AddPostScreen = () => {
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([
    "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  ]);
  const router = useRouter();

  // Check permissions when component mounts
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Please enable photo library access in settings"
        );
      }
    })();
  }, []);

  const handleAddImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedImages([...selectedImages, result.assets[0].uri]);
      }
    } catch (error) {
      console.error("Image picker error:", error);
      Alert.alert("Error", "Failed to pick image. Please try again.");
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(newImages);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FEFEFE]">
      <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" />

      {/* Header */}
      <Header text="Add Post" />

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
            placeholder="Mr."
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

        {/* Select Picture Section */}
        <View className="mt-8">
          <Text
            className="text-primary text-xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Select Picture
          </Text>

          <ScrollView
            horizontal
            contentContainerClassName="pt-4"
            showsHorizontalScrollIndicator={false}
            className="flex-row"
          >
            {selectedImages.map((imageUri, index) => (
              <View key={index} className="relative mr-3">
                <Image
                  source={{ uri: imageUri }}
                  style={{
                    width: 74,
                    height: 64,
                    borderRadius: 8,
                  }}
                  contentFit="cover"
                />

                {/* Remove button */}
                <TouchableOpacity
                  onPress={() => handleRemoveImage(index)}
                  className="absolute -top-2 -right-2 bg-[#CE0D0D] rounded-full w-6 h-6 items-center justify-center"
                  activeOpacity={0.8}
                >
                  <Ionicons name="close" size={14} color="white" />
                </TouchableOpacity>
              </View>
            ))}

            {/* Add new image button */}
            <TouchableOpacity
              onPress={handleAddImage}
              className="py-4 px-5 rounded-xl items-center justify-center border border-gray-200"
              activeOpacity={0.7}
            >
              <Ionicons name="add" size={32} color="#767676" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View className="px-4 pb-8 pt-4">
        {/* Publish Button */}
        <ButtonPrimary text="Publish" onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
};

export default AddPostScreen;
