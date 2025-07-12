import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CategoryCard from "./CategoryCard";

const TopServices = () => {
  const categories = [
    {
      id: 1,
      service_name: "Hair Saloon",
      img_url: require("@/assets/images/hair_saloon.png"),
    },
    {
      id: 2,
      service_name: "Nail Saloon",
      img_url: require("@/assets/images/nail_saloon.png"),
    },
    {
      id: 3,
      service_name: "Makeup Artist",
      img_url: require("@/assets/images/makeup.png"),
    },
    {
      id: 4,
      service_name: "Skincare",
      img_url: require("@/assets/images/skincare.png"),
    },
    {
      id: 5,
      service_name: "Skincare",
      img_url: require("@/assets/images/skincare.png"),
    },
  ];

  return (
    <View>
      <View className="flex-row justify-between">
        <Text
          className="text-primary text-2xl"
          style={{ fontFamily: "Poppins" }}
        >
          Top Services
        </Text>
        <TouchableOpacity className="flex-row gap-1.5 items-center">
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
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4 mb-7 flex-row"
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TopServices;
