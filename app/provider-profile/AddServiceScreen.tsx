import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import { Feather, Ionicons } from "@expo/vector-icons";
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
import { Dropdown } from "react-native-element-dropdown";

const AddServiceScreen = () => {
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState([
    "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  ]);
  const [price, setPrice] = useState<number>(0);
  const data = [
    { label: "Haircut", value: "haircut" },
    { label: "Makeup", value: "makeup" },
    { label: "Massage", value: "massage" },
  ];

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
      <Header text="Add Service" />

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* service name */}
        <View className="mt-6">
          <Text
            className="text-primary mb-1.5 text-xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Service Name
          </Text>

          <TextInput
            value={service}
            onChangeText={setService}
            placeholder="Lorem ipsum"
            className="border-[0.5px] border-accent rounded-xl p-4 text-accent"
            style={{
              fontFamily: "Poppins",
            }}
            placeholderTextColor="#767676"
          />
        </View>

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

        {/* select category */}
        <View className="mt-6">
          <Text
            className="text-primary mb-1.5 text-xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Select Category
          </Text>

          <Dropdown
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Choose a category"
            value={category}
            onChange={(item) => setCategory(item.value)}
            style={{
              borderWidth: 0.5,
              borderColor: "#767676",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 14,
            }}
            placeholderStyle={{
              color: "#767676",
              fontFamily: "Poppins",
            }}
            selectedTextStyle={{
              color: "#333333",
              fontFamily: "Poppins",
            }}
            iconStyle={{ width: 24, height: 24 }}
            renderRightIcon={() => (
              <Feather name="chevron-down" size={20} color="#767676" />
            )}
            containerStyle={{
              backgroundColor: "#fff",
            }}
          />
        </View>

        {/* price */}
        <View className="mt-6">
          <Text
            className="text-primary mb-1.5 text-xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Price
          </Text>

          <TextInput
            value={price.toString()}
            onChangeText={(text) => setPrice(Number(text) || 0)}
            className="border-[0.5px] border-accent rounded-xl p-4 text-accent"
            style={{ fontFamily: "Poppins" }}
            placeholderTextColor="#767676"
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

export default AddServiceScreen;
