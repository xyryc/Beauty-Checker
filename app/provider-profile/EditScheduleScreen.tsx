import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  Switch,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScheduleItem {
  day: string;
  opening: string;
  closing: string;
  isEnabled: boolean;
}

interface PickerState {
  visible: boolean;
  dayIndex: number | null;
  mode: "opening" | "closing" | null;
  currentTime: Date;
}

const EditScheduleScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  // Initialize schedule with individual enabled states
  const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([
    {
      day: "Monday",
      opening: "09:00 AM",
      closing: "04:00 PM",
      isEnabled: true,
    },
    {
      day: "Tuesday",
      opening: "09:00 AM",
      closing: "04:00 PM",
      isEnabled: true,
    },
    {
      day: "Wednesday",
      opening: "09:00 AM",
      closing: "04:00 PM",
      isEnabled: true,
    },
    {
      day: "Thursday",
      opening: "09:00 AM",
      closing: "04:00 PM",
      isEnabled: true,
    },
    {
      day: "Friday",
      opening: "09:00 AM",
      closing: "04:00 PM",
      isEnabled: true,
    },
    {
      day: "Saturday",
      opening: "09:00 AM",
      closing: "04:00 PM",
      isEnabled: false,
    },
    {
      day: "Sunday",
      opening: "09:00 AM",
      closing: "04:00 PM",
      isEnabled: false,
    },
  ]);

  // Simplified picker state
  const [pickerState, setPickerState] = useState<PickerState>({
    visible: false,
    dayIndex: null,
    mode: null,
    currentTime: new Date(),
  });

  // Parse time string to Date object
  const parseTimeString = useCallback((timeString: string): Date => {
    const [time, period] = timeString.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();

    let hour24 = hours;
    if (period === "PM" && hours !== 12) hour24 += 12;
    if (period === "AM" && hours === 12) hour24 = 0;

    date.setHours(hour24, minutes, 0, 0);
    return date;
  }, []);

  // Format Date to time string
  const formatTimeString = useCallback((date: Date): string => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }, []);

  // Open time picker
  const openTimePicker = useCallback(
    (dayIndex: number, mode: "opening" | "closing") => {
      const currentTimeString = scheduleData[dayIndex][mode];
      const currentTime = parseTimeString(currentTimeString);

      setPickerState({
        visible: true,
        dayIndex,
        mode,
        currentTime,
      });
    },
    [scheduleData, parseTimeString]
  );

  // Handle time picker change
  const handleTimeChange = useCallback(
    (_event: any, selectedDate?: Date) => {
      if (Platform.OS === "android") {
        setPickerState((prev) => ({ ...prev, visible: false }));
      }

      if (selectedDate && pickerState.dayIndex !== null && pickerState.mode) {
        const formattedTime = formatTimeString(selectedDate);

        setScheduleData((prev) => {
          const newSchedule = [...prev];
          newSchedule[pickerState.dayIndex!][pickerState.mode!] = formattedTime;
          return newSchedule;
        });
      }
    },
    [pickerState.dayIndex, pickerState.mode, formatTimeString]
  );

  // Toggle day enabled/disabled
  const toggleDayEnabled = useCallback((dayIndex: number) => {
    setScheduleData((prev) => {
      const newSchedule = [...prev];
      newSchedule[dayIndex].isEnabled = !newSchedule[dayIndex].isEnabled;
      return newSchedule;
    });
  }, []);

  // Close picker
  const closePicker = useCallback(() => {
    setPickerState((prev) => ({ ...prev, visible: false }));
  }, []);

  // Save schedule
  const handleSave = useCallback(() => {
    console.log("Saving schedule:", scheduleData);
    router.push("/provider-profile/ProfileScreen");
  }, [scheduleData, router]);

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header text="Opening & Closing Time" />

      <View className="flex-1 mx-5 mt-8">
        <View className="bg-purple-100 rounded-2xl">
          {/* Table Header */}
          <View className="flex-row bg-[#EFE6FD] px-4 py-4 rounded-t-2xl border-b-[0.5px] border-[#CEB0FA]">
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="flex-1 text-lg text-primary"
            >
              Day
            </Text>
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="w-24 text-lg text-primary"
            >
              Opening
            </Text>
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="w-24 text-lg text-primary"
            >
              Closing
            </Text>
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="w-16 text-lg text-primary text-center"
            >
              On/Off
            </Text>
          </View>

          {/* Schedule Rows */}
          {scheduleData.map((item, index) => (
            <View
              key={item.day}
              className={`flex-row items-center px-4 py-4 ${
                index !== scheduleData.length - 1
                  ? "border-b-[0.5px] border-[#CEB0FA]"
                  : ""
              } ${!item.isEnabled ? "opacity-50" : ""}`}
            >
              <Text
                style={{ fontFamily: "Poppins" }}
                className="flex-1 text-primary"
              >
                {item.day}
              </Text>

              {/* Opening Time */}
              <Pressable
                className="w-24 items-center py-2 px-1 bg-white rounded-lg border border-gray-200 mr-2"
                onPress={() =>
                  item.isEnabled && openTimePicker(index, "opening")
                }
                disabled={!item.isEnabled}
              >
                <Text
                  style={{ fontFamily: "Poppins" }}
                  className={`text-center ${
                    item.isEnabled ? "text-primary" : "text-gray-400"
                  }`}
                >
                  {item.opening}
                </Text>
              </Pressable>

              {/* Closing Time */}
              <Pressable
                className="w-24 items-center py-2 px-1 bg-white rounded-lg border border-gray-200 mr-2"
                onPress={() =>
                  item.isEnabled && openTimePicker(index, "closing")
                }
                disabled={!item.isEnabled}
              >
                <Text
                  style={{ fontFamily: "Poppins" }}
                  className={`text-center ${
                    item.isEnabled ? "text-primary" : "text-gray-400"
                  }`}
                >
                  {item.closing}
                </Text>
              </Pressable>

              {/* Toggle Switch */}
              <View className="w-16 items-center">
                <Switch
                  trackColor={{ false: "#E5E7EB", true: "#CEB0FA" }}
                  thumbColor={item.isEnabled ? "#612AC3" : "#9CA3AF"}
                  onValueChange={() => toggleDayEnabled(index)}
                  value={item.isEnabled}
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Date Time Picker Modal */}
      {pickerState.visible && (
        <View>
          {Platform.OS === "ios" ? (
            <View className="bg-white border-t border-gray-200 px-4">
              <View className="flex-row justify-between items-center mb-2 py-4">
                <Pressable onPress={closePicker}>
                  <Text
                    className="text-purplePrimary text-lg"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Cancel
                  </Text>
                </Pressable>
                <Text
                  className="text-lg"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  Select {pickerState.mode} time
                </Text>
                <Pressable onPress={closePicker}>
                  <Text
                    className="text-purplePrimary text-lg"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Done
                  </Text>
                </Pressable>
              </View>

              <View className="items-center">
                <DateTimePicker
                  value={pickerState.currentTime}
                  mode="time"
                  display="spinner"
                  onChange={handleTimeChange}
                  style={{ backgroundColor: "white" }}
                />
              </View>
            </View>
          ) : (
            <DateTimePicker
              value={pickerState.currentTime}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}
        </View>
      )}

      {/* Save Button */}
      <View className="mx-5 mb-4">
        <ButtonPrimary text="Save" onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
};

export default EditScheduleScreen;
