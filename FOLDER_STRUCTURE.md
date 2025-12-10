# Project Folder Structure & Naming Conventions

## Overview
This document outlines the standardized folder structure and naming conventions for the Beauty Checker app.

## Naming Conventions

### 1. **Route Files (app/ directory)**
- **Convention**: kebab-case
- **Example**: `role-selection.tsx`, `forgot-password.tsx`, `edit-profile.tsx`
- **Rationale**: Follows Expo Router convention for file-based routing

### 2. **Component Files (components/ directory)**
- **Convention**: PascalCase
- **Example**: `SocialLogin.tsx`, `CategoryCard.tsx`, `ButtonPrimary.tsx`
- **Rationale**: Standard React component naming

### 3. **Service Files (services/ directory)**
- **Convention**: camelCase with "Service" suffix
- **Example**: `authService.ts`, `apiService.ts`, `storageService.ts`
- **Rationale**: Clear distinction from components, follows service pattern

### 4. **Type Files (types/ directory)**
- **Convention**: camelCase for filenames, PascalCase for type/interface names
- **Example**: `auth.ts` (contains `User`, `LoginRequest`)
- **Rationale**: Standard TypeScript convention

### 5. **Utility/Library Files (lib/ directory)**
- **Convention**: camelCase
- **Example**: `constants.ts`, `helpers.ts`
- **Rationale**: JavaScript/TypeScript standard

### 6. **Hook Files (hooks/ directory)**
- **Convention**: camelCase with "use" prefix
- **Example**: `useAuth.ts`, `useBooking.ts`
- **Rationale**: React hooks naming standard

## Folder Structure

```
beauty-checker/
├── app/                          # Expo Router - all route files
│   ├── (auth)/                   # Auth group routes
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   ├── forgot-password.tsx
│   │   ├── verify-code.tsx
│   │   └── change-password.tsx
│   ├── (tabs)/                   # Tab navigation routes
│   │   ├── _layout.tsx
│   │   ├── index.tsx             # Discover/Home feed
│   │   ├── search.tsx
│   │   ├── chat.tsx
│   │   ├── customer-booking.tsx
│   │   ├── customer-profile.tsx
│   │   ├── provider-booking.tsx
│   │   └── provider-profile.tsx
│   ├── chat/
│   │   └── chat-detail.tsx       # Individual chat screen
│   ├── customer-booking/
│   │   └── booked-details.tsx
│   ├── customer-profile/
│   │   ├── edit-profile.tsx
│   │   └── settings-activity.tsx
│   ├── discover/
│   │   ├── customer-notification.tsx
│   │   ├── provider-notification.tsx
│   │   └── saved.tsx
│   ├── profile/                  # Shared profile screens
│   │   ├── notification.tsx
│   │   ├── password-change.tsx
│   │   ├── privacy-policy.tsx
│   │   ├── rewards.tsx
│   │   ├── settings.tsx
│   │   └── terms-conditions.tsx
│   ├── provider-booking/
│   │   ├── accept-request.tsx
│   │   ├── cancelled.tsx
│   │   ├── client-profile.tsx
│   │   ├── completed.tsx
│   │   ├── new-request.tsx
│   │   └── reschedule.tsx
│   ├── provider-profile/
│   │   ├── add-photo.tsx
│   │   ├── add-service.tsx
│   │   ├── add-video.tsx
│   │   ├── edit-profile.tsx
│   │   ├── edit-schedule.tsx
│   │   ├── profile.tsx
│   │   ├── schedule.tsx
│   │   └── settings-activity.tsx
│   ├── search/
│   │   ├── photo-post/
│   │   │   └── [id].tsx          # Dynamic route
│   │   ├── service-review/
│   │   │   └── [id].tsx
│   │   ├── top-services/
│   │   │   └── [id].tsx
│   │   ├── search-result.tsx
│   │   ├── service-details.tsx
│   │   └── stripe.tsx
│   ├── _layout.tsx               # Root layout
│   ├── index.tsx                 # App entry point
│   ├── splash.tsx
│   ├── role-selection.tsx
│   ├── onboarding.tsx
│   └── globals.css
│
├── components/                   # Reusable UI components
│   ├── Auth/
│   │   └── SocialLogin.tsx
│   ├── Booking/
│   │   ├── BookingSection.tsx
│   │   ├── BookingStatus.tsx
│   │   ├── CancelledCards.tsx
│   │   ├── CompletedCards.tsx
│   │   └── PendingCards.tsx
│   ├── Chat/
│   │   ├── ChatListItem.tsx
│   │   └── ChatScreenModal.tsx
│   ├── Discover/
│   │   ├── CommentModal.tsx
│   │   ├── DiscoverHeader.tsx
│   │   ├── PhotoCarousel.tsx
│   │   ├── PostActions.tsx
│   │   ├── PostInfo.tsx
│   │   └── VideoPlayer.tsx
│   ├── Profile/
│   │   ├── ProfileHeader.tsx
│   │   └── SavedServices.tsx
│   ├── Search/
│   │   ├── CategoryCard.tsx
│   │   ├── LocationSearch.tsx
│   │   ├── SearchHeader.tsx
│   │   └── TopServices.tsx
│   └── Shared/                   # Common/shared components
│       ├── AboutCard.tsx
│       ├── ButtonCancel.tsx
│       ├── ButtonPrimary.tsx
│       ├── ButtonSecondary.tsx
│       ├── ButtonSmall.tsx
│       ├── ButtonSmallOutline.tsx
│       ├── CancelModal.tsx
│       ├── CommonCard.tsx
│       ├── CustomTabBar.tsx
│       ├── DateTimeSlot.tsx
│       ├── Header.tsx
│       ├── ImagePost.tsx
│       ├── ImageSlider.tsx
│       ├── ImageSliderAndService.tsx
│       ├── LogoutModal.tsx
│       ├── RenderPhotosCard.tsx
│       ├── RenderVideosCard.tsx
│       ├── SafeScreen.tsx
│       ├── ShareModal.tsx
│       ├── SubscriptionModal.tsx
│       └── VideoPost.tsx
│
├── services/                     # Business logic & API calls
│   ├── apiService.ts             # API client
│   ├── authService.ts            # Authentication logic
│   ├── pointsService.ts          # Points/rewards logic
│   ├── storageService.ts         # Local storage wrapper
│   └── videoUploadService.ts     # Video upload logic
│
├── store/                        # State management (Zustand)
│   └── authStore.ts
│
├── types/                        # TypeScript type definitions
│   ├── auth.ts
│   ├── types.ts
│   └── user.ts
│
├── lib/                          # Utilities & helpers
│   └── constants.ts              # App constants
│
├── hooks/                        # Custom React hooks (to be added)
│   └── (future custom hooks)
│
├── assets/                       # Static assets
│   ├── data/                     # Mock/sample data
│   │   ├── bookingRequests.json
│   │   └── posts.json
│   ├── fonts/
│   └── images/
│
├── credentials/                  # Credentials (gitignored)
│
└── [config files]               # Root config files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── babel.config.js
    ├── metro.config.js
    └── etc.
```

