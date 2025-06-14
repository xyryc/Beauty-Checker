import BookingSection from "@/components/BookingSection";
import Header from "@/components/Header";
import SafeScreen from "@/components/SafeScreen";
import ShareModal from "@/components/ShareModal";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ServiceDetails = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const images = [
    {
      uri: "https://images.pexels.com/photos/3089849/pexels-photo-3089849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/9743963/pexels-photo-9743963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/32498668/pexels-photo-32498668/free-photo-of-stunning-woman-applying-lip-gloss-against-red-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/8990700/pexels-photo-8990700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      uri: "https://images.pexels.com/photos/9218719/pexels-photo-9218719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* header */}
      <Header text="Service Details" />

      {/* Main Content */}
      <View className="mt-6 mx-5 p-4 border-[0.5px] border-primary rounded-[18px]">
        <Image
          source={mainImage}
          style={{ width: "100%", height: 250, borderRadius: 10 }}
          contentFit="cover"
        />

        <ScrollView horizontal className="mt-2 mb-4">
          {images.map((img, idx) => (
            <TouchableOpacity key={idx} onPress={() => setMainImage(img)}>
              <Image
                source={img}
                style={[
                  styles.thumbnail,
                  mainImage.uri === img.uri && styles.selectedThumbnail,
                ]}
                contentFit="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* profile name */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-[10px]">
            <Image
              source="https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ width: 48, height: 48, borderRadius: 100 }}
            />

            <View className="flex mt-1">
              <Text
                className="text-lg font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Julian Assange
              </Text>

              <View className="flex-row items-center">
                <Text
                  className="text-[10px] text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Makeup Artist
                </Text>

                <View className="flex-row items-center bg-purple-600 px-2 py-0.5 rounded-md ml-2">
                  <Text className="text-xs font-semibold mr-1 text-white">
                    4.6
                  </Text>
                  <FontAwesome name="star" size={10} color="#fff" />
                </View>
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

const styles = StyleSheet.create({
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: "#9333ea",
  },
});

export default ServiceDetails;
