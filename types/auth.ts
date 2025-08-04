export interface User {
  id: string;
  email: string;
  role: "customer" | "provider";
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  role: "customer" | "provider";
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role: "customer" | "provider";
}

export interface AuthResponse {
  user: User;
  token: string;
}
