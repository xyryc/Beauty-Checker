import Header from "@/components/Header";
import SafeScreen from "@/components/SafeScreen";
import ImageSliderAndService from "@/components/Shared/ImageSliderAndService";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BookedDetailsScreen = () => {
  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* Header */}
      <Header text="Service Details" />

      {/* Main Content */}
      <ImageSliderAndService />

      <TouchableOpacity className="rounded-2xl overflow-hidden mx-5 mt-8">
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
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: "#9333ea", // purple
  },
});

export default BookedDetailsScreen;
