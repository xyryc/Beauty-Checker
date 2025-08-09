import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const EditScheduleScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [scheduleData, setScheduleData] = useState([
    { day: "Monday", opening: "09:00 AM", closing: "04:00 PM" },
    { day: "Tuesday", opening: "09:00 AM", closing: "04:00 PM" },
    { day: "Wednesday", opening: "09:00 AM", closing: "04:00 PM" },
    { day: "Thursday", opening: "09:00 AM", closing: "04:00 PM" },
    { day: "Friday", opening: "09:00 AM", closing: "04:00 PM" },
    { day: "Saturday", opening: "09:00 AM", closing: "04:00 PM" },
    { day: "Sunday", opening: "09:00 AM", closing: "04:00 PM" },
  ]);

  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<"opening" | "closing" | null>(
    null
  );
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [tempDate, setTempDate] = useState(new Date());

  const onChange = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") setShowPicker(false);
    if (selectedDate && selectedDayIndex !== null && pickerMode) {
      const newSchedule = [...scheduleData];
      const formattedTime = selectedDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      newSchedule[selectedDayIndex][pickerMode] = formattedTime;
      setScheduleData(newSchedule);
    }
  };

  const openTimePicker = (dayIndex: number, mode: "opening" | "closing") => {
    setSelectedDayIndex(dayIndex);
    setPickerMode(mode);
    setTempDate(new Date());
    setShowPicker(true);
  };

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
              className="flex-1 text-xl text-primary"
            >
              Day
            </Text>
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="w-24 text-xl text-primary text-center"
            >
              Opening
            </Text>
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="w-24 text-xl text-primary text-center"
            >
              Closing
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
              }`}
            >
              <Text
                style={{ fontFamily: "Poppins" }}
                className="flex-1 text-base text-primary"
              >
                {item.day}
              </Text>

              <Pressable
                className="w-24 items-center"
                onPress={() => openTimePicker(index, "opening")}
              >
                <Text
                  style={{ fontFamily: "Poppins" }}
                  className="text-primary"
                >
                  {item.opening}
                </Text>
              </Pressable>

              <Pressable
                className="w-24 items-center"
                onPress={() => openTimePicker(index, "closing")}
              >
                <Text
                  style={{ fontFamily: "Poppins" }}
                  className="text-primary"
                >
                  {item.closing}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      </View>

      {showPicker && (
        <DateTimePicker
          value={tempDate}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}

      <View className="mx-5 mb-4">
        <ButtonPrimary
          text="Save"
          onPress={() => router.push("/provider-profile/ProfileScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditScheduleScreen;
