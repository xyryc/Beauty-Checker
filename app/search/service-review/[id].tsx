import Header from "@/components/Shared/Header";
import ImageSlider from "@/components/Shared/ImageSlider";
import SafeScreen from "@/components/Shared/SafeScreen";
import { Image } from "expo-image";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const ServiceReview = () => {
  return (
    <SafeScreen>
      <Header text="Reviews" />

      {/* reviews */}
      <ScrollView className="mx-6 py-6 ">
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
                <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                  4.5
                </Text>
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
                <Text className="text-accent" style={{ fontFamily: "Poppins" }}>
                  4.5
                </Text>
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
    </SafeScreen>
  );
};

export default ServiceReview;
