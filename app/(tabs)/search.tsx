import CommonCard from "@/components/CommonCard";
import SafeScreen from "@/components/SafeScreen";
import TopServices from "@/components/TopServices";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Search = () => {
  const [toggle, setToggle] = useState(true);

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
            <View className="flex-row justify-start gap-4 mt-4 mb-3">
              {/* toggle button */}
              <TouchableOpacity
                onPress={() => {
                  setToggle(!toggle);
                }}
              >
                {toggle ? (
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
                ) : (
                  <LinearGradient
                    colors={["#B78AF7", "#612AC3"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ padding: 10, borderRadius: 8 }}
                  >
                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={20}
                      color="white"
                    />
                  </LinearGradient>
                )}
              </TouchableOpacity>

              {/* search bar */}
              {toggle ? (
                <View className="w-[85%] flex-row items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
                  <Image
                    source={require("@/assets/images/search_purple.svg")}
                    style={{ width: 20, height: 20 }}
                    contentFit="cover"
                  />

                  <TextInput
                    placeholder="Which beauty service you look for?"
                    placeholderTextColor="#888"
                    className="ml-2 text-base text-accent"
                    style={{
                      paddingVertical: 0,
                      marginTop: 0,
                      textAlignVertical: "center",
                      fontFamily: "Poppins",
                    }}
                  />
                </View>
              ) : (
                <View className="w-[85%]">
                  {/* searchbar */}
                  <View className="flex-row w-full items-center border border-gray-300 rounded-lg px-4 py-2 mb-2 bg-white">
                    <Image
                      source={require("@/assets/images/search_purple.svg")}
                      style={{ width: 20, height: 20 }}
                      contentFit="cover"
                    />

                    <TextInput
                      placeholder="What are you looking for?"
                      placeholderTextColor="#888"
                      className="ml-2 text-base text-accent"
                      style={{
                        paddingVertical: 0,
                        marginTop: 0,
                        textAlignVertical: "center",
                        fontFamily: "Poppins",
                      }}
                    />
                  </View>

                  {/* price search */}
                  <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 mb-2 bg-white">
                    <Image
                      source={require("@/assets/images/search_purple.svg")}
                      style={{ width: 20, height: 20 }}
                      contentFit="cover"
                    />

                    <TextInput
                      keyboardType="numeric"
                      placeholder="Price"
                      placeholderTextColor="#888"
                      className="ml-2 text-base text-accent"
                      style={{
                        paddingVertical: 0,
                        marginTop: 0,
                        textAlignVertical: "center",
                        fontFamily: "Poppins",
                      }}
                    />
                  </View>

                  {/* location search */}
                  <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
                    <Image
                      source={require("@/assets/images/search_purple.svg")}
                      style={{ width: 20, height: 20 }}
                      contentFit="cover"
                    />

                    <TextInput
                      placeholder="Location"
                      placeholderTextColor="#888"
                      className="ml-2 text-base text-accent"
                      style={{
                        paddingVertical: 0,
                        marginTop: 0,
                        textAlignVertical: "center",
                        fontFamily: "Poppins",
                      }}
                    />
                  </View>
                </View>
              )}
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
            {/* top services */}
            <View className="mt-6 px-5">
              <TopServices />
            </View>

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
