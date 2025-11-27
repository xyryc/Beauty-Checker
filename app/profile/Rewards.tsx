// File: app/settings/rewards.tsx
import Header from "@/components/Shared/Header";
import {
  PRICING_CONFIG,
  euroToPoints,
  formatCurrency,
  formatPoints,
  getTotalFeePercentage,
  pointsToEuro,
} from "@/services/pointsService";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RewardsScreen = () => {
  // Mock user data (should come from backend/storage)
  const userPoints = 1400;
  const pointsInEuro = pointsToEuro(userPoints);
  const totalBookings = 3;
  const totalSpent = 210; // €210

  // Mock transaction history
  const transactions = [
    {
      id: 1,
      type: "earned",
      points: 1400,
      amount: 70,
      date: "2025-01-10",
      service: "Hair Styling",
      provider: "Celeste Beauty",
    },
    {
      id: 2,
      type: "earned",
      points: 1000,
      amount: 50,
      date: "2025-01-05",
      service: "Manicure",
      provider: "Nail Art Studio",
    },
    {
      id: 3,
      type: "redeemed",
      points: -1400,
      amount: 90,
      date: "2025-01-03",
      service: "Facial Treatment",
      provider: "Spa Wellness",
    },
  ];

  // Example calculation values
  const exampleBookingAmount = 70;
  const exampleLoyaltyEuro =
    (exampleBookingAmount * PRICING_CONFIG.LOYALTY_POINTS_PERCENTAGE) / 100;
  const exampleLoyaltyPoints = euroToPoints(exampleLoyaltyEuro);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <Header text="Rewards & Points" />

      <ScrollView className="flex-1">
        {/* Points Balance Card */}
        <View className="px-5 mt-6">
          <LinearGradient
            colors={["#B78AF7", "#612AC3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 16,
              padding: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative stars */}
            <View
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                opacity: 0.3,
              }}
            >
              <AntDesign name="star" size={16} color="white" />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 50,
                left: 30,
                opacity: 0.3,
              }}
            >
              <AntDesign name="star" size={12} color="white" />
            </View>

            <View
              style={{
                position: "absolute",
                bottom: 30,
                right: 30,
                opacity: 0.25,
              }}
            >
              <AntDesign name="star" size={20} color="white" />
            </View>
            <View
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.3,
              }}
            >
              <AntDesign name="star" size={12} color="white" />
            </View>
            <View
              style={{
                position: "absolute",
                top: 80,
                right: 40,
                opacity: 0.3,
              }}
            >
              <AntDesign name="star" size={16} color="white" />
            </View>

            <View
              style={{
                position: "absolute",
                top: 80,
                left: 30,
                opacity: 0.2,
              }}
            >
              <AntDesign name="star" size={12} color="white" />
            </View>

            <View className="items-center">
              {/* Title with crown icon */}
              <View className="flex-row items-center justify-center mb-3">
                <Image
                  source={require("@/assets/images/diadem.png")}
                  style={{ width: 24, height: 24, marginRight: 8 }}
                  contentFit="contain"
                />
                <Text
                  className="text-white text-sm"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  Your Points Balance
                </Text>
              </View>

              {/* Points number with glow effect */}
              <View className="relative items-center mb-1">
                <Text
                  className="text-white text-5xl font-bold"
                  style={{
                    fontFamily: "Poppins-Bold",
                    textShadowColor: "rgba(255, 255, 255, 0.3)",
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 15,
                  }}
                >
                  {formatPoints(userPoints)}
                </Text>
              </View>

              <Text
                className="text-white/90 text-base mb-4"
                style={{ fontFamily: "Poppins" }}
              >
                loyalty points
              </Text>

              {/* Enhanced discount badge */}
              <View
                className="mt-2 px-6 py-3 rounded-full flex-row items-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                }}
              >
                <AntDesign
                  name="gift"
                  size={18}
                  color="white"
                  style={{ marginRight: 8 }}
                />
                <Text
                  className="text-white text-lg font-semibold"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  {formatCurrency(pointsInEuro)} discount
                </Text>
              </View>

              {/* Small helper text */}
              <Text
                className="text-white/70 text-xs mt-3"
                style={{ fontFamily: "Poppins" }}
              >
                Use on your next booking
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Stats */}
        <View className="flex-row px-5 mt-6 gap-3 hidden">
          <View className="flex-1 bg-purple-50 p-4 rounded-lg">
            <Text
              className="text-accent text-sm mb-1"
              style={{ fontFamily: "Poppins" }}
            >
              Total Bookings
            </Text>
            <Text
              className="text-primary text-2xl font-semibold"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              {totalBookings}
            </Text>
          </View>
          <View className="flex-1 bg-purple-50 p-4 rounded-lg">
            <Text
              className="text-accent text-sm mb-1"
              style={{ fontFamily: "Poppins" }}
            >
              Total Spent
            </Text>
            <Text
              className="text-primary text-2xl font-semibold"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              {formatCurrency(totalSpent)}
            </Text>
          </View>
        </View>

        {/* How It Works */}
        <View className="px-5 mt-8 mb-8">
          <Text
            className="text-lg font-semibold text-primary mb-4"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            How Rewards Work
          </Text>

          <View className="bg-blue-50 p-4 rounded-lg mb-3">
            <View className="flex-row items-start">
              <AntDesign name="star" size={20} color="#612AC3" />
              <View className="flex-1 ml-3">
                <Text
                  className="text-primary font-medium mb-1"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  Earn {PRICING_CONFIG.LOYALTY_POINTS_PERCENTAGE}% on Every
                  Booking
                </Text>
                <Text
                  className="text-accent text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  For every booking you make, you earn{" "}
                  {PRICING_CONFIG.LOYALTY_POINTS_PERCENTAGE}% of the booking
                  amount as loyalty points.
                </Text>
              </View>
            </View>
          </View>

          <View className="bg-green-50 p-4 rounded-lg mb-3">
            <View className="flex-row items-start">
              <AntDesign name="gift" size={20} color="#10B981" />
              <View className="flex-1 ml-3">
                <Text
                  className="text-primary font-medium mb-1"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  1 € = {formatPoints(PRICING_CONFIG.POINTS_TO_EURO_RATE)}{" "}
                  Points
                </Text>
                <Text
                  className="text-accent text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  Points can be redeemed for discounts on your next booking. The
                  conversion rate is{" "}
                  {formatPoints(PRICING_CONFIG.POINTS_TO_EURO_RATE)} points =
                  €1.
                </Text>
              </View>
            </View>
          </View>

          <View className="bg-purple-50 p-4 rounded-lg mb-3">
            <View className="flex-row items-start">
              <AntDesign name="calculator" size={20} color="#612AC3" />
              <View className="flex-1 ml-3">
                <Text
                  className="text-primary font-medium mb-1"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  Example Calculation
                </Text>
                <Text
                  className="text-accent text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  Book a {formatCurrency(exampleBookingAmount)} service → Earn{" "}
                  {PRICING_CONFIG.LOYALTY_POINTS_PERCENTAGE}% ={" "}
                  {formatCurrency(exampleLoyaltyEuro)} → Get{" "}
                  {formatPoints(exampleLoyaltyPoints)} points
                </Text>
              </View>
            </View>
          </View>

          <View className="bg-blue-50 p-4 rounded-lg">
            <View className="flex-row items-start">
              <Ionicons name="information-circle" size={20} color="#3b82f6" />
              <View className="flex-1 ml-3">
                <Text
                  className="text-primary font-medium mb-1"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  No Expiration
                </Text>
                <Text
                  className="text-accent text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  Your points never expire! Use them whenever you're ready for
                  your next booking.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Transaction History */}
        <View className="px-5 mt-8 mb-8 hidden">
          <Text
            className="text-lg font-semibold text-primary mb-4"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Points History
          </Text>

          {transactions.map((transaction) => (
            <View
              key={transaction.id}
              className="bg-white border border-gray-200 rounded-lg p-4 mb-3"
            >
              <View className="flex-row justify-between items-start mb-2">
                <View className="flex-1">
                  <Text
                    className="text-primary font-medium"
                    style={{ fontFamily: "Poppins-Medium" }}
                  >
                    {transaction.service}
                  </Text>
                  <Text
                    className="text-accent text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {transaction.provider}
                  </Text>
                </View>
                <View className="items-end">
                  <Text
                    className={`font-semibold text-base ${
                      transaction.type === "earned"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                    style={{ fontFamily: "Poppins-SemiBold" }}
                  >
                    {transaction.type === "earned" ? "+" : ""}
                    {formatPoints(transaction.points)}
                  </Text>
                  <Text
                    className="text-accent text-xs"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {transaction.type === "earned" ? "earned" : "used"}
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-between items-center pt-2 border-t border-gray-100">
                <Text
                  className="text-accent text-xs"
                  style={{ fontFamily: "Poppins" }}
                >
                  {new Date(transaction.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
                <Text
                  className="text-accent text-xs"
                  style={{ fontFamily: "Poppins" }}
                >
                  Booking: {formatCurrency(transaction.amount)}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Fee Structure Information */}
        <View className="px-5 mb-8">
          <View className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <Text
              className="text-primary font-medium mb-2"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Platform Fee Structure
            </Text>
            <Text
              className="text-accent text-xs mb-3"
              style={{ fontFamily: "Poppins" }}
            >
              Total platform fee: {getTotalFeePercentage()}% per booking
            </Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text
                  className="text-accent text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  • App Service Fee
                </Text>
                <Text
                  className="text-accent text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  {PRICING_CONFIG.APP_FEE_PERCENTAGE}%
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text
                  className="text-accent text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  • Your Loyalty Points
                </Text>
                <Text
                  className="text-green-600 text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  {PRICING_CONFIG.LOYALTY_POINTS_PERCENTAGE}%
                </Text>
              </View>
              <View className="flex-row justify-between pt-2 border-t border-gray-200">
                <Text
                  className="text-primary text-sm font-medium"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  Provider Receives
                </Text>
                <Text
                  className="text-primary text-sm font-medium"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  {100 - getTotalFeePercentage()}%
                </Text>
              </View>
            </View>
            <Text
              className="text-accent text-xs mt-3 italic"
              style={{ fontFamily: "Poppins" }}
            >
              *Fees may be adjusted as per Terms & Conditions
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RewardsScreen;
