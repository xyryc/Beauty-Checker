import Header from "@/components/Shared/Header";
import SafeScreen from "@/components/Shared/SafeScreen";
import React from "react";
import { ScrollView, Text } from "react-native";

const TermsConditionsScreen = () => {
  return (
    <SafeScreen>
      <Header text="Terms & Conditions" />

      <ScrollView className="px-5 py-6 mb-20">
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">1. Introduction</Text>
          {"\n\n"}
          Welcome to Beauty Checker! By accessing or using the Beauty Checker
          app, you agree to comply with and be bound by these Terms and
          Conditions. If you do not agree to these terms, you should not use the
          app.
          {"\n\n"}
          These Terms apply to all users of the app, including customers,
          service providers, and any other users who access or use the services
          provided by Beauty Checker.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">2. Account Registration</Text>
          {"\n\n"}
          To use the app, you may need to create an account. You agree to:
          {"\n"}- Provide accurate, current, and complete information during the
          registration process.
          {"\n"}- Maintain the security of your account and promptly notify us
          of any unauthorized use.
          {"\n"}- Be responsible for all activities under your account.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">3. User Responsibilities</Text>
          {"\n\n"}
          As a user of the Beauty Checker app, you agree to:
          {"\n"}- Use the app only for lawful purposes.
          {"\n"}- Not engage in any fraudulent or harmful activities.
          {"\n"}- Not upload, post, or share any content that violates any laws
          or the rights of others.
          {"\n"}- Be responsible for all information and content you share.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">4. Services Provided</Text>
          {"\n\n"}
          Beauty Checker allows users to book beauty services through the app.
          As a user, you agree that:
          {"\n"}- Service providers are independent contractors and are
          responsible for delivering the services.
          {"\n"}- Beauty Checker is not responsible for the quality,
          performance, or delivery of services.
          {"\n"}- The availability of services is subject to the discretion of
          service providers.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">5. Payment</Text>
          {"\n\n"}- Payments for services are made through the Beauty Checker
          app.
          {"\n"}- You agree to provide accurate payment information and
          authorize us to process payments.
          {"\n"}- Beauty Checker reserves the right to change pricing, cancel
          bookings, or apply additional charges at its discretion.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">6. Privacy</Text>
          {"\n\n"}
          We take your privacy seriously. Our Privacy Policy explains how we
          collect, use, and disclose your personal data. By using the app, you
          consent to our Privacy Policy.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">7. Limitation of Liability</Text>
          {"\n\n"}
          To the fullest extent permitted by law, Beauty Checker is not liable
          for:
          {"\n"}- Any direct, indirect, incidental, special, or consequential
          damages arising from the use of or inability to use the app.
          {"\n"}- Any content, actions, or omissions of service providers.
          {"\n"}- Any issues caused by third-party services or apps.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">8. Termination of Use</Text>
          {"\n\n"}
          Beauty Checker reserves the right to suspend or terminate your account
          if:
          {"\n"}- You violate these Terms and Conditions.
          {"\n"}- We believe that your actions are harmful to other users or the
          app itself.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">9. Changes to Terms</Text>
          {"\n\n"}
          Beauty Checker reserves the right to modify or update these Terms and
          Conditions at any time. We will notify you of any significant changes
          by updating the "Last Updated" date at the top of this page. By
          continuing to use the app after changes are made, you agree to the
          updated Terms.
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">10. Governing Law</Text>
          {"\n\n"}
          These Terms and Conditions are governed by and construed in accordance
          with the laws of [Your Jurisdiction]. Any disputes arising from the
          use of this app shall be subject to the exclusive jurisdiction of the
          courts located in [Your Jurisdiction].
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">11. Contact Information</Text>
          {"\n\n"}
          If you have any questions about these Terms and Conditions, please
          contact us at:
          {"\n"}- Email: [Insert email address]
          {"\n"}- Phone: [Insert phone number]
          {"\n"}- Address: [Insert address]
        </Text>

        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">12. Acceptance of Terms</Text>
          {"\n\n"}
          By using the Beauty Checker app, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions.
        </Text>
      </ScrollView>
    </SafeScreen>
  );
};

export default TermsConditionsScreen;
