import CategoryCard from "@/components/Search/CategoryCard";
import Header from "@/components/Shared/Header";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TopServicesScreen = () => {
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
  ];

  return (
    <SafeAreaView className="bg-white">
      <Header text="Top Services" />

      {/* main content */}
      <FlatList
        className="h-screen"
        data={categories}
        keyExtractor={(category) => category.id.toString()}
        renderItem={({ item }) => <CategoryCard category={item} />}
        numColumns={3}
        columnWrapperStyle={{
          paddingVertical: 10,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
          alignSelf: "center",
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TopServicesScreen;
