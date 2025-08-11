import bookingRequests from "@/assets/data/bookingRequests.json";
import BookingStatus from "@/components/Booking/BookingStatus";
import CancelModal from "@/components/Shared/CancelModal";
import Header from "@/components/Shared/Header";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AcceptRequestScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [cancelReason, setCancelReason] = useState("");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(
    null
  );

  // Filter appointments by date
  const { todaysAppointments, upcomingAppointments } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of today

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Start of tomorrow

    const todaysAppointments = bookingRequests.filter((item) => {
      const appointmentDate = new Date(item.dateTime);
      appointmentDate.setHours(0, 0, 0, 0);
      return appointmentDate.getTime() === today.getTime();
    });

    const upcomingAppointments = bookingRequests.filter((item) => {
      const appointmentDate = new Date(item.dateTime);
      appointmentDate.setHours(0, 0, 0, 0);
      return appointmentDate.getTime() >= tomorrow.getTime();
    });

    return { todaysAppointments, upcomingAppointments };
  }, []);

  const handleMessage = (requestId: string) => {
    console.log("Message to:", requestId);
  };

  const handleComplete = (requestId: string) => {
    console.log("Complete request:", requestId);
  };

  const handleReschedule = (requestId: string) => {
    // Find the booking item to pass to reschedule screen
    const bookingItem = [...todaysAppointments, ...upcomingAppointments].find(
      (item) => item.id === requestId
    );

    if (bookingItem) {
      // Pass the booking data as query parameters
      const queryParams = new URLSearchParams({
        id: bookingItem.id,
        clientName: bookingItem.clientName,
        service: bookingItem.service,
        dateTime: bookingItem.dateTime,
        amount: bookingItem.amount.toString(),
        clientImage: bookingItem.clientImage,
      });

      router.push(
        `/provider-booking/RescheduleScreen?${queryParams.toString()}`
      );
    }
  };

  const handleCancel = (requestId: string) => {
    setSelectedRequestId(requestId);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    console.log("Cancel request:", selectedRequestId, "Reason:", cancelReason);
    setShowCancelModal(false);
    setCancelReason("");
    setSelectedRequestId(null);
  };

  // Combine both lists for FlatList
  const combinedData = [
    ...(todaysAppointments.length > 0
      ? [{ type: "today", data: todaysAppointments }]
      : []),
    ...(upcomingAppointments.length > 0
      ? [{ type: "upcoming", data: upcomingAppointments }]
      : []),
  ];

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    if (item.type === "today") {
      return (
        <View>
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="px-5 mb-6 text-2xl"
          >
            Today's Appointments
          </Text>
          {item.data.map((appointment: any) => (
            <BookingStatus
              key={appointment.id}
              item={appointment}
              status="accepted"
              onMessage={handleMessage}
              onComplete={handleComplete}
            />
          ))}
        </View>
      );
    }

    if (item.type === "upcoming") {
      return (
        <View>
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="px-5 mb-6 text-2xl mt-8"
          >
            Upcoming Appointments
          </Text>
          {item.data.map((appointment: any) => (
            <BookingStatus
              key={appointment.id}
              item={appointment}
              status="upcoming"
              onCancel={handleCancel}
              onReschedule={handleReschedule}
            />
          ))}
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView
      className="flex-1 bg-gray-50"
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <Header text="Accepted" />

      {/* Appointments list */}
      {combinedData.length > 0 ? (
        <FlatList
          data={combinedData}
          keyExtractor={(item, index) => `${item.type}-${index}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 32,
          }}
        />
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="text-gray-500 text-lg"
          >
            No appointments found
          </Text>
        </View>
      )}

      {/* Cancel Modal */}
      <CancelModal
        showCancelModal={showCancelModal}
        setShowCancelModal={setShowCancelModal}
        cancelReason={cancelReason}
        setCancelReason={setCancelReason}
        confirmCancel={confirmCancel}
      />
    </SafeAreaView>
  );
};

export default AcceptRequestScreen;
