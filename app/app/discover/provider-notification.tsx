import { ProviderNotification } from "@/types/types";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProviderNotificationScreen = () => {
  const router = useRouter();

  const [notifications, setNotifications] = useState<ProviderNotification[]>([
    {
      id: "1",
      type: "booking",
      title: "New Booking Request",
      message:
        "Emily Johnson wants to book a makeup session for tomorrow at 2:00 PM - $150",
      time: "5 min ago",
      isRead: false,
      clientName: "Emily Johnson",
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bookingStatus: "new_request",
      actionRequired: true,
      amount: 150,
    },
    {
      id: "2",
      type: "chat",
      title: "New Message",
      message:
        'Sarah: "Can we reschedule our appointment to next week? Something came up."',
      time: "15 min ago",
      isRead: false,
      clientName: "Sarah Wilson",
      clientImage:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    },
    {
      id: "3",
      type: "booking",
      title: "Reschedule Request",
      message:
        "Maria Garcia wants to reschedule her hair styling appointment from today to Friday",
      time: "1 hour ago",
      isRead: false,
      clientName: "Maria Garcia",
      clientImage:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
      bookingStatus: "rescheduled",
      actionRequired: true,
    },
    {
      id: "4",
      type: "payment",
      title: "Payment Received",
      message: "You received $120 for Hair Styling service from Lisa Chen",
      time: "2 hours ago",
      isRead: true,
      clientName: "Lisa Chen",
      clientImage:
        "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg",
      amount: 120,
    },
    {
      id: "5",
      type: "review",
      title: "New Review",
      message:
        'Amanda left you a 5-star review: "Amazing makeup skills! Will definitely book again."',
      time: "5 hours ago",
      isRead: true,
      clientName: "Amanda Davis",
      clientImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
    },
    {
      id: "6",
      type: "booking",
      title: "Booking Confirmed",
      message:
        "You accepted the nail art appointment for Jennifer Smith scheduled for Friday at 3:00 PM",
      time: "6 hours ago",
      isRead: true,
      clientName: "Jennifer Smith",
      clientImage:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      bookingStatus: "accepted",
      amount: 80,
    },
    {
      id: "7",
      type: "booking",
      title: "Service Completed",
      message:
        "You marked the skincare treatment for Rachel Brown as completed. Payment has been processed.",
      time: "1 day ago",
      isRead: true,
      clientName: "Rachel Brown",
      clientImage:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
      bookingStatus: "completed",
      amount: 200,
    },
    {
      id: "8",
      type: "booking",
      title: "Booking Cancelled",
      message:
        "Kevin Martinez cancelled his hair styling appointment scheduled for today",
      time: "2 days ago",
      isRead: true,
      clientName: "Kevin Martinez",
      clientImage:
        "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg",
      bookingStatus: "cancelled",
    },
  ]);

  const getNotificationIcon = (type: string, bookingStatus?: string) => {
    const iconProps = { size: 16, color: "white" };

    if (type === "chat") {
      return <Ionicons name="chatbubble" {...iconProps} />;
    }

    switch (type) {
      case "booking":
        switch (bookingStatus) {
          case "new_request":
            return <Ionicons name="add-circle" {...iconProps} />;
          case "accepted":
            return <Ionicons name="checkmark-circle" {...iconProps} />;
          case "cancelled":
            return <Ionicons name="close-circle" {...iconProps} />;
          case "completed":
            return <Ionicons name="star" {...iconProps} />;
          case "rescheduled":
            return <Ionicons name="calendar" {...iconProps} />;
          default:
            return <Ionicons name="calendar" {...iconProps} />;
        }
      case "payment":
        return <FontAwesome5 name="dollar-sign" {...iconProps} />;
      case "review":
        return <Ionicons name="star" {...iconProps} />;
      default:
        return <Ionicons name="notifications" {...iconProps} />;
    }
  };

  const getIconBackgroundColor = (type: string, bookingStatus?: string) => {
    if (type === "chat") return "bg-green-500";

    switch (type) {
      case "booking":
        switch (bookingStatus) {
          case "new_request":
            return "bg-blue-500";
          case "accepted":
            return "bg-green-500";
          case "cancelled":
            return "bg-red-500";
          case "completed":
            return "bg-purple-500";
          case "rescheduled":
            return "bg-orange-500";
          default:
            return "bg-gray-500";
        }
      case "payment":
        return "bg-emerald-500";
      case "review":
        return "bg-yellow-500";
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

  const deleteNotification = (id: string) => {
    Alert.alert(
      "Delete Notification",
      "Are you sure you want to delete this notification?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setNotifications((prev) => prev.filter((notif) => notif.id !== id));
          },
        },
      ]
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  const handleNotificationPress = (notification: ProviderNotification) => {
    markAsRead(notification.id);

    if (notification.type === "chat") {
      router.push("/chat");
    } else if (notification.type === "booking") {
      switch (notification.bookingStatus) {
        case "new_request":
          router.push("/provider-booking/new-requests");
          break;
        case "accepted":
          router.push("/provider-booking/accepted");
          break;
        case "cancelled":
          router.push("/provider-booking/cancelled");
          break;
        case "completed":
          router.push("/provider-booking/completed");
          break;
        case "rescheduled":
          router.push("/provider-booking/reschedule");
          break;
        default:
          router.push("/provider-booking/new-requests");
      }
    } else if (notification.type === "payment") {
      router.push("/earnings");
    } else if (notification.type === "review") {
      router.push("/reviews");
    }
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const renderNotificationItem = ({ item }: { item: ProviderNotification }) => (
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
              source={{ uri: item.clientImage }}
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

            <View className="flex-row items-center space-x-2">
              {item.amount && (
                <Text className="text-emerald-600 text-xs font-semibold">
                  ${item.amount}
                </Text>
              )}

              {item.rating && (
                <View className="flex-row items-center">
                  <Ionicons name="star" size={12} color="#FCD34D" />
                  <Text className="text-yellow-600 text-xs font-medium ml-1">
                    {item.rating}
                  </Text>
                </View>
              )}

              {item.actionRequired && (
                <View className="bg-red-100 px-2 py-1 rounded-full">
                  <Text className="text-red-700 text-xs font-medium">
                    Action Required
                  </Text>
                </View>
              )}

              <Text className="text-purple-600 text-xs font-medium">
                {item.clientName}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => deleteNotification(item.id)}
          className="ml-2 p-2"
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={16} color="#9CA3AF" />
        </TouchableOpacity>
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
          <Text className="text-xl font-bold text-gray-900">
            Business Notifications
          </Text>
        </View>

        {unreadCount > 0 && (
          <TouchableOpacity
            onPress={markAllAsRead}
            className="px-3 py-1 bg-purple-100 rounded-full"
            activeOpacity={0.8}
          >
            <Text className="text-purple-700 text-sm font-medium">
              Mark all read
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {unreadCount > 0 && (
        <View className="bg-purple-50 border-b border-purple-100 px-4 py-2">
          <Text className="text-purple-700 text-sm">
            You have {unreadCount} unread notification
            {unreadCount > 1 ? "s" : ""}
          </Text>
        </View>
      )}

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
            You'll see booking requests, messages, payments, and reviews here.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProviderNotificationScreen;
