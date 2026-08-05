/**
 * Points and Pricing Calculation Service
 * Handles all calculations related to loyalty points, pricing, and fee distribution
 */

// Configuration constants (can be adjusted by app developers)
export const PRICING_CONFIG = {
  APP_FEE_PERCENTAGE: 9, // App service fee (adjustable)
  LOYALTY_POINTS_PERCENTAGE: 2, // Points given to customer (adjustable)
  POINTS_TO_EURO_RATE: 1000, // 1 € = 1,000 points
  MIN_BOOKING_AMOUNT: 10, // Minimum booking amount in €
  MAX_POINTS_USAGE_PERCENTAGE: 100, // Max % of price that can be paid with points
};

// Calculate total platform fee
export const getTotalFeePercentage = (): number => {
  return (
    PRICING_CONFIG.APP_FEE_PERCENTAGE + PRICING_CONFIG.LOYALTY_POINTS_PERCENTAGE
  );
};

/**
 * Convert points to euros
 */
export const pointsToEuro = (points: number): number => {
  return points / PRICING_CONFIG.POINTS_TO_EURO_RATE;
};

/**
 * Convert euros to points
 */
export const euroToPoints = (euro: number): number => {
  return Math.round(euro * PRICING_CONFIG.POINTS_TO_EURO_RATE);
};

/**
 * Calculate loyalty points earned from a booking
 */
export const calculatePointsEarned = (bookingAmount: number): number => {
  const pointsInEuro =
    (bookingAmount * PRICING_CONFIG.LOYALTY_POINTS_PERCENTAGE) / 100;
  return euroToPoints(pointsInEuro);
};

/**
 * Calculate app fee from a booking
 */
export const calculateAppFee = (bookingAmount: number): number => {
  return (bookingAmount * PRICING_CONFIG.APP_FEE_PERCENTAGE) / 100;
};

/**
 * Calculate loyalty points amount in euros
 */
export const calculateLoyaltyPointsAmount = (bookingAmount: number): number => {
  return (bookingAmount * PRICING_CONFIG.LOYALTY_POINTS_PERCENTAGE) / 100;
};

/**
 * Calculate what provider receives after fees
 */
export const calculateProviderReceives = (bookingAmount: number): number => {
  const appFee = calculateAppFee(bookingAmount);
  const loyaltyAmount = calculateLoyaltyPointsAmount(bookingAmount);
  return bookingAmount - appFee - loyaltyAmount;
};

/**
 * Calculate maximum points that can be used for a booking
 */
export const calculateMaxUsablePoints = (
  bookingAmount: number,
  userPoints: number
): number => {
  const maxEuroDiscount =
    (bookingAmount * PRICING_CONFIG.MAX_POINTS_USAGE_PERCENTAGE) / 100;
  const maxPointsFromPrice = euroToPoints(maxEuroDiscount);
  return Math.min(userPoints, maxPointsFromPrice);
};

/**
 * Calculate final price after applying points discount
 */
export const calculateDiscountedPrice = (
  originalPrice: number,
  pointsToUse: number
): number => {
  const discount = pointsToEuro(pointsToUse);
  const finalPrice = originalPrice - discount;
  return Math.max(finalPrice, 0); // Ensure price doesn't go negative
};

/**
 * Validate if points can be used for a booking
 */
export const validatePointsUsage = (
  bookingAmount: number,
  pointsToUse: number,
  userPoints: number
): { valid: boolean; error?: string } => {
  // Check if user has enough points
  if (pointsToUse > userPoints) {
    return {
      valid: false,
      error: "Insufficient points balance",
    };
  }

  // Check if booking amount meets minimum
  if (bookingAmount < PRICING_CONFIG.MIN_BOOKING_AMOUNT) {
    return {
      valid: false,
      error: `Minimum booking amount is €${PRICING_CONFIG.MIN_BOOKING_AMOUNT}`,
    };
  }

  // Check if points usage doesn't exceed maximum allowed
  const maxUsablePoints = calculateMaxUsablePoints(bookingAmount, userPoints);
  if (pointsToUse > maxUsablePoints) {
    return {
      valid: false,
      error: `Maximum usable points for this booking is ${maxUsablePoints}`,
    };
  }

  return { valid: true };
};

/**
 * Complete booking calculation with all details
 */
export interface BookingCalculation {
  originalPrice: number;
  pointsToUse: number;
  pointsDiscount: number;
  finalPrice: number;
  appFee: number;
  loyaltyPointsAmount: number;
  loyaltyPointsEarned: number;
  providerReceives: number;
  totalFeePercentage: number;
}

export const calculateBookingDetails = (
  originalPrice: number,
  pointsToUse: number = 0
): BookingCalculation => {
  const pointsDiscount = pointsToEuro(pointsToUse);
  const finalPrice = calculateDiscountedPrice(originalPrice, pointsToUse);
  const appFee = calculateAppFee(originalPrice);
  const loyaltyPointsAmount = calculateLoyaltyPointsAmount(originalPrice);
  const loyaltyPointsEarned = calculatePointsEarned(originalPrice);
  const providerReceives = calculateProviderReceives(originalPrice);

  return {
    originalPrice,
    pointsToUse,
    pointsDiscount,
    finalPrice,
    appFee,
    loyaltyPointsAmount,
    loyaltyPointsEarned,
    providerReceives,
    totalFeePercentage: getTotalFeePercentage(),
  };
};

/**
 * Format points for display
 */
export const formatPoints = (points: number): string => {
  return points.toLocaleString();
};

/**
 * Format currency for display
 */
export const formatCurrency = (
  amount: number,
  currency: string = "€"
): string => {
  return `${currency}${amount.toFixed(2)}`;
};

/**
 * Get pricing breakdown as a formatted object for UI display
 */
export interface PricingBreakdown {
  servicePrice: string;
  pointsDiscount?: string;
  finalPrice: string;
  appFee: string;
  loyaltyAmount: string;
  providerAmount: string;
  pointsEarned: string;
}

export const getPricingBreakdown = (
  originalPrice: number,
  pointsToUse: number = 0
): PricingBreakdown => {
  const calculation = calculateBookingDetails(originalPrice, pointsToUse);

  const breakdown: PricingBreakdown = {
    servicePrice: formatCurrency(calculation.originalPrice),
    finalPrice: formatCurrency(calculation.finalPrice),
    appFee: formatCurrency(calculation.appFee),
    loyaltyAmount: formatCurrency(calculation.loyaltyPointsAmount),
    providerAmount: formatCurrency(calculation.providerReceives),
    pointsEarned: formatPoints(calculation.loyaltyPointsEarned),
  };

  if (pointsToUse > 0) {
    breakdown.pointsDiscount = formatCurrency(calculation.pointsDiscount);
  }

  return breakdown;
};

/**
 * Update fee percentages (app developers only)
 * This function should be called from admin panel/backend
 */
export const updateFeeStructure = (
  newAppFee: number,
  newLoyaltyFee: number
): { success: boolean; error?: string } => {
  // Validate fee ranges
  if (newAppFee < 0 || newAppFee > 15) {
    return {
      success: false,
      error: "App fee must be between 0% and 15%",
    };
  }

  if (newLoyaltyFee < 0 || newLoyaltyFee > 5) {
    return {
      success: false,
      error: "Loyalty fee must be between 0% and 5%",
    };
  }

  const totalFee = newAppFee + newLoyaltyFee;
  if (totalFee > 20) {
    return {
      success: false,
      error: "Total fee cannot exceed 20%",
    };
  }

  // In production, this should update the backend configuration
  // For now, we return success
  return {
    success: true,
  };
};
