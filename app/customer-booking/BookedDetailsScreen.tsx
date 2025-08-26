import ButtonSmall from "@/components/Shared/ButtonSmall";
import ButtonSmallOutline from "@/components/Shared/ButtonSmallOutline";
import Header from "@/components/Shared/Header";
import ImageSliderAndService from "@/components/Shared/ImageSliderAndService";
import SafeScreen from "@/components/Shared/SafeScreen";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BookedDetailsScreen = () => {
  const { status, item: itemString } = useLocalSearchParams();

  // Parse the item back to object
  const item = itemString ? JSON.parse(itemString as string) : null;

  console.log("BookedDetailsScreen rendered", status, item);

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  // Handle star rating
  const handleStarPress = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  // Handle review submission
  const handleSubmitReview = () => {
    if (rating === 0) {
      Alert.alert("Rating Required", "Please select a star rating");
      return;
    }

    if (reviewText.trim().length < 10) {
      Alert.alert(
        "Review Required",
        "Please write at least 10 characters for your review"
      );
      return;
    }

    // Here you would typically send the review to your API
    console.log("Submitting review:", {
      itemId: item?.id,
      serviceName: item?.service_name,
      company: item?.company,
      rating,
      review: reviewText.trim(),
    });

    Alert.alert("Review Submitted", "Thank you for your feedback!", [
      {
        text: "OK",
        onPress: () => {
          setModalVisible(false);
          setRating(0);
          setReviewText("");
        },
      },
    ]);
  };

  const renderStars = () => {
    return (
      <View className="flex-row justify-center my-4">
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleStarPress(index)}
            className="mx-1"
          >
            <AntDesign
              name={index < rating ? "star" : "staro"}
              size={32}
              color={index < rating ? "#FFD700" : "#D1D5DB"}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* Header */}
      <Header text="Service Details" />

      {/* Main Content */}
      <ImageSliderAndService />

      {status === "completed" && (
        <TouchableOpacity
          className="rounded-2xl overflow-hidden mx-5 mt-8"
          onPress={() => setModalVisible(true)}
        >
          <LinearGradient
            colors={["#B78AF7", "#612AC3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="rounded-2xl flex-row items-center justify-center"
          >
            <Text
              className="text-white py-[14.5px] text-lg font-medium text-center"
              style={{ fontFamily: "Poppins" }}
            >
              Give A Review
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )}

      {/* Review Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          className="flex-1 justify-center items-center bg-black/50"
          onPress={() => setModalVisible(false)}
        >
          <Pressable
            className="bg-white m-5 rounded-2xl p-6 w-[90%] max-h-[80%]"
            onPress={() => {}} // Prevent modal close when tapping inside
          >
            {/* Modal Header */}
            <View className="flex-row justify-between items-center mb-4">
              <Text
                className="text-xl font-semibold text-gray-800"
                style={{ fontFamily: "Poppins" }}
              >
                Write a Review
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="p-2"
              >
                <AntDesign name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            {/* Service Info */}
            {item && (
              <View className="mb-4 p-3 bg-gray-50 rounded-lg">
                <Text
                  className="text-base font-medium text-gray-800"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.service_name}
                </Text>
                <Text
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.company} • {item.city}
                </Text>
              </View>
            )}

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Rating Section */}
              <View className="items-center mb-6">
                <Text
                  className="text-base text-gray-600 mb-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  How was your experience?
                </Text>
                {renderStars()}
                <Text
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "Poppins" }}
                >
                  Tap to rate
                </Text>
              </View>

              {/* Review Text Section */}
              <View className="mb-6">
                <Text
                  className="text-base font-medium text-gray-800 mb-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  Write your review
                </Text>
                <TextInput
                  multiline
                  numberOfLines={4}
                  placeholder="Share your experience with this service..."
                  value={reviewText}
                  onChangeText={setReviewText}
                  className="border border-gray-300 rounded-lg p-3 text-base min-h-[100px]"
                  style={{
                    fontFamily: "Poppins",
                    textAlignVertical: "top",
                  }}
                  maxLength={500}
                />
                <Text className="text-xs text-gray-400 mt-1 text-right">
                  {reviewText.length}/500
                </Text>
              </View>

              {/* Action Buttons */}
              <View className="flex-row items-center gap-3">
                <ButtonSmallOutline
                  text="Cancel"
                  onPress={() => setModalVisible(false)}
                />

                <ButtonSmall
                  text="Submit Review"
                  onPress={handleSubmitReview}
                />
              </View>
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeScreen>
  );
};

export default BookedDetailsScreen;
