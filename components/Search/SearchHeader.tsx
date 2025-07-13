import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const SearchHeader = () => {
  const [toggle, setToggle] = useState(true);

  return (
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
                  placeholder="Which beauty service do you need?"
                  className="ml-2 text-accent placeholder:text-sm sm:placeholder:text-sm"
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
                    className="ml-2 text-accent"
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
                    source={require("@/assets/images/price.svg")}
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
                    source={require("@/assets/images/location2.svg")}
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
  );
};

export default SearchHeader;
