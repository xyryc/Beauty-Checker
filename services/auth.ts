import { LoginRequest, RegisterRequest, User } from "@/types/auth";
import { apiService } from "./api";
import { storage } from "./storage";

export const authService = {
  async login(
    credentials: LoginRequest
  ): Promise<{ user: User; token: string }> {
    try {
      const response = await apiService.login(credentials);

      // Store auth data
      await storage.setAuthToken(response.token);
      await storage.setUserData(response.user);

      return response;
    } catch (error) {
      throw error;
    }
  },

  async register(
    userData: RegisterRequest
  ): Promise<{ user: User; token: string }> {
    try {
      const response = await apiService.register(userData);

      // Store auth data
      await storage.setAuthToken(response.token);
      await storage.setUserData(response.user);

      return response;
    } catch (error) {
      throw error;
    }
  },

  async logout(): Promise<void> {
    try {
      await apiService.logout();
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      // Always clear local storage
      await storage.clearAll();
    }
  },

  async checkAuthStatus(): Promise<{
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
  }> {
    try {
      const [token, user] = await Promise.all([
        storage.getAuthToken(),
        storage.getUserData(),
      ]);

      return {
        isAuthenticated: !!(token && user),
        user,
        token,
      };
    } catch (error) {
      console.error("Error checking auth status:", error);
      return {
        isAuthenticated: false,
        user: null,
        token: null,
      };
    }
  },
};