## Key Changes Made

### Service Files Renamed:
- `services/auth.ts` → `services/authService.ts`
- `services/api.ts` → `services/apiService.ts`
- `services/storage.ts` → `services/storageService.ts`

### Screen Files Renamed (kebab-case):
- All screen files in `app/` directory converted to kebab-case
- Examples:
  - `ChatScreen.tsx` → `chat-detail.tsx`
  - `BookedDetailsScreen.tsx` → `booked-details.tsx`
  - `AcceptRequestScreen.tsx` → `accept-request.tsx`
  - `SettingsActivityScreen.tsx` → `settings-activity.tsx`

### Folder Reorganization:
- `utils/` → `lib/` (more standard naming)
- Created `hooks/` folder for future custom hooks
- Moved `onboarding.tsx` from `app/(auth)/` to `app/` root

## Import Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

```typescript
"@/*": ["./*"]
```

This allows imports like:
```typescript
import { storage } from "@/services/storageService";
import { Button } from "@/components/Shared/ButtonPrimary";
import { MOCK_USERS } from "@/lib/constants";
```

## Best Practices

1. **Route Files**: Keep route files thin - delegate logic to components and services
2. **Components**: Should be reusable and follow single responsibility principle
3. **Services**: Handle all business logic and external API calls
4. **Types**: Define interfaces and types close to where they're used, or in shared types folder
5. **Hooks**: Extract reusable logic into custom hooks
6. **Constants**: Keep all magic values and configuration in constants file

## Future Improvements

1. Add custom hooks to `hooks/` folder
2. Consider splitting `types/types.ts` into more specific files
3. Add API error handling utilities to `lib/`
4. Create validation utilities for forms
5. Add test files alongside components (e.g., `ComponentName.test.tsx`)
