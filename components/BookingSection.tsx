// components/BookingSection.tsx
import { FontAwesome6 } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

const BookingSection = () => {
  const [bookingStarted, setBookingStarted] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const router = useRouter();

  const handleBookNow = () => {
    setBookingStarted(true);
    setShowPicker(true);
  };

  const handleConfirm = () => {
    console.log("Booking confirmed at:", date);
    // Add further logic here (e.g., API call)
  };

  const onChange = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") setShowPicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View className="mt-4">
      {!bookingStarted ? (
        <TouchableOpacity
          onPress={handleBookNow}
          className="rounded-2xl overflow-hidden mx-5 mt-8"
        >
          <LinearGradient
            colors={["#B78AF7", "#612AC3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="rounded-2xl flex-row items-center justify-center"
          >
            <View className="flex-row justify-center items-center gap-4">
              <FontAwesome6 name="calendar-days" size={24} color="#fff" />
              <Text
                className="text-white py-[14.5px] text-lg font-medium text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Book Now
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <View>
          {showPicker && (
            <View className="items-center">
              <DateTimePicker
                value={date}
                mode="datetime"
                display="default"
                onChange={onChange}
                minimumDate={new Date()}
              />
            </View>
          )}

          {/* confirm */}
          <TouchableOpacity
            onPress={() => {
              handleConfirm();
              router.push("/search/stripe");
            }}
            className="rounded-2xl overflow-hidden mx-5 mt-4"
          >
            <LinearGradient
              colors={["#B78AF7", "#612AC3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="rounded-2xl flex-row items-center justify-center"
            >
              <Text
                className="text-white py-[14.5px] text-lg font-medium text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Confirm
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default BookingSection;
