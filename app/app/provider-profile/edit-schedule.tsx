import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface BreakTime {
  id: string;
  startTime: string;
  endTime: string;
}

interface DaySchedule {
  day: string;
  isOpen: boolean;
  opening: string;
  closing: string;
  breaks: BreakTime[];
}

const EditScheduleScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [scheduleData, setScheduleData] = useState<DaySchedule[]>([
    {
      day: "Monday",
      isOpen: true,
      opening: "09:00AM",
      closing: "05:00PM",
      breaks: [{ id: "1", startTime: "12:00PM", endTime: "01:00PM" }],
    },
    {
      day: "Tuesday",
      isOpen: true,
      opening: "09:00AM",
      closing: "05:00PM",
      breaks: [{ id: "2", startTime: "12:00PM", endTime: "01:00PM" }],
    },
    {
      day: "Wednesday",
      isOpen: true,
      opening: "09:00AM",
      closing: "05:00PM",
      breaks: [{ id: "3", startTime: "12:00PM", endTime: "01:00PM" }],
    },
    {
      day: "Thursday",
      isOpen: true,
      opening: "09:00AM",
      closing: "05:00PM",
      breaks: [{ id: "4", startTime: "12:00PM", endTime: "01:00PM" }],
    },
    {
      day: "Friday",
      isOpen: true,
      opening: "09:00AM",
      closing: "05:00PM",
      breaks: [{ id: "5", startTime: "12:00PM", endTime: "01:00PM" }],
    },
    {
      day: "Saturday",
      isOpen: true,
      opening: "10:00AM",
      closing: "04:00PM",
      breaks: [],
    },
    {
      day: "Sunday",
      isOpen: false,
      opening: "09:00AM",
      closing: "05:00PM",
      breaks: [],
    },
  ]);

  const [showTimePicker, setShowTimePicker] = useState<{
    visible: boolean;
    dayIndex: number;
    timeType: "opening" | "closing" | "breakStart" | "breakEnd";
    breakIndex?: number;
  }>({
    visible: false,
    dayIndex: -1,
    timeType: "opening",
  });

  // Generate time options (every 30 minutes)
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        const displayTime = formatTime24to12(timeString);
        times.push({ value: timeString, display: displayTime });
      }
    }
    return times;
  };

  const formatTime24to12 = (time24: string) => {
    const [hours, minutes] = time24.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour.toString().padStart(2, "0")}:${minutes}${ampm}`;
  };

  const formatTime12to24 = (time12: string) => {
    const match = time12.match(/(\d{1,2}):(\d{2})(AM|PM)/);
    if (!match) return "00:00";

    let [, hours, minutes, ampm] = match;
    let hour = parseInt(hours);

    if (ampm === "AM" && hour === 12) hour = 0;
    if (ampm === "PM" && hour !== 12) hour += 12;

    return `${hour.toString().padStart(2, "0")}:${minutes}`;
  };

  const toggleDayStatus = (dayIndex: number) => {
    const updatedSchedule = [...scheduleData];
    updatedSchedule[dayIndex].isOpen = !updatedSchedule[dayIndex].isOpen;
    setScheduleData(updatedSchedule);
  };

  const updateTime = (
    dayIndex: number,
    timeType: string,
    newTime: string,
    breakIndex?: number
  ) => {
    const updatedSchedule = [...scheduleData];
    const formattedTime = formatTime24to12(newTime);

    if (timeType === "opening") {
      updatedSchedule[dayIndex].opening = formattedTime;
    } else if (timeType === "closing") {
      updatedSchedule[dayIndex].closing = formattedTime;
    } else if (timeType === "breakStart" && breakIndex !== undefined) {
      updatedSchedule[dayIndex].breaks[breakIndex].startTime = formattedTime;
    } else if (timeType === "breakEnd" && breakIndex !== undefined) {
      updatedSchedule[dayIndex].breaks[breakIndex].endTime = formattedTime;
    }

    setScheduleData(updatedSchedule);
  };

  const addBreak = (dayIndex: number) => {
    const updatedSchedule = [...scheduleData];
    const newBreak: BreakTime = {
      id: Date.now().toString(),
      startTime: "12:00PM",
      endTime: "01:00PM",
    };
    updatedSchedule[dayIndex].breaks.push(newBreak);
    setScheduleData(updatedSchedule);
  };

  const removeBreak = (dayIndex: number, breakIndex: number) => {
    const updatedSchedule = [...scheduleData];
    updatedSchedule[dayIndex].breaks.splice(breakIndex, 1);
    setScheduleData(updatedSchedule);
  };

  const showTimePickerModal = (
    dayIndex: number,
    timeType: any,
    breakIndex?: number
  ) => {
    setShowTimePicker({
      visible: true,
      dayIndex,
      timeType,
      breakIndex,
    });
  };

  const handleTimePickerChange = (event: any, selectedTime?: Date) => {
    setShowTimePicker((prev) => ({ ...prev, visible: false }));

    if (selectedTime && showTimePicker.dayIndex !== -1) {
      const timeString = `${selectedTime
        .getHours()
        .toString()
        .padStart(2, "0")}:${selectedTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      updateTime(
        showTimePicker.dayIndex,
        showTimePicker.timeType,
        timeString,
        showTimePicker.breakIndex
      );
    }
  };

  const saveSchedule = () => {
    // Validate schedule
    for (const day of scheduleData) {
      if (day.isOpen) {
        const openingTime24 = formatTime12to24(day.opening);
        const closingTime24 = formatTime12to24(day.closing);

        if (openingTime24 >= closingTime24) {
          Alert.alert(
            "Invalid Schedule",
            `${day.day}: Opening time must be before closing time.`
          );
          return;
        }

        // Validate breaks
        for (const breakTime of day.breaks) {
          const breakStart24 = formatTime12to24(breakTime.startTime);
          const breakEnd24 = formatTime12to24(breakTime.endTime);

          if (breakStart24 >= breakEnd24) {
            Alert.alert(
              "Invalid Break Time",
              `${day.day}: Break start time must be before break end time.`
            );
            return;
          }

          if (breakStart24 < openingTime24 || breakEnd24 > closingTime24) {
            Alert.alert(
              "Invalid Break Time",
              `${day.day}: Break times must be within opening hours.`
            );
            return;
          }
        }
      }
    }

    // Save logic here - API call or local storage
    console.log("Saving schedule:", scheduleData);

    Alert.alert("Success", "Schedule updated successfully!", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  const TimePickerButton = ({
    time,
    onPress,
    disabled = false,
  }: {
    time: string;
    onPress: () => void;
    disabled?: boolean;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`px-3 py-2 rounded-lg border ${
        disabled ? "bg-gray-100 border-gray-200" : "bg-white border-gray-300"
      }`}
    >
      <Text
        className={`text-sm ${disabled ? "text-gray-400" : "text-gray-700"}`}
      >
        {time}
      </Text>
    </TouchableOpacity>
  );

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
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header text="Edit Schedule" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="mx-5 mt-6">
          {scheduleData.map((dayData, dayIndex) => (
            <View key={dayData.day} className="mb-6 bg-gray-50 rounded-2xl p-4">
              {/* Day Header */}
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-semibold text-gray-800">
                  {dayData.day}
                </Text>
                <TouchableOpacity
                  onPress={() => toggleDayStatus(dayIndex)}
                  className={`px-4 py-2 rounded-full ${
                    dayData.isOpen
                      ? "bg-green-100 border border-green-300"
                      : "bg-red-100 border border-red-300"
                  }`}
                >
                  <Text
                    className={`text-sm font-medium ${
                      dayData.isOpen ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {dayData.isOpen ? "Open" : "Closed"}
                  </Text>
                </TouchableOpacity>
              </View>

              {dayData.isOpen && (
                <>
                  {/* Opening/Closing Times */}
                  <View className="flex-row items-center justify-between mb-4">
                    <View className="flex-1 mr-2">
                      <Text className="text-sm text-gray-600 mb-1">
                        Opening Time
                      </Text>
                      <TimePickerButton
                        time={dayData.opening}
                        onPress={() => showTimePickerModal(dayIndex, "opening")}
                      />
                    </View>
                    <View className="flex-1 ml-2">
                      <Text className="text-sm text-gray-600 mb-1">
                        Closing Time
                      </Text>
                      <TimePickerButton
                        time={dayData.closing}
                        onPress={() => showTimePickerModal(dayIndex, "closing")}
                      />
                    </View>
                  </View>

                  {/* Break Times Section */}
                  <View className="border-t border-gray-200 pt-4">
                    <View className="flex-row items-center justify-between mb-3">
                      <Text className="text-base font-medium text-gray-800">
                        Break Times
                      </Text>
                      <TouchableOpacity
                        onPress={() => addBreak(dayIndex)}
                        className="bg-primary rounded-lg px-3 py-2"
                      >
                        <Text className="text-white text-sm font-medium">
                          Add Break
                        </Text>
                      </TouchableOpacity>
                    </View>

                    {dayData.breaks.length === 0 ? (
                      <Text className="text-sm text-gray-500 italic text-center py-2">
                        No break times set
                      </Text>
                    ) : (
                      dayData.breaks.map((breakTime, breakIndex) => (
                        <View
                          key={breakTime.id}
                          className="bg-white rounded-lg p-3 mb-2 border border-gray-200"
                        >
                          <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center flex-1">
                              <View className="flex-1 mr-2">
                                <Text className="text-xs text-gray-500 mb-1">
                                  Start
                                </Text>
                                <TimePickerButton
                                  time={breakTime.startTime}
                                  onPress={() =>
                                    showTimePickerModal(
                                      dayIndex,
                                      "breakStart",
                                      breakIndex
                                    )
                                  }
                                />
                              </View>
                              <View className="flex-1 ml-2">
                                <Text className="text-xs text-gray-500 mb-1">
                                  End
                                </Text>
                                <TimePickerButton
                                  time={breakTime.endTime}
                                  onPress={() =>
                                    showTimePickerModal(
                                      dayIndex,
                                      "breakEnd",
                                      breakIndex
                                    )
                                  }
                                />
                              </View>
                            </View>
                            <TouchableOpacity
                              onPress={() => removeBreak(dayIndex, breakIndex)}
                              className="ml-3 p-2"
                            >
                              <AntDesign
                                name="delete"
                                size={18}
                                color="#ef4444"
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      ))
                    )}
                  </View>
                </>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Time Picker Modal */}
      {showTimePicker.visible && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={handleTimePickerChange}
        />
      )}

      {/* Fixed Bottom Button */}
      <View className="mx-5 mb-4 mt-4">
        <ButtonPrimary text="Save Schedule" onPress={saveSchedule} />
      </View>
    </SafeAreaView>
  );
};

export default EditScheduleScreen;
