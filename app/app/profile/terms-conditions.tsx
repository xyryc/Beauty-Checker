import Header from "@/components/Shared/Header";
import React from "react";
import { ScrollView, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TermsConditionsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <Header text="Terms & Conditions" />

      <ScrollView
        className="px-5 py-6"
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 1. Introduction */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">1. Introduction</Text>
          {"\n\n"}
          Welcome to **Glow Haus**! By accessing or using the
          Glow Haus app (the “App”), you agree to be bound by these Terms
          and Conditions (the “Terms”). If you do not agree with any part of the
          Terms, you must not use the App.
          {"\n\n"}
          These Terms apply to all users of the App – customers, salons and any
          other parties that access or use the services provided through the
          App.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 2. Account Registration */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">2. Account Registration</Text>
          {"\n\n"}
          To use certain features of the App you may need to create an account.
          You agree to:
          {"\n"}- Provide accurate, current and complete information during
          registration.
          {"\n"}- Keep your account credentials confidential and immediately
          notify us of any unauthorised use.
          {"\n"}- Be responsible for all activity that occurs under your
          account.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 3. User Responsibilities */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">3. User Responsibilities</Text>
          {"\n\n"}
          As a user of the App you agree to:
          {"\n"}- Use the App only for lawful purposes.
          {"\n"}- Not engage in any fraudulent, deceptive or harmful activity.
          {"\n"}- Not upload, post or share any content that infringes the
          rights of third parties or violates any law.
          {"\n"}- Be solely responsible for any information, content or material
          you share through the App.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 4. Services Provided */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">4. Services Provided</Text>
          {"\n\n"}
          Glow Haus is a marketplace that connects customers with
          independent beauty‑service providers (the “Salons”). The Salons are
          independent contractors and are solely responsible for delivering the
          booked services. Glow Haus does not guarantee the quality,
          performance or timing of any service.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 5. Payment & Fees */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">5. Payment & Fees</Text>
          {"\n\n"}
          **5.1 Booking fee** – For every booking a **total fee of 11 %** is
          applied to the gross amount charged by the Salon. The fee is split as
          follows:
          {"\n"}- **9 %** is retained by Glow Haus as a service fee.
          {"\n"}- **2 %** is converted into Loyalty Points for the customer
          (1 € = 1 000 points).
          {"\n\n"}
          **5.2 Loyalty‑Points** – Points are credited to the customer’s account
          immediately after a successful payment. Points may be used as a
          discount on the *next* booking only. The discount is calculated by
          converting the point balance back to euros (1 000 points = 1 €) and
          subtracting that amount from the next service’s price. The UI displays
          the original price struck‑through together with the discounted price.
          {"\n\n"}
          **5.3 Adjustable fee** – The total fee may be increased by
          Glow Haus at any time, provided that:
          {"\n"}- The new fee (up to a maximum of **13 %**) is clearly disclosed
          in the updated Terms & Conditions.
          {"\n"}- The change is communicated to both Salons and customers via
          the App (e.g., a push‑notification or an in‑app banner).
          {"\n"}- Existing bookings that were confirmed before the change remain
          subject to the fee that was in effect at the time of booking.
          {"\n\n"}
          **5.4 Payment processing** – All payments are processed through the
          App’s integrated payment gateway. By providing payment details you
          authorize Glow Haus to charge the applicable amount (service
          price + applicable fee) and to remit the appropriate portions to the
          Salon and to the Loyalty‑Points account.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 6. Privacy */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">6. Privacy</Text>
          {"\n\n"}
          We take your privacy seriously. Our Privacy Policy explains how we
          collect, use and disclose your personal data. By using the App, you
          consent to our Privacy Policy.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 7. Limitation of Liability */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">7. Limitation of Liability</Text>
          {"\n\n"}
          To the fullest extent permitted by law, Glow Haus shall not be
          liable for:
          {"\n"}- Any direct, indirect, incidental, special or consequential
          damages arising from your use or inability to use the App.
          {"\n"}- Any acts, omissions or content provided by the Salons or other
          users.
          {"\n"}- Any losses caused by third‑party services, payment processors
          or external integrations.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 8. Termination of Use */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">8. Termination of Use</Text>
          {"\n\n"}
          Glow Haus may suspend or terminate your account at its sole
          discretion if you:
          {"\n"}- Violate any provision of these Terms.
          {"\n"}- Engage in conduct that harms other users or the App’s
          operation.
          {"\n"}- Fail to comply with a request to remedy a breach.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 9. Changes to Terms */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">9. Changes to Terms</Text>
          {"\n\n"}
          Glow Haus reserves the right to modify, amend or replace any part
          of these Terms at any time. Changes will be posted within the App and
          the “Last Updated” date at the top of this page will be amended.
          Continued use of the App after such changes constitutes acceptance of
          the revised Terms.
          {"\n\n"}
          **Fee‑related changes** – In particular, any increase in the total
          booking fee (up to the 13 % cap) will be highlighted in the update
          notice and will take effect **30 days** after the notice is displayed.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 10. Governing Law */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">10. Governing Law</Text>
          {"\n\n"}
          These Terms are governed by and construed in accordance with the laws
          of **[Your Jurisdiction]**. Any dispute arising out of or relating to
          these Terms shall be subject to the exclusive jurisdiction of the
          courts located in **[Your Jurisdiction]**.
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 11. Contact Information */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">11. Contact Information</Text>
          {"\n\n"}
          If you have any questions about these Terms, please contact us at:
          {"\n"}- Email: **[Insert email address]**
          {"\n"}- Phone: **[Insert phone number]**
          {"\n"}- Address: **[Insert address]**
        </Text>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* 12. Acceptance of Terms */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <Text
          className="text-base text-accent mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          <Text className="font-bold">12. Acceptance of Terms</Text>
          {"\n\n"}
          By using the Glow Haus app, you acknowledge that you have read,
          understood and agree to be bound by these Terms and Conditions.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsConditionsScreen;
