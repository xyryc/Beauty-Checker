import { AntDesign } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import * as Notifications from "expo-notifications";
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

  const checkNotificationPermissions = async (): Promise<boolean> => {
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

      if (existingStatus !== "granted") {
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error checking notification permissions:", error);
      return false;
    }
  };

  const requestNotificationPermissions = async (): Promise<boolean> => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      return status === "granted";
    } catch (error) {
      console.error("Error requesting notification permissions:", error);
      return false;
    }
  };

  const handleNotificationPermission = async (): Promise<boolean> => {
    const hasPermission = await checkNotificationPermissions();

    if (hasPermission) {
      return true;
    }

    // Show alert asking user to enable notifications
    return new Promise((resolve) => {
      Alert.alert(
        "Enable Notifications",
        "To receive booking confirmations and reminders, please enable notifications for this app.",
        [
          {
            text: "Skip",
            style: "cancel",
            onPress: () => resolve(true), // Allow booking without notifications
          },
          {
            text: "Enable",
            onPress: async () => {
              const granted = await requestNotificationPermissions();

              if (!granted) {
                // If permission denied, show option to open settings
                Alert.alert(
                  "Notifications Disabled",
                  "You can enable notifications later in your device settings under this app.",
                  [
                    {
                      text: "Continue",
                      onPress: () => resolve(true),
                    },
                    {
                      text: "Open Settings",
                      onPress: () => {
                        Linking.openSettings();
                        resolve(true);
                      },
                    },
                  ]
                );
              } else {
                resolve(true);
              }
            },
          },
        ]
      );
    });
  };

  const handleBookNow = () => {
    setBookingStarted(true);
    setShowSlots(true);
  };

  const handleConfirm = async () => {
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

    // Check notification permissions before proceeding
    const canProceed = await handleNotificationPermission();

    if (canProceed) {
      console.log("Booking confirmed at:", date);
      console.log("Selected date:", selectedDate);
      console.log("Selected time slot:", selectedTimeSlot);
      console.log("Terms accepted:", acceptedTerms);

      // Schedule a notification for booking confirmation
      await scheduleBookingNotification();

      // Add further logic here (e.g., API call)
      router.push("/search/stripe");
    }
  };

  const scheduleBookingNotification = async () => {
    try {
      const hasPermission = await checkNotificationPermissions();
      if (!hasPermission) {
        console.log("No notification permission, skipping notification");
        return;
      }

      // Schedule immediate confirmation notification
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Booking Confirmed! 🎉",
          body: `Your ${selectedTimeSlot} appointment has been confirmed.`,
          data: { bookingId: Date.now() },
        },
        trigger: { seconds: 2 },
      });

      // Schedule reminder notification (24 hours before - example)
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Appointment Reminder",
          body: `Don't forget your appointment tomorrow at ${selectedTimeSlot}`,
          data: { type: "reminder" },
        },
        trigger: { seconds: 10 }, // For demo - in real app, calculate 24h before appointment
      });
    } catch (error) {
      console.error("Error scheduling notifications:", error);
    }
  };

  const onChange = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") setShowSlots(false);
    if (selectedDate) setDate(selectedDate);
  };

  const toggleTermsAcceptance = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <View className="mt-6 px-5 pb-72">
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
          <TouchableOpacity
            onPress={toggleTermsAcceptance}
            className="flex-row items-center my-4"
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
                  // router.push("/terms-and-conditions");
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
                  // router.push("/privacy-policy");
                  console.log("Navigate to privacy policy");
                }}
              >
                Privacy Policy
              </Text>
            </Text>
          </TouchableOpacity>

          <ButtonPrimary text="Confirm" onPress={handleConfirm} />
        </View>
      )}
    </View>
  );
};

export default BookingSection;
