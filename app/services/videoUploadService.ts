export const VIDEO_CONFIG = {
  FREE_VIDEO_LIMIT: 5, // Free videos allowed
  MAX_VIDEO_DURATION: 60, // seconds
  MAX_VIDEO_SIZE: 100, // MB
  SUBSCRIPTION_PRICE: 14.99, // Monthly subscription price
};

export interface VideoUploadQuota {
  totalVideos: number;
  freeLimit: number;
  isSubscribed: boolean;
  remainingFreeUploads: number;
  canUpload: boolean;
}

/**
 * Check if user can upload more videos
 */
export const checkVideoUploadQuota = (
  totalVideosUploaded: number,
  isSubscribed: boolean
): VideoUploadQuota => {
  const remainingFreeUploads = Math.max(
    0,
    VIDEO_CONFIG.FREE_VIDEO_LIMIT - totalVideosUploaded
  );

  const canUpload =
    isSubscribed || totalVideosUploaded < VIDEO_CONFIG.FREE_VIDEO_LIMIT;

  return {
    totalVideos: totalVideosUploaded,
    freeLimit: VIDEO_CONFIG.FREE_VIDEO_LIMIT,
    isSubscribed,
    remainingFreeUploads,
    canUpload,
  };
};

/**
 * Validate video before upload
 */
export const validateVideo = (
  durationInSeconds: number,
  sizeInMB: number
): { valid: boolean; error?: string } => {
  if (durationInSeconds > VIDEO_CONFIG.MAX_VIDEO_DURATION) {
    return {
      valid: false,
      error: `Video must be under ${VIDEO_CONFIG.MAX_VIDEO_DURATION} seconds`,
    };
  }

  if (sizeInMB > VIDEO_CONFIG.MAX_VIDEO_SIZE) {
    return {
      valid: false,
      error: `Video size must be under ${VIDEO_CONFIG.MAX_VIDEO_SIZE}MB`,
    };
  }

  return { valid: true };
};

/**
 * Get subscription benefits text
 */
export const getSubscriptionBenefits = (): string[] => {
  return [
    "Unlimited video uploads",
    "Priority support",
    "Advanced analytics",
    "Get featured in people's feed",
  ];
};
