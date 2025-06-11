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
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    },
    {
      id: "2",
      title: "Service Name....",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    },
    {
      id: "3",
      title: "Service Name....",
      subtitle: "Makeup Artist",
      rating: "4.5",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
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
