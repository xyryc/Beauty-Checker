export const ROLES = {
  EMPLOYEE: "employee" as const,
  ADMIN: "admin" as const,
};

export const STORAGE_KEYS = {
  ONBOARDING_COMPLETED: "onboarding_completed",
  SELECTED_ROLE: "selected_role",
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
};

export const API_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  REFRESH: "/auth/refresh",
};

// Placeholder data for development
export const MOCK_USERS = {
  employee: {
    id: "1",
    email: "employee@example.com",
    name: "John Employee",
    role: "employee" as const,
  },
  admin: {
    id: "2",
    email: "admin@example.com",
    name: "Jane Admin",
    role: "admin" as const,
  },
};
