import CategoryCard from "@/components/CategoryCard";
import CommonCard from "@/components/CommonCard";
import SafeScreen from "@/components/SafeScreen";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Search = () => {
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

  const data = [
    {
      id: "1",
      title: "Service Name....",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/3762663/pexels-photo-3762663.jpeg",
    },
    {
      id: "2",
      title: "Service Name....",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/8990728/pexels-photo-8990728.jpeg",
    },
    {
      id: "3",
      title: "Service Name....",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/8214085/pexels-photo-8214085.jpeg",
    },
    {
      id: "4",
      title: "Service Name....",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/8990708/pexels-photo-8990708.jpeg",
    },
  ];

  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* Header section */}
      <View className="px-5 bg-[#EFE6FD]">
        <View className="py-3 flex-row justify-between items-center">
          <Text
            className="text-xl font-medium"
            style={{ fontFamily: "Poppins" }}
          >
            Julian Assange
          </Text>
          <Image
            className="rounded-full"
            source="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
        </View>

        <View className="flex-row gap-4 items-center mt-4 mb-3">
          <View className="flex-1 flex-row items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <Image
              source={require("@/assets/images/search_purple.svg")}
              style={{ width: 24, height: 24 }}
              contentFit="cover"
            />
            <TextInput
              placeholder="Which beauty service you look for?"
              placeholderTextColor="#888"
              className="ml-2 flex-1 text-base text-accent"
              style={{ fontFamily: "Poppins" }}
            />
          </View>
          <LinearGradient
            colors={["#B78AF7", "#612AC3"]}
            style={{ padding: 8, borderRadius: 8 }}
          >
            <FontAwesome6 name="sliders" size={24} color="#fff" />
          </LinearGradient>
        </View>
      </View>

      <FlatList
        className="bg-white"
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CommonCard location="/search/service-details" item={item} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Top Services Section */}
            <View className="flex-row px-5 justify-between pt-6">
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

            {/* Categories Scroll */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-4 mb-7 pl-5 flex-row"
            >
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </ScrollView>

            {/* Top Providers Heading */}
            <View className="flex-row px-5 justify-between pb-6">
              <Text
                className="text-primary text-2xl"
                style={{ fontFamily: "Poppins" }}
              >
                Top Provider
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
          </>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeScreen>
  );
};

export default Search;
