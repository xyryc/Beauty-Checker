import React from "react";
import { FlatList } from "react-native";
import CommonCard from "./CommonCard";

const PendingCards = () => {
  const data = [
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
    {
      id: "3",
      title: "Service Name....",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/8214085/pexels-photo-8214085.jpeg",
    },
    {
      id: "4",
      title: "Service Name....",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/8990708/pexels-photo-8990708.jpeg",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CommonCard item={item} />}
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

export default PendingCards;
