import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Platform, Text, TouchableOpacity, View } from "react-native";
import ButtonPrimary from "../Shared/ButtonPrimary";
import DateTimeSlot from "../Shared/DateTimeSlot";

const BookingSection = () => {
  const [bookingStarted, setBookingStarted] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showSlots, setShowSlots] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const router = useRouter();

  // timeslot
  const [selectedDate, setSelectedDate] = useState(4); // Thursday is selected
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

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

  const handleBookNow = () => {
    setBookingStarted(true);
    setShowSlots(true);
  };

  const handleConfirm = () => {
    if (!acceptedTerms) {
      Alert.alert(
        "Terms and Conditions",
        "Please accept the terms and conditions to proceed."
      );
      return;
    }

    if (!selectedTimeSlot) {
      Alert.alert(
        "Time Slot Required",
        "Please select a time slot to proceed."
      );
      return;
    }

    console.log("Booking confirmed at:", date);
    console.log("Selected date:", selectedDate);
    console.log("Selected time slot:", selectedTimeSlot);
    console.log("Terms accepted:", acceptedTerms);

    // Add further logic here (e.g., API call)
    router.push("/search/stripe");
  };

  const onChange = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") setShowSlots(false);
    if (selectedDate) setDate(selectedDate);
  };

  const toggleTermsAcceptance = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <View className="mt-4 px-5 h-screen-safe">
      {!bookingStarted ? (
        <ButtonPrimary text="Book Now" onPress={handleBookNow} />
      ) : (
        <View>
          {showSlots && (
            <DateTimeSlot
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTimeSlot={selectedTimeSlot}
              setSelectedTimeSlot={setSelectedTimeSlot}
              calendarDays={calendarDays}
              timeSlots={timeSlots}
            />
          )}

          {/* Terms and Conditions Section */}
          <View className="my-4">
            <TouchableOpacity
              onPress={toggleTermsAcceptance}
              className="flex-row items-center"
            >
              <View
                className={`w-5 h-5 border-2 rounded mr-3 items-center justify-center ${
                  acceptedTerms
                    ? "bg-primary border-primary"
                    : "border-gray-300 bg-white"
                }`}
              >
                {acceptedTerms && (
                  <AntDesign name="check" size={12} color="white" />
                )}
              </View>
              <Text
                className="flex-1 text-sm text-gray-700 leading-5"
                style={{ fontFamily: "Poppins" }}
              >
                I accept the{" "}
                <Text
                  className="text-primary underline"
                  onPress={() => {
                    // Navigate to terms and conditions page
                    router.push("/profile/TermsConditionsScreen");
                    console.log("Navigate to terms and conditions");
                  }}
                >
                  Terms and Conditions
                </Text>{" "}
                and{" "}
                <Text
                  className="text-primary underline"
                  onPress={() => {
                    // Navigate to privacy policy page
                    router.push("/profile/PrivacyPolicyScreen");
                    console.log("Navigate to privacy policy");
                  }}
                >
                  Privacy Policy
                </Text>
              </Text>
            </TouchableOpacity>
          </View>

          <ButtonPrimary text="Confirm" onPress={handleConfirm} />
        </View>
      )}
    </View>
  );
};

export default BookingSection;
