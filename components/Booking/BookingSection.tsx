import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Platform, Pressable, Text, View } from "react-native";
import ButtonPrimary from "../Shared/ButtonPrimary";
import DateTimeSlot from "../Shared/DateTimeSlot";

const BookingSection = () => {
  const [bookingStarted, setBookingStarted] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showSlots, setShowSlots] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [usePoints, setUsePoints] = useState(false);
  const router = useRouter();

  // Pricing configuration
  const SERVICE_PRICE = 70; // Original service price in €
  const APP_FEE_PERCENTAGE = 9; // App fee (can be adjusted)
  const LOYALTY_POINTS_PERCENTAGE = 2; // Points given to customer
  const POINTS_TO_EURO_RATE = 1000; // 1 € = 1,000 points

  // User's current points (this should come from backend/storage)
  const [userPoints, setUserPoints] = useState(1400); // Example: 1,400 points = €1.40

  // Calculate values
  const pointsInEuro = userPoints / POINTS_TO_EURO_RATE;
  const discountedPrice = usePoints
    ? SERVICE_PRICE - pointsInEuro
    : SERVICE_PRICE;
  const appFee = (SERVICE_PRICE * APP_FEE_PERCENTAGE) / 100;
  const loyaltyPointsEuro = (SERVICE_PRICE * LOYALTY_POINTS_PERCENTAGE) / 100;
  const loyaltyPointsAwarded = Math.round(
    loyaltyPointsEuro * POINTS_TO_EURO_RATE
  );
  const providerReceives = SERVICE_PRICE - appFee - loyaltyPointsEuro;

  // timeslot
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const calendarDays = [
    { date: 1, day: "Mon", disabled: true },
    { date: 2, day: "Tue", disabled: true },
    { date: 3, day: "Wed", disabled: false },
    { date: 4, day: "Thu", disabled: false },
    { date: 5, day: "Fri", disabled: false },
    { date: 6, day: "Sat", disabled: false },
  ];

  const timeSlots = [
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "13.00 PM",
    "14.00 PM",
    "15.00 PM",
    "16.00 PM",
    "17.00 PM",
    "18.00 PM",
    "19.00 PM",
  ];

  const checkNotificationPermissions = async (): Promise<boolean> => {
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      return existingStatus === "granted";
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

    return new Promise((resolve) => {
      Alert.alert(
        "Enable Notifications",
        "To receive booking confirmations and reminders, please enable notifications for this app.",
        [
          {
            text: "Skip",
            style: "cancel",
            onPress: () => resolve(true),
          },
          {
            text: "Enable",
            onPress: async () => {
              const granted = await requestNotificationPermissions();

              if (!granted) {
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

    const canProceed = await handleNotificationPermission();

    if (canProceed) {
      // Calculate final booking details
      const bookingData = {
        servicePrice: SERVICE_PRICE,
        finalPrice: discountedPrice,
        pointsUsed: usePoints ? userPoints : 0,
        pointsEarned: loyaltyPointsAwarded,
        appFee: appFee,
        providerReceives: providerReceives,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
      };

      console.log("Booking confirmed:", bookingData);

      // Update user points
      if (usePoints) {
        setUserPoints(loyaltyPointsAwarded); // Reset to new earned points
      } else {
        setUserPoints(userPoints + loyaltyPointsAwarded); // Add to existing
      }

      await scheduleBookingNotification();
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

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Booking Confirmed! 🎉",
          body: `Your ${selectedTimeSlot} appointment has been confirmed. You earned ${loyaltyPointsAwarded} points!`,
          data: { bookingId: Date.now() },
        },
        trigger: { seconds: 2 },
      });

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Appointment Reminder",
          body: `Don't forget your appointment tomorrow at ${selectedTimeSlot}`,
          data: { type: "reminder" },
        },
        trigger: { seconds: 10 },
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

  const togglePointsUsage = () => {
    if (userPoints > 0) {
      setUsePoints(!usePoints);
    } else {
      Alert.alert(
        "No Points Available",
        "You don't have any loyalty points to use yet. Book a service to start earning!"
      );
    }
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

          {/* Order Summary */}
          <View>
            <LinearGradient
              colors={["#B78AF7", "#612AC3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 10,
                marginBottom: 16,
              }}
            >
              <Text
                className="text-white py-[14.5px] text-lg font-medium text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Order Summary
              </Text>
            </LinearGradient>

            {/* Service Price */}
            <View className="flex-row justify-between items-center pb-3 border-b border-gray-200">
              <Text
                style={{ fontFamily: "Poppins-Medium" }}
                className="text-primary text-base"
              >
                Celeste Beauty
              </Text>
              <View className="flex-row items-center">
                {usePoints && (
                  <Text
                    style={{ fontFamily: "Poppins" }}
                    className="text-gray-400 line-through mr-2"
                  >
                    €{SERVICE_PRICE.toFixed(2)}
                  </Text>
                )}
                <Text
                  style={{ fontFamily: "Poppins-Medium" }}
                  className="text-accent text-base"
                >
                  €{discountedPrice.toFixed(2)}
                </Text>
              </View>
            </View>

            {/* Points Balance & Usage */}
            <View className="mt-4 mb-4 p-3 bg-purple-50 rounded-lg">
              <View className="flex-row justify-between items-center mb-2">
                <Text
                  style={{ fontFamily: "Poppins-Medium" }}
                  className="text-primary"
                >
                  Your Points Balance
                </Text>
                <Pressable onPress={() => router.push("/settings/rewards")}>
                  <Text
                    style={{ fontFamily: "Poppins" }}
                    className="text-link text-sm"
                  >
                    View Details
                  </Text>
                </Pressable>
              </View>
              <Text
                style={{ fontFamily: "Poppins-SemiBold" }}
                className="text-primary text-xl"
              >
                {userPoints.toLocaleString()} points
              </Text>
              <Text
                style={{ fontFamily: "Poppins" }}
                className="text-accent text-sm"
              >
                = €{pointsInEuro.toFixed(2)} discount
              </Text>
            </View>

            {/* Use Points Checkbox */}
            {userPoints > 0 && (
              <Pressable
                onPress={togglePointsUsage}
                className="flex-row items-center mb-4"
              >
                <View
                  className={`w-5 h-5 border-2 rounded mr-3 items-center justify-center ${
                    usePoints
                      ? "bg-primary border-primary"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {usePoints && (
                    <AntDesign name="check" size={12} color="white" />
                  )}
                </View>
                <Text
                  className="flex-1 text-sm text-gray-700"
                  style={{ fontFamily: "Poppins" }}
                >
                  Use {userPoints.toLocaleString()} points (€
                  {pointsInEuro.toFixed(2)} discount)
                </Text>
              </Pressable>
            )}

            {/* Points to be Earned */}
            <View className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <View className="flex-row items-center">
                <AntDesign name="star" size={20} color="#10B981" />
                <Text
                  style={{ fontFamily: "Poppins-Medium" }}
                  className="text-green-800 ml-2"
                >
                  You'll earn {loyaltyPointsAwarded.toLocaleString()} points
                </Text>
              </View>
              <Text
                style={{ fontFamily: "Poppins" }}
                className="text-green-700 text-xs mt-1"
              >
                (€{loyaltyPointsEuro.toFixed(2)} worth for your next booking)
              </Text>
            </View>

            {/* Breakdown (Optional - can be collapsible) */}
            <View className="mb-4 p-3 bg-gray-50 rounded-lg">
              <Text
                style={{ fontFamily: "Poppins-Medium" }}
                className="text-primary mb-2"
              >
                Price Breakdown
              </Text>
              <View className="space-y-1">
                <View className="flex-row justify-between">
                  <Text
                    style={{ fontFamily: "Poppins" }}
                    className="text-gray-600 text-sm"
                  >
                    Service Price
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins" }}
                    className="text-gray-600 text-sm"
                  >
                    €{SERVICE_PRICE.toFixed(2)}
                  </Text>
                </View>
                {usePoints && (
                  <View className="flex-row justify-between">
                    <Text
                      style={{ fontFamily: "Poppins" }}
                      className="text-green-600 text-sm"
                    >
                      Points Discount
                    </Text>
                    <Text
                      style={{ fontFamily: "Poppins" }}
                      className="text-green-600 text-sm"
                    >
                      -€{pointsInEuro.toFixed(2)}
                    </Text>
                  </View>
                )}
                <View className="flex-row justify-between pt-2 border-t border-gray-200">
                  <Text
                    style={{ fontFamily: "Poppins-Medium" }}
                    className="text-primary"
                  >
                    Total to Pay
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins-Medium" }}
                    className="text-primary"
                  >
                    €{discountedPrice.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Terms and Conditions Section */}
          <Pressable
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
                  console.log("Navigate to terms and conditions");
                }}
              >
                Terms and Conditions
              </Text>{" "}
              and{" "}
              <Text
                className="text-primary underline"
                onPress={() => {
                  console.log("Navigate to privacy policy");
                }}
              >
                Privacy Policy
              </Text>
            </Text>
          </Pressable>

          <ButtonPrimary text="Confirm Booking" onPress={handleConfirm} />
        </View>
      )}
    </View>
  );
};

export default BookingSection;
