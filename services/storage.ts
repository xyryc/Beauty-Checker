import { STORAGE_KEYS } from "@/utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
  // Onboarding
  async getOnboardingStatus(): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem(
        STORAGE_KEYS.ONBOARDING_COMPLETED
      );
      return value === "true";
    } catch (error) {
      console.error("Error getting onboarding status:", error);
      return false;
    }
  },

  async setOnboardingCompleted(): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETED, "true");
    } catch (error) {
      console.error("Error setting onboarding completed:", error);
    }
  },

  // Role Selection
  async getSelectedRole(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.SELECTED_ROLE);
    } catch (error) {
      console.error("Error getting selected role:", error);
      return null;
    }
  },

  async setSelectedRole(role: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SELECTED_ROLE, role);
    } catch (error) {
      console.error("Error setting selected role:", error);
    }
  },

  // Authentication
  async getAuthToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    } catch (error) {
      console.error("Error getting auth token:", error);
      return null;
    }
  },

  async setAuthToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    } catch (error) {
      console.error("Error setting auth token:", error);
    }
  },

  async getUserData(): Promise<any | null> {
    try {
      const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Error getting user data:", error);
      return null;
    }
  },

  async setUserData(user: any): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
    } catch (error) {
      console.error("Error setting user data:", error);
    }
  },

  // Clear all data
  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  },
};
