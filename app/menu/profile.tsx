import { Octicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import React from "react";
import {
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Profile = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const offset =
    Platform.OS === "android" ? -(StatusBar.currentHeight || 24) : -44;

  return (
    <View style={{ marginTop: offset }}>
      {/* profile section top */}
      <View style={{ position: "relative", width: "100%", height: 248 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source="https://thevendry.com/cdn-cgi/image/height=1920,width=1920,fit=contain,metadata=none/https%3A%2F%2Fs3.amazonaws.com%2Fuploads.thevendry.co%2F23052%2F1661181797046_HairMakeUp_08_IMG_7090_1_2_A.jpg"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />

        <Image
          style={{
            width: 150,
            height: 150,
            position: "absolute",
            bottom: -45,
            left: "25%",
            transform: [{ translateX: -75 }],
            borderRadius: 75,
            borderWidth: 2,
            borderColor: "#767676",
          }}
          source="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </View>

      {/* profile name, stats, bio */}
      <View className="pt-16 px-5">
        <Text
          className="text-primary font-medium text-2xl"
          style={{ fontFamily: "Poppins" }}
        >
          Julian Assange
        </Text>

        <View className="flex flex-row items-center gap-2 my-2">
          <Octicons name="people" size={20} color="#333333" />
          <View>
            <Text className="text-primary" style={{ fontFamily: "Poppins" }}>
              15k Followers
            </Text>
          </View>
        </View>

        {/* Edit profile */}
        <TouchableOpacity className="rounded-2xl overflow-hidden mb-2">
          <LinearGradient
            colors={["#B78AF7", "#612AC3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="rounded-2xl"
          >
            <View className="flex-row items-center justify-center gap-2 py-2">
              <Octicons name="pencil" size={20} color="#ffffff" />
              <Text
                className="text-white font-medium text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Edit Profile
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* bio */}
        <View className="mb-8">
          <Text style={{ fontFamily: "Poppins" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit modi vero temporibus...
            <Text
              className="text-purpleAccent"
              style={{ fontFamily: "Poppins" }}
            >
              See More
            </Text>
          </Text>
        </View>

        {/* Tabs */}
        <View className="border">
          <Tabs screenOptions={{ headerShown: true }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="chat" />
            <Tabs.Screen name="search" />
            <Tabs.Screen name="booking" />
            <Tabs.Screen name="menu" />
          </Tabs>
        </View>
      </View>
    </View>
  );
};

export default Profile;
