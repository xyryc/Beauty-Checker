import BookingSection from "@/components/Booked/BookingSection";
import Header from "@/components/Shared/Header";
import ImageSliderAndService from "@/components/Shared/ImageSliderAndService";
import SafeScreen from "@/components/Shared/SafeScreen";
import { StatusBar } from "expo-status-bar";
import React from "react";

const ServiceDetailsScreen = () => {
  return (
    <SafeScreen>
      <StatusBar style="dark" />

      {/* header */}
      <Header text="Service Details" />

      {/* slider and service details */}
      <ImageSliderAndService />

      <BookingSection />
    </SafeScreen>
  );
};

export default ServiceDetailsScreen;
