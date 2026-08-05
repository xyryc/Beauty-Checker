import BookingSection from "@/components/Booking/BookingSection";
import Header from "@/components/Shared/Header";
import ImageSliderAndService from "@/components/Shared/ImageSliderAndService";
import SafeScreen from "@/components/Shared/SafeScreen";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView } from "react-native";

const ServiceDetailsScreen = () => {
  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* header */}
      <Header text="Service Details" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* slider and service details */}
        <ImageSliderAndService />

        <BookingSection />
      </ScrollView>
    </SafeScreen>
  );
};

export default ServiceDetailsScreen;
