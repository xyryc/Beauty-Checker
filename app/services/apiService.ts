import { AuthResponse, LoginRequest, RegisterRequest } from "@/types/auth";
import { MOCK_USERS } from "@/lib/constants";

// Mock API service - replace with real API calls later
export const apiService = {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock authentication logic
    const mockUser = MOCK_USERS[credentials.role];

    if (
      credentials.email === mockUser.email &&
      credentials.password === "password"
    ) {
      return {
        user: mockUser,
        token: `mock-token-${mockUser.id}-${Date.now()}`,
      };
    } else {
      throw new Error("Invalid credentials");
    }
  },

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock registration logic
    const newUser = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      role: userData.role,
    };

    return {
      user: newUser,
      token: `mock-token-${newUser.id}-${Date.now()}`,
    };
  },

  async logout(): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    // In real implementation, invalidate token on server
  },

  async refreshToken(token: string): Promise<{ token: string }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      token: `refreshed-${token}-${Date.now()}`,
    };
  },
};
