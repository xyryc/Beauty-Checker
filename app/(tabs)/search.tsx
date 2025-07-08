import CategoryCard from "@/components/CategoryCard";
import CommonCard from "@/components/CommonCard";
import SafeScreen from "@/components/SafeScreen";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Platform,
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
      company: "Beautiful Heaven",
      service_name: "Makeup Basic",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/3762663/pexels-photo-3762663.jpeg",
      price: 50,
      city: "Dublin, Ireland",
    },
    {
      id: "2",
      company: "Beautiful Heaven",
      service_name: "Makeup Basic",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/8990728/pexels-photo-8990728.jpeg",
      price: 50,
      city: "Dublin, Ireland",
    },
    {
      id: "3",
      company: "Beautiful Heaven",
      service_name: "Makeup Basic",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/8214085/pexels-photo-8214085.jpeg",
      price: 50,
      city: "Dublin, Ireland",
    },
    {
      id: "4",
      company: "Beautiful Heaven",
      service_name: "Makeup Basic",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/8990708/pexels-photo-8990708.jpeg",
      price: 50,
      city: "Dublin, Ireland",
    },
  ];

  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* header */}
      <View
        style={{
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <LinearGradient
          className="overflow-hidden"
          colors={["rgba(97, 42, 195, 0.5)", "#FFFFFF"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
        >
          <View className="px-5">
            {/* name and profile */}
            <View className="py-3 flex-row justify-between items-center">
              <Text
                className="text-xl font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Julian Assange
              </Text>
              <Image
                className="rounded-full"
                source={{
                  uri: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
                }}
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
            </View>

            {/* search bar */}
            <View className="flex-row gap-4 items-center mt-4 mb-3">
              <LinearGradient
                colors={["#B78AF7", "#612AC3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ padding: 10, borderRadius: 8 }}
              >
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={20}
                  color="white"
                />
              </LinearGradient>

              <View
                className="flex-1 flex-row items-center border border-gray-300 rounded-lg px-4 py-2 bg-white"
                style={{
                  height: 40, // Explicit height for consistent size
                }}
              >
                <Image
                  source={require("@/assets/images/search_purple.svg")}
                  style={{ width: 20, height: 20 }}
                  contentFit="cover"
                />
                <TextInput
                  placeholder="Which beauty service you look for?"
                  placeholderTextColor="#888"
                  className="ml-2 flex-1 text-base text-accent"
                  style={{
                    height: 40,
                    paddingVertical: 0,
                    marginTop: Platform.OS === "ios" ? 0 : 16,
                    textAlignVertical: "center",
                    textAlign: "center",
                    fontFamily: "Poppins",
                  }}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
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
              className="pt-4 mb-7 pl-5 flex-row"
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
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </SafeScreen>
  );
};

export default Search;
