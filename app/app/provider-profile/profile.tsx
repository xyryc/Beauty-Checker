import PendingCards from "@/components/Booking/PendingCards";
import AboutCard from "@/components/Shared/AboutCard";
import ButtonSmall from "@/components/Shared/ButtonSmall";
import ButtonSmallOutline from "@/components/Shared/ButtonSmallOutline";
import RenderPhotosCard from "@/components/Shared/RenderPhotosCard";
import RenderVideosCard from "@/components/Shared/RenderVideosCard";
import { Feather, FontAwesome, Octicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProviderProfile = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  const offset =
    Platform.OS === "android" ? -(StatusBar.currentHeight || 24) : -44;
  const TABS = ["Services", "Videos", "Photos", "About"];
  const [activeTab, setActiveTab] = useState("Services");
  const router = useRouter();

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

  return (
    <View className="bg-white">
      <StatusBar barStyle="light-content" />

      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={[1]}
        ListHeaderComponentStyle={{ marginBottom: 24 }}
        ListHeaderComponent={
          <>
            {/* profile section top */}
            <View className="relative w-full">
              {/* settings icon */}
              <TouchableOpacity
                onPress={() =>
                  router.push("/provider-profile/settings-activity")
                }
                className="absolute bottom-36 right-5 z-10"
              >
                <FontAwesome
                  className="p-3.5"
                  name="navicon"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.back()}
                className="absolute bottom-36 left-5 z-10"
              >
                <Feather
                  className="p-3.5"
                  name="arrow-left"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>

              {/* Image Component */}
              <View
                style={{ position: "relative", width: "100%", height: 230 }}
              >
                {/* Image */}
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                  source={{
                    uri: "https://images.pexels.com/photos/31776332/pexels-photo-31776332.jpeg",
                  }}
                  placeholder={{ blurhash }}
                  contentFit="cover"
                />

                {/* White gradient overlay at bottom */}
                <LinearGradient
                  colors={["transparent", "white"]}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 80,
                  }}
                />
              </View>

              <Image
                style={{
                  width: 150,
                  height: 150,
                  position: "absolute",
                  bottom: -25,
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
            </View>

            {/* profile name, stats, bio */}
            <View className="pt-14 px-5">
              <Text
                className="text-primary font-medium text-2xl"
                style={{ fontFamily: "Poppins" }}
              >
                Julian Assange
              </Text>

              {/* stats */}
              <View className="flex-row gap-4 items-center my-2">
                {/* follower */}
                <View className="flex flex-row items-center gap-2">
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

                {/* reviews */}
                <TouchableOpacity
                  onPress={() => router.push("/search/service-review/[id]")}
                  className="rounded-md overflow-hidden"
                >
                  <LinearGradient
                    colors={["#B78AF7", "#612AC3"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <View className="flex-row items-center px-2 py-0.5">
                      <Text
                        className="mr-1 text-white text-sm"
                        style={{ fontFamily: "Poppins" }}
                      >
                        4.6
                      </Text>

                      <FontAwesome name="star" size={10} color="#fff" />

                      <Text
                        className="text-white ml-1 text-sm"
                        style={{ fontFamily: "Poppins" }}
                      >
                        (450 People)
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
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
            {activeTab === "Services" && <PendingCards />}

            {activeTab === "Videos" && <RenderVideosCard />}
            {activeTab === "Photos" && <RenderPhotosCard />}

            {activeTab === "About" && <AboutCard />}
          </View>
        )}
      />
    </View>
  );
};

export default ProviderProfile;
