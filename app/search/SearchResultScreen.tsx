import CommonCard from "@/components/Shared/CommonCard";
import Header from "@/components/Shared/Header";
import SafeScreen from "@/components/Shared/SafeScreen";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

const SearchResultScreen = () => {
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
    <SafeScreen>
      <Header text="Search Result" />

      <View className="h-screen-safe">
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CommonCard
              onPress={() => router.push("/search/ServiceDetailsScreen")}
              item={item}
            />
          )}
          numColumns={2}
          contentContainerClassName="px-5 pt-6"
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeScreen>
  );
};

export default SearchResultScreen;
