import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BookedDetailsScreen = () => {
  const navigation = useNavigation();

  const images = [
    {
      uri: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    },
    {
      uri: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/7964423/pexels-photo-7964423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/5717512/pexels-photo-5717512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row items-center px-5 py-2">
        <TouchableOpacity onPress={() => navigation.goBack()} className="pr-4">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-medium absolute left-0 right-0 text-center">
          Service Details
        </Text>
      </View>

      {/* Main Content */}
      <View style={{ alignItems: "center" }}>
        <Image
          source={mainImage}
          style={{ width: 300, height: 300, borderRadius: 10 }}
          contentFit="cover"
        />

        <ScrollView horizontal style={{ marginTop: 15 }}>
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
      </View>
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
    borderColor: "#9333ea", // purple
  },
});

export default BookedDetailsScreen;
