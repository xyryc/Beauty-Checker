import Header from "@/components/Header";
import SafeScreen from "@/components/SafeScreen";
import React from "react";
import { ScrollView, Text } from "react-native";

const PrivacyPolicyScreen = () => {
  return (
    <SafeScreen>
      <Header text="Privacy Policy" />

      <ScrollView className="px-5 py-6 mb-20">
        <Text className="text-lg font-semibold text-primary mb-2">
          Introduction
        </Text>
        <Text className="text-base text-accent mb-4">
          Welcome to Beauty Checker, a service booking app ("we," "our," or
          "us"). We respect your privacy and are committed to protecting your
          personal data. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our mobile
          application ("Beauty Checker" or "the App"). Please read this policy
          carefully to understand how we handle your personal data.
        </Text>

        <Text className="text-lg font-semibold text-primary mb-2">
          Information We Collect
        </Text>
        <Text className="text-base text-accent mb-4">
          We collect the following types of information when you use the Beauty
          Checker app:
        </Text>
        <Text className="text-base text-accent mb-2">
          1. <Text className="font-semibold">Personal Information</Text>: When
          you create an account, book services, or interact with the app, we may
          collect the following personal information: Name, Email, Phone number,
          Address, Payment information, Profile image (optional)
        </Text>
        <Text className="text-base text-accent mb-2">
          2. <Text className="font-semibold">Usage Information</Text>: We
          collect data about how you interact with the app, including: Device
          information, Location information, Log data
        </Text>

        <Text className="text-lg font-semibold text-primary mb-2">
          How We Use Your Information
        </Text>
        <Text className="text-base text-accent mb-4">
          We use the information we collect to:
        </Text>
        <Text className="text-base text-accent mb-2">
          - Provide and maintain the app
        </Text>
        <Text className="text-base text-accent mb-2">
          - Process bookings and payments
        </Text>
        <Text className="text-base text-accent mb-2">
          - Respond to your inquiries
        </Text>
        <Text className="text-base text-accent mb-4">
          - Improve services, etc.
        </Text>

        <Text className="text-lg font-semibold text-primary mb-2">
          How We Share Your Information
        </Text>
        <Text className="text-base text-accent mb-4">
          We may share your information with third-party service providers and
          legal authorities in certain situations.
        </Text>

        <Text className="text-lg font-semibold text-primary mb-2">
          Data Security
        </Text>
        <Text className="text-base text-accent mb-4">
          We take appropriate technical and organizational measures to protect
          your data. However, no system is completely secure.
        </Text>

        <Text className="text-lg font-semibold text-primary mb-2">
          Your Rights
        </Text>
        <Text className="text-base text-accent mb-4">
          You have the right to access, correct, or delete your personal data.
          Contact us for any privacy-related concerns.
        </Text>

        <Text className="text-lg font-semibold text-primary mb-2">
          Changes to This Policy
        </Text>
        <Text className="text-base text-accent mb-4">
          We may update this Privacy Policy from time to time. Any significant
          changes will be communicated to you.
        </Text>

        <Text className="text-lg font-semibold text-primary mb-2">
          Contact Us
        </Text>
        <Text className="text-base text-accent mb-4">
          If you have any questions, please contact us at
          contact@beautychecker.com.
        </Text>
      </ScrollView>
    </SafeScreen>
  );
};

export default PrivacyPolicyScreen;
