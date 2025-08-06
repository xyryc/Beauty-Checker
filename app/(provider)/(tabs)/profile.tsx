import PendingCards from "@/components/Booked/PendingCards";
import AboutCard from "@/components/Shared/AboutCard";
import ButtonSmall from "@/components/Shared/ButtonSmall";
import ButtonSmallOutline from "@/components/Shared/ButtonSmallOutline";
import RenderPhotosCard from "@/components/Shared/RenderPhotosCard";
import RenderVideosCard from "@/components/Shared/RenderVideosCard";
import { FontAwesome, FontAwesome5, Octicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProviderProfile = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const TABS = ["Services", "Videos", "Photos", "About"];
  const [activeTab, setActiveTab] = useState("Services");
  const router = useRouter();
  const insets = useSafeAreaInsets();

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
    <View className="bg-white flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* main content */}
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={[1]}
        ListHeaderComponentStyle={{ marginBottom: 24 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* profile section top */}
            <View
              className="relative w-full"
              style={{ paddingTop: insets.top + 140 }}
            >
              {/* settings icon */}
              <TouchableOpacity
                className="absolute bottom-24 right-5 z-10"
                onPress={() =>
                  router.push("/provider-profile/SettingsActivityScreen")
                }
              >
                <FontAwesome
                  className="p-3.5"
                  name="navicon"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>

              {/* cover image */}
              <Image
                style={{
                  width: "100%",
                  height: 200,
                  position: "absolute",
                }}
                source={{
                  uri: "https://images.pexels.com/photos/31776332/pexels-photo-31776332.jpeg",
                }}
                placeholder={{ blurhash }}
                contentFit="cover"
              />

              {/* profile image */}
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
                source="https://images.pexels.com/photos/31776332/pexels-photo-31776332.jpeg"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={100}
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
                  onPress={() =>
                    router.push("/provider-profile/EditProfileScreen")
                  }
                  icon={<FontAwesome5 name="edit" size={16} color="white" />}
                  text="Edit Profile"
                />
                <ButtonSmallOutline
                  icon={<FontAwesome name="send" color="#6200EE" size={16} />}
                  text="Share Profile"
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

      {/* add icon */}
      <TouchableOpacity
        onPress={() => router.push("/provider-profile/AddPost")}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            position: "absolute",
            bottom: 100,
            right: 5,
            zIndex: 20,
          }}
          source={require("@/assets/images/add.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProviderProfile;
