export interface User {
  id: string;
  email: string;
  role: "employee" | "admin";
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  role: "employee" | "admin";
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role: "employee" | "admin";
}

export interface AuthResponse {
  user: User;
  token: string;
}
