import BookingSection from "@/components/BookingSection";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import SafeScreen from "@/components/SafeScreen";
import ShareModal from "@/components/ShareModal";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ServiceDetails = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const router = useRouter();

  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* header */}
      <Header text="Service Details" />

      {/* Main Content */}
      <View className="mt-6 mx-5 p-4 border-[0.5px] border-primary rounded-[18px]">
        {/* image slider */}
        <ImageSlider />

        {/* profile name */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-[10px]">
            <TouchableOpacity
              onPress={() => router.push("/search/service-profile")}
            >
              <Image
                source="https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ width: 48, height: 48, borderRadius: 100 }}
              />
            </TouchableOpacity>

            <View className="flex mt-1">
              <TouchableOpacity
                onPress={() => router.push("/search/service-profile")}
              >
                <Text
                  className="text-lg font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Julian Assange
                </Text>
              </TouchableOpacity>

              <View className="flex-row items-center">
                <Text
                  className="text-[10px] text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Makeup Artist
                </Text>

                <TouchableOpacity
                  onPress={() => router.push("/search/service-review/[id]")}
                  className="flex-row items-center bg-purple-600 px-2 py-0.5 rounded-md ml-2"
                >
                  <Text className="text-xs font-semibold mr-1 text-white">
                    4.6
                  </Text>
                  <FontAwesome name="star" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FontAwesome
              className="p-1"
              color="#612AC3"
              name="send"
              size={24}
            />
          </TouchableOpacity>
        </View>

        {/* service name and price */}
        <View className="mt-4">
          <View className="flex-row justify-between items-center">
            <Text
              className="text-lg font-medium text-primary"
              style={{ fontFamily: "Poppins" }}
            >
              Celeste Beauty
            </Text>

            <Text
              className="text-purplePrimary text-lg font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              $36.00
            </Text>
          </View>

          {/* description */}
          <Text className="text-accent mt-1" style={{ fontFamily: "Poppins" }}>
            Lorem ipsum, dolor sit amet consectetur adicing elit. Asperiores,
            rem? Lorem, ipsum....
            <Text
              className="text-purplePrimary"
              style={{ fontFamily: "Poppins" }}
            >
              See More
            </Text>
          </Text>
        </View>
      </View>

      <BookingSection />

      <ShareModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeScreen>
  );
};

export default ServiceDetails;
