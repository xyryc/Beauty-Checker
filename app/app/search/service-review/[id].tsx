import Header from "@/components/Shared/Header";
import ImageSlider from "@/components/Shared/ImageSlider";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ServiceReview = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header text="Reviews" />

      {/* reviews */}
      <ScrollView className="mx-6 py-6" showsVerticalScrollIndicator={false}>
        {/* first review */}
        <View className="pb-8">
          {/* review details */}
          <View className="flex-row justify-between">
            {/* profile */}
            <View className="flex-row gap-4">
              <Image
                source="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
                style={{ width: 40, height: 40, borderRadius: 100 }}
                contentFit="cover"
              />

              <View>
                <Text
                  className="font-medium mb-1 text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Julian Assange
                </Text>

                <View className="flex-row items-center gap-2">
                  <Text
                    className="text-accent"
                    style={{ fontFamily: "Poppins" }}
                  >
                    4.5
                  </Text>

                  <View className="flex-row gap-1">
                    <FontAwesome name="star" size={14} color="#612AC3" />
                    <FontAwesome name="star" size={14} color="#612AC3" />
                    <FontAwesome name="star" size={14} color="#612AC3" />
                    <FontAwesome name="star" size={14} color="#612AC3" />
                    <FontAwesome name="star" size={14} color="#612AC3" />
                  </View>
                </View>
              </View>
            </View>

            <Text
              className="text-accent text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              1 Month Ago
            </Text>
          </View>

          <Text className="text-[##5C5C5C] my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus magnam quasi aperiam cupiditate tempore laboriosam quam
            neque, est labore blanditiis.
          </Text>

          {/* image slider */}
          <ImageSlider />
        </View>

        {/* second review */}
        <View className="pb-8">
          {/* review details */}
          <View className="flex-row justify-between">
            {/* profile */}
            <View className="flex-row gap-4">
              <Image
                source="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
                style={{ width: 40, height: 40, borderRadius: 100 }}
                contentFit="cover"
              />

              <View>
                <Text
                  className="font-medium mb-1 text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Julian Assange
                </Text>

                <View className="flex-row items-center gap-2">
                  <Text
                    className="text-accent"
                    style={{ fontFamily: "Poppins" }}
                  >
                    4.5
                  </Text>

                  <View className="flex-row gap-1">
                    <FontAwesome name="star" size={14} color="#612AC3" />
                    <FontAwesome name="star" size={14} color="#612AC3" />
                    <FontAwesome name="star" size={14} color="#612AC3" />
                    <FontAwesome name="star" size={14} color="#612AC3" />
                    <FontAwesome name="star" size={14} color="#612AC3" />
                  </View>
                </View>
              </View>
            </View>

            <Text
              className="text-accent text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              1 Month Ago
            </Text>
          </View>

          <Text className="text-[##5C5C5C] my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus magnam quasi aperiam cupiditate tempore laboriosam quam
            neque, est labore blanditiis.
          </Text>

          {/* image slider */}
          <ImageSlider />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceReview;
