import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const DateTimeSlot = ({
  selectedDate,
  setSelectedDate,
  selectedTimeSlot,
  setSelectedTimeSlot,
  calendarDays,
  timeSlots,
}: any) => {
  return (
    <View>
      <View className="mt-4">
        <Text
          className="text-primary text-lg mb-2"
          style={{ fontFamily: "Poppins-Medium" }}
        >
          February 2025
        </Text>

        <View className="flex-row justify-between mb-6">
          {calendarDays.map(
            (
              //@ts-ignore
              item
            ) => {
              const isSelected = item.date === selectedDate;
              const isDisabled = item.disabled;

              return (
                <TouchableOpacity
                  key={item.date}
                  onPress={() => !isDisabled && setSelectedDate(item.date)}
                  disabled={isDisabled}
                  className={`flex-1 mx-1 rounded-md py-2 items-center ${
                    isSelected
                      ? "bg-purple-600"
                      : isDisabled
                      ? "bg-gray-100"
                      : "bg-white border border-gray-200"
                  }`}
                  activeOpacity={isDisabled ? 1 : 0.7}
                >
                  <Text
                    className={`text-lg font-semibold ${
                      isSelected
                        ? "text-white"
                        : isDisabled
                        ? "text-gray-400"
                        : "text-gray-900"
                    }`}
                  >
                    {item.date.toString().padStart(2, "0")}
                  </Text>

                  <Text
                    className={`text-xs mb-1 ${
                      isSelected
                        ? "text-white"
                        : isDisabled
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}
        </View>
      </View>

      {/* Time Slots Section */}
      <View className="mb-4">
        <View className="flex-row flex-wrap justify-between">
          {timeSlots.map(
            (
              //@ts-ignore
              time,
              //@ts-ignore
              index
            ) => {
              const isSelected = selectedTimeSlot === `${time}-${index}`;

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedTimeSlot(`${time}-${index}`)}
                  className={`w-[48%] rounded-xl py-4 px-3 mb-3 border ${
                    isSelected
                      ? "bg-purple-600 border-purple-600"
                      : "bg-white border-gray-200"
                  }`}
                  activeOpacity={0.8}
                >
                  <Text
                    className={`text-center font-medium ${
                      isSelected ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}
        </View>
      </View>
    </View>
  );
};

export default DateTimeSlot;
