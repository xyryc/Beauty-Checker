import AboutCard from "@/components/AboutCard";
import ButtonSmall from "@/components/ButtonSmall";
import ButtonSmallOutline from "@/components/ButtonSmallOutline";
import PendingCards from "@/components/PendingCards";
import RenderPhotosCard from "@/components/RenderPhotosCard";
import RenderVideosCard from "@/components/RenderVideosCard";
import { AntDesign, Feather, FontAwesome, Octicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ServiceProfile = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  const offset =
    Platform.OS === "android" ? -(StatusBar.currentHeight || 24) : -44;
  const TABS = ["Services", "Videos", "Photos", "About"];
  const [activeTab, setActiveTab] = useState("Services");

  const renderTab = (tab: string) => {
    const isActive = activeTab === tab;

    return (
      <TouchableOpacity
        key={tab}
        onPress={() => setActiveTab(tab)}
        className="flex-1 items-center pt-2.5"
      >
        <Text
          className={`font-medium text-sm ${
            isActive ? "text-purplePrimary" : "text-accent"
          }`}
          style={{ fontFamily: "Poppins" }}
        >
          {tab}
        </Text>

        {isActive && (
          <View
            className={`w-full rounded-full mt-2.5 ${
              isActive
                ? "h-[2px] opacity-100 shadow shadow-purpleAccent bg-purpleAccent"
                : "h-[0px] opacity-0"
            }`}
          />
        )}
      </TouchableOpacity>
    );
  };

  const item = [
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
  ];

  return (
    <View style={{ marginTop: offset }} className="bg-white">
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={[1]}
        ListHeaderComponentStyle={{ marginBottom: 24 }}
        ListHeaderComponent={
          <>
            {/* profile section top */}
            <View className="relative w-full h-[248px]">
              {/* Image Component */}
              <Image
                style={{ width: "100%", height: "100%", position: "absolute" }}
                source={{
                  uri: "https://thevendry.com/cdn-cgi/image/height=1920,width=1920,fit=contain,metadata=none/https%3A%2F%2Fs3.amazonaws.com%2Fuploads.thevendry.co%2F23052%2F1661181797046_HairMakeUp_08_IMG_7090_1_2_A.jpg",
                }}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={100}
              />

              {/* Linear Gradient */}
              <LinearGradient
                colors={["#000000", "rgba(0, 0, 0, 0)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              />
              <Image
                style={{
                  width: 150,
                  height: 150,
                  position: "absolute",
                  bottom: -45,
                  left: "22%",
                  transform: [{ translateX: -75 }],
                  borderRadius: 75,
                  borderWidth: 2,
                  borderColor: "#767676",
                }}
                source="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={100}
              />

              <View className="absolute top-0 left-0 z-20">
                <AntDesign name="arrowleft" size={24} color="white" />
              </View>
            </View>

            {/* profile name, stats, bio */}
            <View className="pt-16 px-5">
              <Text
                className="text-primary font-medium text-2xl"
                style={{ fontFamily: "Poppins" }}
              >
                Julian Assange
              </Text>

              {/* stats */}
              <View className="flex flex-row items-center gap-2 my-2">
                <Octicons name="people" size={20} color="#333333" />
                <View>
                  <Text
                    className="text-primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    15k{" "}
                    <Text
                      className="text-accent"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Followers
                    </Text>
                  </Text>
                </View>
              </View>

              {/* buttons */}
              <View className="mb-2 mr-5 flex-row justify-between gap-4 items-center">
                <ButtonSmall
                  icon={<Feather name="user-plus" color="#fff" size={20} />}
                  text="Follow"
                />
                <ButtonSmallOutline
                  icon={<FontAwesome name="send" color="#6200EE" size={20} />}
                  text="Message"
                />
              </View>

              {/* bio */}
              <View>
                <Text style={{ fontFamily: "Poppins" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis, cumque. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Velit modi vero temporibus...
                  <Text
                    className="text-purpleAccent"
                    style={{ fontFamily: "Poppins" }}
                  >
                    See More
                  </Text>
                </Text>
              </View>

              {/* location */}
              <View className="mt-4 mb-8 flex-row items-center gap-2.5">
                <View className="h-8 w-8 rounded-full bg-[#F7F0F8] justify-center items-center">
                  <SimpleLineIcons
                    name="location-pin"
                    size={18}
                    color="black"
                  />
                </View>
                <Text className="text-primary">
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </Text>
              </View>
            </View>

            {/* tab switches */}
            <View
              className="flex-row justify-between bg-white px-5"
              style={{
                shadowColor: "#111111",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.15,
                shadowRadius: 3,
                elevation: 5,
              }}
            >
              {TABS.map(renderTab)}
            </View>
          </>
        }
        renderItem={() => (
          <View className="h-screen-safe">
            <View className="px-5">
              {activeTab === "Services" && <PendingCards />}
            </View>

            {activeTab === "Videos" && <RenderVideosCard />}
            {activeTab === "Photos" && <RenderPhotosCard />}

            <View className="px-5 mt-2">
              {activeTab === "About" && <AboutCard />}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ServiceProfile;
