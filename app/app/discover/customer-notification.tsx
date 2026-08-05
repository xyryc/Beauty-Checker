import { CustomerNotification } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomerNotificationScreen = () => {
  const router = useRouter();

  const [notifications, setNotifications] = useState<CustomerNotification[]>([
    {
      id: "1",
      type: "booking",
      title: "Booking Confirmed",
      message:
        "Your makeup appointment with Sarah Beauty has been confirmed for tomorrow at 2:00 PM",
      time: "10 min ago",
      isRead: false,
      providerName: "Sarah Beauty",
      providerImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bookingStatus: "confirmed",
    },
    {
      id: "2",
      type: "chat",
      title: "New Message",
      message:
        'Sarah: "Hi! I\'ll be there 5 minutes early to set up. Looking forward to our session!"',
      time: "30 min ago",
      isRead: false,
      providerName: "Sarah Beauty",
      providerImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: "3",
      type: "booking",
      title: "Appointment Reminder",
      message:
        "Don't forget! Your hair styling appointment with Emma Styles is tomorrow at 10:00 AM",
      time: "2 hours ago",
      isRead: true,
      providerName: "Emma Styles",
      providerImage:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      bookingStatus: "reminder",
    },
    {
      id: "4",
      type: "booking",
      title: "Service Completed",
      message:
        "Hope you loved your nail art session! Please rate your experience with Lisa Nails",
      time: "1 day ago",
      isRead: true,
      providerName: "Lisa Nails",
      providerImage:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
      bookingStatus: "completed",
    },
    {
      id: "5",
      type: "chat",
      title: "New Message",
      message:
        'Lisa: "Thank you for choosing my services! Don\'t forget to book your next appointment 😊"',
      time: "1 day ago",
      isRead: true,
      providerName: "Lisa Nails",
      providerImage:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      id: "6",
      type: "booking",
      title: "Booking Cancelled",
      message:
        "Unfortunately, Alex Hair cancelled your appointment due to an emergency. You'll receive a full refund.",
      time: "3 days ago",
      isRead: true,
      providerName: "Alex Hair",
      providerImage:
        "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg",
      bookingStatus: "cancelled",
    },
  ]);

  const getNotificationIcon = (type: string, bookingStatus?: string) => {
    if (type === "chat") {
      return <Ionicons name="chatbubble" size={16} color="white" />;
    }

    switch (bookingStatus) {
      case "confirmed":
        return <Ionicons name="checkmark-circle" size={16} color="white" />;
      case "cancelled":
        return <Ionicons name="close-circle" size={16} color="white" />;
      case "completed":
        return <Ionicons name="star" size={16} color="white" />;
      case "reminder":
        return <Ionicons name="alarm" size={16} color="white" />;
      default:
        return <Ionicons name="calendar" size={16} color="white" />;
    }
  };

  const getIconBackgroundColor = (type: string, bookingStatus?: string) => {
    if (type === "chat") {
      return "bg-green-500";
    }

    switch (bookingStatus) {
      case "confirmed":
        return "bg-blue-500";
      case "cancelled":
        return "bg-red-500";
      case "completed":
        return "bg-purple-500";
      case "reminder":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const handleNotificationPress = (notification: CustomerNotification) => {
    markAsRead(notification.id);

    if (notification.type === "chat") {
      router.push(`/chat/${notification.providerName}`);
    } else if (notification.type === "booking") {
      router.push("/bookings");
    }
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const renderNotificationItem = ({ item }: { item: CustomerNotification }) => (
    <TouchableOpacity
      onPress={() => handleNotificationPress(item)}
      className={`bg-white mx-4 mb-3 rounded-2xl p-4 shadow-sm ${
        !item.isRead ? "border-l-4 border-purple-500" : ""
      }`}
      activeOpacity={0.8}
    >
      <View className="flex-row">
        <View className="mr-3">
          <View className="relative">
            <Image
              source={{ uri: item.providerImage }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
              contentFit="cover"
            />
            <View
              className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full items-center justify-center ${getIconBackgroundColor(
                item.type,
                item.bookingStatus
              )}`}
            >
              {getNotificationIcon(item.type, item.bookingStatus)}
            </View>
          </View>
        </View>

        <View className="flex-1">
          <View className="flex-row items-start justify-between mb-1">
            <Text
              className={`font-semibold text-base flex-1 ${
                !item.isRead ? "text-gray-900" : "text-gray-700"
              }`}
            >
              {item.title}
            </Text>
            {!item.isRead && (
              <View className="w-2 h-2 bg-purple-500 rounded-full ml-2 mt-1" />
            )}
          </View>

          <Text className="text-gray-600 text-sm leading-5 mb-2">
            {item.message}
          </Text>

          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400 text-xs">{item.time}</Text>

            <Text className="text-purple-600 text-xs font-medium">
              {item.providerName}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-100">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className="p-2 -ml-2 mr-2"
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">Notifications</Text>
        </View>

        {unreadCount > 0 && (
          <View className="bg-purple-500 px-2 py-1 rounded-full">
            <Text className="text-white text-xs font-medium">
              {unreadCount} new
            </Text>
          </View>
        )}
      </View>

      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 16,
          }}
        />
      ) : (
        <View className="flex-1 justify-center items-center">
          <View className="w-20 h-20 bg-gray-200 rounded-full items-center justify-center mb-4">
            <Ionicons name="notifications-off" size={32} color="#9CA3AF" />
          </View>
          <Text className="text-gray-500 text-lg font-medium mb-2">
            No notifications yet
          </Text>
          <Text className="text-gray-400 text-center px-8">
            You'll see booking updates and messages from your beauty
            professionals here.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CustomerNotificationScreen;
