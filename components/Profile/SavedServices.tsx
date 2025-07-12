import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";
import CommonCard from "../CommonCard";

const SavedServices = () => {
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

  const router = useRouter();

  return (
    <View>
      <Text
        className="text-2xl font-medium mb-4"
        style={{ fontFamily: "Poppins" }}
      >
        Saved Services
      </Text>

      {/* mapped saved cards */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommonCard
            onPress={() => router.push("/booked/BookedDetailsScreen")}
            item={item}
          />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SavedServices;
