import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleSignin,
  isErrorWithCode,
  isNoSavedCredentialFoundResponse,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Configure Google Sign-In once
GoogleSignin.configure({
  webClientId: process.env.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  scopes: [
    /* what APIs you want to access on behalf of the user, default is email and profile
    this is just an example, most likely you don't need this option at all! */
    "https://www.googleapis.com/auth/drive.readonly",
  ],
  offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: "", // specifies a hosted domain restriction
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: "", // [Android] specifies an account name on the device that should be used
  iosClientId: process.env.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
  openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export interface AuthUser {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  givenName: string | null;
  familyName: string | null;
}

interface AuthState {
  user: AuthUser | null;
  idToken: string | null;
  accessToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;

  // Actions
  signInWithGoogle: () => Promise<void>;
  signInSilently: () => Promise<void>;
  signOut: () => Promise<void>;
  revokeAccess: () => Promise<void>;
  refreshTokens: () => Promise<void>;
  clearError: () => void;
  checkAuthStatus: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      idToken: null,
      accessToken: null,
      isLoading: false,
      isAuthenticated: false,
      error: null,

      /**
       * Sign in with Google
       */
      signInWithGoogle: async () => {
        set({ isLoading: true, error: null });

        try {
          // Check if device has Google Play Services (Android)
          await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
          });

          // Perform sign in
          const response = await GoogleSignin.signIn();

          if (isSuccessResponse(response)) {
            const { data } = response;

            // Get tokens
            const tokens = await GoogleSignin.getTokens();

            // Map user data
            const authUser: AuthUser = {
              id: data.user.id,
              name: data.user.name,
              email: data.user.email,
              photo: data.user.photo,
              givenName: data.user.givenName,
              familyName: data.user.familyName,
            };

            set({
              user: authUser,
              idToken: tokens.idToken,
              accessToken: tokens.accessToken,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });

            console.log("✅ Google Sign-In Success:", authUser);

            // TODO: Send idToken to your backend for verification
            // await authService.verifyGoogleToken(tokens.idToken);
          } else {
            // User cancelled sign-in
            set({
              isLoading: false,
              error: "Sign in was cancelled",
            });
          }
        } catch (error) {
          console.error("Google Sign-In Error:", error);
          let errorMessage = "An unknown error occurred";

          if (isErrorWithCode(error)) {
            switch (error.code) {
              case statusCodes.SIGN_IN_CANCELLED:
                errorMessage = "Sign in was cancelled";
                break;
              case statusCodes.IN_PROGRESS:
                errorMessage = "Sign in already in progress";
                break;
              case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                errorMessage = "Google Play Services not available";
                break;
              default:
                errorMessage = error.message || "Sign in failed";
            }
          }

          set({
            isLoading: false,
            error: errorMessage,
          });
        }
      },

      /**
       * Sign in silently (restore previous session)
       */
      signInSilently: async () => {
        set({ isLoading: true, error: null });

        try {
          const response = await GoogleSignin.signInSilently();

          if (isSuccessResponse(response)) {
            const { data } = response;

            // Get tokens
            const tokens = await GoogleSignin.getTokens();

            // Map user data
            const authUser: AuthUser = {
              id: data.user.id,
              name: data.user.name,
              email: data.user.email,
              photo: data.user.photo,
              givenName: data.user.givenName,
              familyName: data.user.familyName,
            };

            set({
              user: authUser,
              idToken: tokens.idToken,
              accessToken: tokens.accessToken,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });

            console.log("✅ Silent Sign-In Success:", authUser);
          } else if (isNoSavedCredentialFoundResponse(response)) {
            // No previous sign-in found
            set({
              isLoading: false,
              isAuthenticated: false,
            });
          }
        } catch (error) {
          console.error("Silent Sign-In Error:", error);
          set({
            isLoading: false,
            isAuthenticated: false,
            error: "Failed to restore session",
          });
        }
      },

      /**
       * Sign out
       */
      signOut: async () => {
        set({ isLoading: true });

        try {
          await GoogleSignin.signOut();

          set({
            user: null,
            idToken: null,
            accessToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });

          console.log("✅ Sign-Out Success");
        } catch (error) {
          console.error("Sign-Out Error:", error);
          set({
            isLoading: false,
            error: "Sign out failed",
          });
        }
      },

      /**
       * Revoke access (remove app from user's authorized apps)
       */
      revokeAccess: async () => {
        set({ isLoading: true });

        try {
          await GoogleSignin.revokeAccess();

          set({
            user: null,
            idToken: null,
            accessToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });

          console.log("✅ Access Revoked");
        } catch (error) {
          console.error("Revoke Access Error:", error);
          set({
            isLoading: false,
            error: "Failed to revoke access",
          });
        }
      },

      /**
       * Refresh tokens
       */
      refreshTokens: async () => {
        try {
          const tokens = await GoogleSignin.getTokens();

          set({
            idToken: tokens.idToken,
            accessToken: tokens.accessToken,
          });

          console.log("✅ Tokens Refreshed");
        } catch (error) {
          console.error("Refresh Tokens Error:", error);
          set({
            error: "Failed to refresh tokens",
          });
        }
      },

      /**
       * Clear error
       */
      clearError: () => {
        set({ error: null });
      },

      /**
       * Check authentication status on app start
       */
      checkAuthStatus: async () => {
        set({ isLoading: true });

        try {
          // Check if user previously signed in
          const hasPreviousSignIn = GoogleSignin.hasPreviousSignIn();

          if (hasPreviousSignIn) {
            // Get current user synchronously
            const currentUser = GoogleSignin.getCurrentUser();

            if (currentUser) {
              // User is cached, get tokens
              const tokens = await GoogleSignin.getTokens();

              const authUser: AuthUser = {
                id: currentUser.user.id,
                name: currentUser.user.name,
                email: currentUser.user.email,
                photo: currentUser.user.photo,
                givenName: currentUser.user.givenName,
                familyName: currentUser.user.familyName,
              };

              set({
                user: authUser,
                idToken: tokens.idToken,
                accessToken: tokens.accessToken,
                isAuthenticated: true,
                isLoading: false,
              });

              console.log("✅ User Already Signed In:", authUser);
            } else {
              // Try silent sign-in
              await get().signInSilently();
            }
          } else {
            set({
              isLoading: false,
              isAuthenticated: false,
            });
          }
        } catch (error) {
          console.error("Check Auth Status Error:", error);
          set({
            isLoading: false,
            isAuthenticated: false,
          });
        }
      },
    }),

    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      // Only persist user and authentication status
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
