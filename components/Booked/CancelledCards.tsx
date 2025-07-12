import { useRouter } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import CommonCard from "../Shared/CommonCard";

const CancelledCards = () => {
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
        paddingHorizontal: 16,
      }}
      contentContainerStyle={{ paddingVertical: 20 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CancelledCards;
