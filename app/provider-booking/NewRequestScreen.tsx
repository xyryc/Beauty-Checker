import ButtonCancel from "@/components/Shared/ButtonCancel";
import ButtonSmall from "@/components/Shared/ButtonSmall";
import Header from "@/components/Shared/Header";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View } from "react-native";

interface BookingRequest {
  id: string;
  clientName: string;
  service: string;
  dateTime: string;
  amount: number;
  clientImage: string;
}

const NewRequestScreen = () => {
  const router = useRouter();

  const bookingRequests: BookingRequest[] = [
    {
      id: "1",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "2",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "3",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "4",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "5",
      clientName: "Client Name",
      service: "Makeup",
      dateTime: "Date/Time",
      amount: 500,
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
  ];

  const handleBackPress = () => {
    console.log("Back pressed");
  };

  const handleCancel = (requestId: string) => {
    console.log("Cancel request:", requestId);
  };

  const handleAccept = (requestId: string) => {
    console.log("Accept request:", requestId);
  };

  const renderRequestItem = ({ item }: { item: BookingRequest }) => (
    <View className="bg-white mx-4 mb-4 rounded-2xl p-4 shadow-sm">
      <View className="flex-row justify-between mb-4 p-1">
        {/* Client Info */}
        <View className="flex-row flex-1">
          <Image
            source={{ uri: item.clientImage }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
            contentFit="cover"
          />

          <View className="ml-4 flex-1">
            <Text
              className="text-primary text-lg"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              {item.clientName}
            </Text>
            <Text
              className="text-purple-600 text-sm mb-2"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Service: {item.service}
            </Text>
            <Text className="text-accent text-[10px]">{item.dateTime}</Text>
          </View>
        </View>

        {/* Amount */}
        <Text
          style={{ fontFamily: "Poppins-Medium" }}
          className="text-primary text-lg"
        >
          ${item.amount}
        </Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center gap-4">
        <ButtonCancel text="Cancel" onPress={() => router.back()} />

        <ButtonSmall text="Accept" onPress={() => router.back()} />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <Header text="New Request" />
      {/* Request List */}
      <FlatList
        data={bookingRequests}
        renderItem={renderRequestItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 32,
        }}
      />
    </SafeAreaView>
  );
};

export default NewRequestScreen;
