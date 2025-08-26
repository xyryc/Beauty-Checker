import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Platform, View } from "react-native";
import ButtonPrimary from "../Shared/ButtonPrimary";
import DateTimeSlot from "../Shared/DateTimeSlot";

const BookingSection = () => {
  const [bookingStarted, setBookingStarted] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showSlots, setShowSlots] = useState(false);
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
    console.log("Booking confirmed at:", date);
    // Add further logic here (e.g., API call)
  };

  const onChange = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") setShowSlots(false);
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View className="mt-4 px-5">
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

          <ButtonPrimary
            text="Confirm"
            onPress={() => {
              handleConfirm();
              router.push("/search/stripe");
            }}
          />
        </View>
      )}
    </View>
  );
};

export default BookingSection;
