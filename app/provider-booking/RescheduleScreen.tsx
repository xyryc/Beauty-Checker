import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import DateTimeSlot from "@/components/Shared/DateTimeSlot";
import Header from "@/components/Shared/Header";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RescheduleScreen = () => {
  const insets = useSafeAreaInsets();
  const [selectedDate, setSelectedDate] = useState(4); // Thursday is selected
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  // Get the passed booking data from route params
  const params = useLocalSearchParams();
  const router = useRouter();

  // Extract booking data from params
  const bookingData = {
    id: params.id as string,
    clientName: params.clientName as string,
    service: params.service as string,
    dateTime: params.dateTime as string,
    amount: parseInt(params.amount as string),
    clientImage: params.clientImage as string,
  };

  const handleBackPress = () => {
    router.back();
  };

  const handleReschedule = () => {
    console.log("Reschedule confirmed for booking:", bookingData.id);
    console.log("New date:", selectedDate);
    console.log("New time slot:", selectedTimeSlot);
    // Here you would typically call an API to update the booking
    router.back();
  };

  // Format the original date/time for display
  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  // Calendar data for February 2025
  const calendarDays = [
    { date: 1, day: "Mon", disabled: true },
    { date: 2, day: "Tue", disabled: true },
    { date: 3, day: "Wed", disabled: false },
    { date: 4, day: "Thu", disabled: false },
    { date: 5, day: "Fri", disabled: false },
    { date: 6, day: "Sat", disabled: false },
  ];

  // Available time slots
  const timeSlots = [
    "10.00 Pm",
    "11.00 Pm",
    "12.00 Pm",
    "13.00 Pm",
    "14.00 Pm",
    "15.00 Pm",
    "16.00 Pm",
    "17.00 Pm",
    "18.00 Pm",
    "19.00 Pm",
  ];

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <Header text="Reschedule" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 mx-5 py-6"
      >
        <View className="border-[0.5px] border-primary rounded-2xl p-3">
          {/* Client Info Card */}
          <Image
            source={{ uri: bookingData.clientImage }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              margin: "auto",
            }}
            contentFit="cover"
          />

          <View className="flex-row mt-4">
            <View className="flex-1">
              <Text
                className="text-lg mb-1"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                {bookingData.clientName}
              </Text>
              <Text
                className="text-purplePrimary text-sm mb-1"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Service: {bookingData.service}
              </Text>
              <Text
                className="text-accent text-[10px]"
                style={{ fontFamily: "Poppins" }}
              >
                {formatDateTime(bookingData.dateTime)}
              </Text>
            </View>

            <Text
              className="text-purplePrimary text-lg"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              ${bookingData.amount}.00
            </Text>
          </View>

          {/* date & time slot */}
          <DateTimeSlot
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTimeSlot={selectedTimeSlot}
            setSelectedTimeSlot={setSelectedTimeSlot}
            calendarDays={calendarDays}
            timeSlots={timeSlots}
          />

          {/* reschedule button */}
          <ButtonPrimary text="Reschedule" onPress={handleReschedule} />
        </View>
      </ScrollView>

      {/* Reschedule Button */}
    </SafeAreaView>
  );
};

export default RescheduleScreen;
