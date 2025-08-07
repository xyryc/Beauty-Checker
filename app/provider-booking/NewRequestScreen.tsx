import ButtonCancel from "@/components/Shared/ButtonCancel";
import Header from "@/components/Shared/Header";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
      <View className="flex-row items-center justify-between mb-4">
        {/* Client Info */}
        <View className="flex-row items-center flex-1">
          <Image
            source={{ uri: item.clientImage }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            contentFit="cover"
          />

          <View className="ml-3 flex-1">
            <Text className="text-gray-900 font-semibold text-base mb-1">
              {item.clientName}
            </Text>
            <Text className="text-purple-600 text-sm mb-1">
              Service: {item.service}
            </Text>
            <Text className="text-gray-500 text-sm">{item.dateTime}</Text>
          </View>
        </View>

        {/* Amount */}
        <Text className="text-gray-900 font-bold text-lg">${item.amount}</Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row gap-4">
        <ButtonCancel text="Cancel" onPress={() => router.back()} />

        <TouchableOpacity
          onPress={() => handleAccept(item.id)}
          className="flex-1 bg-purple-600 rounded-xl py-3"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-center text-base">
            Accept
          </Text>
        </TouchableOpacity>
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
