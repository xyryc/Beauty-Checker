import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface BreakTime {
  id: string;
  startTime: string;
  endTime: string;
  label: string;
}

interface DaySchedule {
  day: string;
  isOpen: boolean;
  opening: string;
  closing: string;
  breaks: BreakTime[];
}

const ScheduleScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const scheduleData: DaySchedule[] = [
    {
      day: "Monday",
      isOpen: true,
      opening: "09:00AM",
      closing: "06:00PM",
      breaks: [
        {
          id: "1",
          startTime: "12:00PM",
          endTime: "01:00PM",
          label: "Lunch Break",
        },
      ],
    },
    {
      day: "Tuesday",
      isOpen: true,
      opening: "09:00AM",
      closing: "06:00PM",
      breaks: [
        {
          id: "2",
          startTime: "12:00PM",
          endTime: "01:00PM",
          label: "Lunch Break",
        },
      ],
    },
    {
      day: "Wednesday",
      isOpen: true,
      opening: "09:00AM",
      closing: "06:00PM",
      breaks: [
        {
          id: "3",
          startTime: "12:00PM",
          endTime: "01:00PM",
          label: "Lunch Break",
        },
        { id: "4", startTime: "03:00PM", endTime: "03:30PM", label: "Break" },
      ],
    },
    {
      day: "Thursday",
      isOpen: true,
      opening: "09:00AM",
      closing: "06:00PM",
      breaks: [
        {
          id: "5",
          startTime: "12:00PM",
          endTime: "01:00PM",
          label: "Lunch Break",
        },
      ],
    },
    {
      day: "Friday",
      isOpen: true,
      opening: "09:00AM",
      closing: "06:00PM",
      breaks: [
        {
          id: "6",
          startTime: "12:00PM",
          endTime: "01:00PM",
          label: "Lunch Break",
        },
      ],
    },
    {
      day: "Saturday",
      isOpen: true,
      opening: "10:00AM",
      closing: "04:00PM",
      breaks: [
        { id: "7", startTime: "01:00PM", endTime: "01:30PM", label: "Break" },
      ],
    },
    {
      day: "Sunday",
      isOpen: false,
      opening: "09:00AM",
      closing: "06:00PM",
      breaks: [],
    },
  ];

  const renderBreakTimes = (breaks: BreakTime[]) => {
    if (breaks.length === 0) {
      return (
        <Text className="text-xs text-gray-400 italic mt-1">No breaks</Text>
      );
    }

    return (
      <View className="mt-2">
        {breaks.map((breakTime, index) => (
          <View key={breakTime.id} className="flex-row items-center mb-1">
            <View className="w-2 h-2 bg-orange-400 rounded-full mr-2" />
            <Text
              className="text-xs text-gray-600"
              style={{ fontFamily: "Poppins" }}
            >
              {breakTime.label}: {breakTime.startTime} - {breakTime.endTime}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header text="Opening & Closing Time" />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content Container */}
        <View className="mx-5 mt-8">
          {/* Schedule Container */}
          <View className="bg-[#ccaffc9c] rounded-2xl">
            {/* Table Header */}
            <View className="bg-[#622ac356] px-4 py-4 rounded-t-2xl border-b-[0.5px] border-[#CEB0FA]">
              <View className="flex-row">
                <Text
                  style={{ fontFamily: "Poppins-Medium" }}
                  className="flex-1 text-xl text-gray-primary"
                >
                  Day
                </Text>
                <Text
                  style={{ fontFamily: "Poppins-Medium" }}
                  className="w-32 text-xl text-primary text-center"
                >
                  Hours & Breaks
                </Text>
                <Text
                  style={{ fontFamily: "Poppins-Medium" }}
                  className="w-16 text-xl text-primary text-center"
                >
                  Status
                </Text>
              </View>
            </View>

            {/* Schedule Rows */}
            {scheduleData.map((item, index) => (
              <View
                key={item.day}
                className={`px-4 py-4 ${
                  index !== scheduleData.length - 1
                    ? "border-b-[0.5px] border-[#CEB0FA]"
                    : ""
                }`}
              >
                <View className="flex-row">
                  {/* Day Column */}
                  <View className="flex-1">
                    <Text
                      className="text-base text-primary font-medium"
                      style={{ fontFamily: "Poppins-Medium" }}
                    >
                      {item.day}
                    </Text>
                  </View>

                  {/* Hours & Breaks Column */}
                  <View className="w-32">
                    {item.isOpen ? (
                      <View>
                        <Text className="text-sm text-primary text-center mb-1">
                          {item.opening} - {item.closing}
                        </Text>
                        {renderBreakTimes(item.breaks)}
                      </View>
                    ) : (
                      <Text className="text-sm text-gray-400 text-center italic">
                        Closed
                      </Text>
                    )}
                  </View>

                  {/* Status Column */}
                  <View className="w-16 items-center">
                    <View
                      className={`px-2 py-1 rounded-full ${
                        item.isOpen ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      <Text
                        className={`text-xs font-medium ${
                          item.isOpen ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {item.isOpen ? "Open" : "Closed"}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Summary Card */}
          <View className="mt-6 bg-white rounded-2xl p-4 border border-gray-200">
            <Text
              className="text-lg font-medium text-gray-800 mb-3"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Schedule Summary
            </Text>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Open Days:</Text>
              <Text className="font-medium text-primary">
                {scheduleData.filter((day) => day.isOpen).length} days
              </Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Total Break Times:</Text>
              <Text className="font-medium text-primary">
                {scheduleData.reduce(
                  (total, day) => total + day.breaks.length,
                  0
                )}{" "}
                breaks
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Longest Day:</Text>
              <Text className="font-medium text-primary">
                Monday - Friday (9 hours)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Button */}
      <View className="mx-5 mb-4">
        <ButtonPrimary
          text="Change Time"
          onPress={() => router.push("/provider-profile/edit-schedule")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
