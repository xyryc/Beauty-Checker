import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  SELECTED_ROLE: "selected_role",
  ONBOARDING_COMPLETED: "onboarding_completed",
};

export const storage = {
  // Auth token
  async setAuthToken(token: string): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  async getAuthToken(): Promise<string | null> {
    return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  async removeAuthToken(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  // User data
  async setUserData(data: any): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(data));
  },

  async getUserData(): Promise<any | null> {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  },

  async removeUserData(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);
  },

  // Selected role
  async setSelectedRole(role: string): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.SELECTED_ROLE, role);
  },

  async getSelectedRole(): Promise<string | null> {
    return await AsyncStorage.getItem(STORAGE_KEYS.SELECTED_ROLE);
  },

  async removeSelectedRole(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.SELECTED_ROLE);
  },

  // Onboarding status
  async setOnboardingStatus(completed: boolean): Promise<void> {
    await AsyncStorage.setItem(
      STORAGE_KEYS.ONBOARDING_COMPLETED,
      JSON.stringify(completed)
    );
  },

  async getOnboardingStatus(): Promise<boolean> {
    const status = await AsyncStorage.getItem(
      STORAGE_KEYS.ONBOARDING_COMPLETED
    );
    return status ? JSON.parse(status) : false;
  },

  async removeOnboardingStatus(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.ONBOARDING_COMPLETED);
  },

  // Clear all storage
  async clearAll(): Promise<void> {
    await AsyncStorage.clear();
  },
};
