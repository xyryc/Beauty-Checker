import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScheduleScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const scheduleData = [
    { day: "Monday", opening: "09:00AM", closing: "04:00PM" },
    { day: "Tuesday", opening: "09:00AM", closing: "04:00PM" },
    { day: "Wednesday", opening: "09:00AM", closing: "04:00PM" },
    { day: "Thursday", opening: "09:00AM", closing: "04:00PM" },
    { day: "Friday", opening: "09:00AM", closing: "04:00PM" },
    { day: "Saturday", opening: "09:00AM", closing: "04:00PM" },
    { day: "Sunday", opening: "09:00AM", closing: "04:00PM" },
  ];

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

      {/* Main Content Container */}
      <View className="flex-1 mx-5 mt-8">
        {/* Schedule Container */}
        <View className="bg-[#ccaffc9c] rounded-2xl">
          {/* Table Header */}
          <View className="flex-row bg-[#622ac356] px-4 py-4 rounded-t-2xl border-b-[0.5px] border-[#CEB0FA]">
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="flex-1 text-xl text-gray-primary"
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
              className={`flex-row items-center text-primary px-4 py-4 ${
                index !== scheduleData.length - 1
                  ? "border-b-[0.5px] border-[#CEB0FA]"
                  : ""
              }`}
            >
              <Text className="flex-1 text-base text-primary">{item.day}</Text>
              <Text className="w-24 text-base text-primary text-center">
                {item.opening}
              </Text>
              <Text className="w-24 text-base text-primary text-center">
                {item.closing}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Fixed Bottom Button */}
      <View className="mx-5 mb-4">
        <ButtonPrimary
          text="Change Time"
          onPress={() => router.push("/provider-profile/EditScheduleScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
