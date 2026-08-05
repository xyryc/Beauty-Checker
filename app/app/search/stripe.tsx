import Header from "@/components/Shared/Header";
import SafeScreen from "@/components/Shared/SafeScreen";
import React from "react";
import { Text } from "react-native";

const Stripe = () => {
  return (
    <SafeScreen>
      <Header text="Book" />

      <Text
        className="text-4xl font-medium text-center pt-10"
        style={{ fontFamily: "Poppins" }}
      >
        Stripe
      </Text>
    </SafeScreen>
  );
};

export default Stripe;
