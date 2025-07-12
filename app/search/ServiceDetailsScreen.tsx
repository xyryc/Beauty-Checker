import BookingSection from "@/components/BookingSection";
import Header from "@/components/Header";
import SafeScreen from "@/components/SafeScreen";
import ImageSliderAndService from "@/components/Shared/ImageSliderAndService";
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
