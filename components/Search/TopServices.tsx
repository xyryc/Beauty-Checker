import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CategoryCard from "./CategoryCard";

const TopServices = () => {
  const categories = [
    {
      id: 1,
      service_name: "Hair Styling",
      img_url:
        "https://images.pexels.com/photos/3993137/pexels-photo-3993137.jpeg",
    },
    {
      id: 2,
      service_name: "Face & Skin Care",
      img_url:
        "https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg",
    },
    {
      id: 3,
      service_name: "Hair Removal",
      img_url:
        "https://images.pexels.com/photos/5177995/pexels-photo-5177995.jpeg",
    },
    {
      id: 4,
      service_name: "Body Care",
      img_url:
        "https://images.pexels.com/photos/6810843/pexels-photo-6810843.jpeg",
    },
    {
      id: 5,
      service_name: "Massages",
      img_url:
        "https://images.pexels.com/photos/5659019/pexels-photo-5659019.jpeg",
    },
    {
      id: 6,
      service_name: "Makeup Services",
      img_url:
        "https://images.pexels.com/photos/7514876/pexels-photo-7514876.jpeg",
    },
    {
      id: 7,
      service_name: "Nail Care",
      img_url:
        "https://images.pexels.com/photos/17471377/pexels-photo-17471377.jpeg",
    },
    {
      id: 8,
      service_name: "Eyelashes & Eyebrows",
      img_url:
        "https://images.pexels.com/photos/3762663/pexels-photo-3762663.jpeg",
    },
    {
      id: 9,
      service_name: "Medical Aesthetics",
      img_url:
        "https://images.pexels.com/photos/4586713/pexels-photo-4586713.jpeg",
    },
    {
      id: 10,
      service_name: "Hair Loss Treatment",
      img_url:
        "https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg",
    },
    {
      id: 11,
      service_name: "Dental Aesthetics",
      img_url:
        "https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg",
    },
    {
      id: 12,
      service_name: "Training & Further Education",
      img_url:
        "https://images.pexels.com/photos/6953622/pexels-photo-6953622.jpeg",
    },
  ];
  const router = useRouter();

  return (
    <View>
      <View className="flex-row justify-between">
        <Text
          className="text-primary text-2xl"
          style={{ fontFamily: "Poppins" }}
        >
          Top Services
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/search/top-services/[id]")}
          className="flex-row gap-1.5 items-center"
        >
          <Text
            className="text-sm font-medium text-accent"
            style={{ fontFamily: "Poppins" }}
          >
            See All
          </Text>
          <FontAwesome
            name="angle-right"
            size={16}
            color="#767676"
            style={{ padding: 4 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="pt-4 mb-7 flex-row"
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TopServices;
