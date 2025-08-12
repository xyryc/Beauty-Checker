import PendingCards from "@/components/Booking/PendingCards";
import AboutCard from "@/components/Shared/AboutCard";
import ButtonSmall from "@/components/Shared/ButtonSmall";
import ButtonSmallOutline from "@/components/Shared/ButtonSmallOutline";
import RenderPhotosCard from "@/components/Shared/RenderPhotosCard";
import RenderVideosCard from "@/components/Shared/RenderVideosCard";
import { FontAwesome, FontAwesome5, Octicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
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
  const [showAddModal, setShowAddModal] = useState(false);

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

  const addOptions = [
    {
      id: 1,
      title: "Add Services",
      icon: "briefcase",
      description: "Add new services to your profile",
      route: "/provider-profile/AddServiceScreen",
      color: "#612AC3",
    },
    {
      id: 2,
      title: "Add Photo Post",
      icon: "camera",
      description: "Share a new photo with your followers",
      route: "/provider-profile/AddPhotoScreen",
      color: "#612AC3",
    },
    {
      id: 3,
      title: "Add Video Post",
      icon: "video-camera",
      description: "Upload a video to showcase your work",
      route: "/provider-profile/AddVideoScreen",
      color: "#612AC3",
    },
  ];

  const handleAddOptionPress = (route: string) => {
    setShowAddModal(false);
    router.push(route as any);
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
                      <Text className="mr-1 text-white">4.6</Text>

                      <FontAwesome name="star" size={10} color="#fff" />

                      <Text className="text-white ml-1">(450 People)</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
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
                    className="text-purplePrimary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    See More
                  </Text>
                </Text>
              </View>

              {/* location */}
              <View className="mt-4 mb-8 flex-row items-center gap-2.5 pr-10">
                <View className="h-8 w-8 rounded-full bg-[#F7F0F8] justify-center items-center">
                  <SimpleLineIcons
                    name="location-pin"
                    size={18}
                    color="black"
                  />
                </View>
                <Text
                  className="text-primary"
                  style={{ fontFamily: "Poppins" }}
                  numberOfLines={1}
                >
                  3517 W. Gray St. Utica, Pennsylvania 57867, USA
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

      {/* Floating Add Button */}
      <TouchableOpacity
        onPress={() => setShowAddModal(true)}
        className="absolute bottom-36 right-5 w-16 h-16 bg-purple-600 rounded-full items-center justify-center shadow-lg"
        style={{ elevation: 8 }}
        activeOpacity={0.8}
      >
        <Image
          style={{
            width: 70,
            height: 70,
          }}
          source={require("@/assets/images/add.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={100}
          cachePolicy="memory-disk"
        />
      </TouchableOpacity>

      {/* Add Options Modal */}
      <Modal
        visible={showAddModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowAddModal(false)}
      >
        <Pressable
          className="flex-1 bg-black/60 justify-center items-center"
          onPress={() => setShowAddModal(false)}
        >
          <Pressable
            className="bg-white rounded-3xl mx-6 w-[85%] overflow-hidden"
            onPress={() => {}} // Prevent modal close when tapping inside
          >
            {/* Modal Header */}
            <View className="p-6 border-b border-gray-100">
              <Text
                className="text-xl text-primary text-center"
                style={{
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                Create New Content
              </Text>
              <Text
                className="text-lg text-accent text-center mt-1"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Choose what you'd like to add
              </Text>
            </View>

            {/* Options List */}
            <View className="py-2">
              {addOptions.map((option, index) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => handleAddOptionPress(option.route)}
                  className="flex-row items-center px-6 py-4 active:bg-gray-50"
                  activeOpacity={0.7}
                >
                  <View
                    className="w-12 h-12 rounded-full items-center justify-center mr-4"
                    style={{ backgroundColor: `${option.color}15` }}
                  >
                    <FontAwesome
                      name={option.icon as any}
                      size={20}
                      color={option.color}
                    />
                  </View>

                  <View className="flex-1">
                    <Text
                      className="text-lg font-semibold text-gray-900"
                      style={{
                        fontFamily: "Poppins-Medium",
                      }}
                    >
                      {option.title}
                    </Text>
                    <Text
                      className="text-sm text-gray-500 mt-1"
                      style={{
                        fontFamily: "Poppins",
                      }}
                    >
                      {option.description}
                    </Text>
                  </View>

                  <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
                </TouchableOpacity>
              ))}
            </View>

            {/* Cancel Button */}
            <View className="p-4 border-t border-gray-100 items-center">
              <ButtonSmallOutline
                text="Cancel"
                onPress={() => setShowAddModal(false)}
              />
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ProviderProfile;
