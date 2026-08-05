# Glow Haus 💅✨

> A modern, feature-rich cross-platform beauty services marketplace and appointment management platform built as a monorepo.

**Contributor:** Anik ([@xyryc](https://github.com/xyryc))  
**License:** CC-BY-NC-4.0

---

## 🏗️ Monorepo Architecture

This repository is structured as an **npm monorepo** containing two main workspace projects at the root:

```
Glow-Haus/
├── app/                  # 📱 Mobile & Web App (Expo Router + React Native + TypeScript)
│   ├── app/              # Expo Router File-based Routes
│   ├── components/       # UI Components & Modules
│   ├── services/         # API Service Integrations
│   ├── store/            # State Management (Zustand)
│   ├── types/            # TypeScript Type Definitions
│   ├── app.config.js     # Expo Configuration
│   └── package.json      # @glow-haus/app package
│
├── backend/              # ⚡ Backend API Service (Express + TypeScript + Node.js)
│   ├── src/              # Express API Routes, Middlewares & Config
│   ├── package.json      # @glow-haus/backend package
│   └── tsconfig.json
│
├── package.json          # Root Monorepo configuration
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** >= 18
- **npm** >= 9
- **Expo Go** (for mobile physical device testing) or Android Studio / Xcode simulators.

---

### 📦 Installation

From the monorepo root directory:

```bash
# Install dependencies for root & all workspaces
npm install
```

---

## 📱 Running the App (`app`)

The mobile application is built using **Expo Router**, **React Native**, **TypeScript**, and **NativeWind (Tailwind CSS)**.

```bash
# Start the Expo development server
npm run start:app

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on Web
npm run web
```

---

## ⚡ Running the Backend (`backend`)

The backend service is built using **Express.js**, **TypeScript**, and **Zod**.

```bash
# Start backend in development mode (with hot-reload)
npm run start:backend

# Build backend for production
npm run build:backend
```

The backend server runs on `http://localhost:5000` with a health check endpoint at `http://localhost:5000/health`.

---

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International Public License (CC-BY-NC-4.0)**.  
Copyright (c) 2026 Anik ([@xyryc](https://github.com/xyryc)) - Glow Haus.
