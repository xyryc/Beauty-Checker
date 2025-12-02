import { storage } from "@/services/storage";
import { useAuthStore } from "@/store/authStore";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

const SocialLogin = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const { isAuthenticated, user, signInWithGoogle, error, clearError } =
    useAuthStore();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    const role = await storage.getSelectedRole();
    setSelectedRole(role);
    router.replace("/(tabs)");
  };

  return (
    <View className="mt-8">
      <Text
        className="text-primary mb-6 text-lg font-medium"
        style={{ fontFamily: "Poppins" }}
      >
        Continue With
      </Text>

      <View>
        {/* google login */}
        <TouchableOpacity
          onPress={handleGoogleSignIn}
          className={`py-4 items-center flex flex-row justify-center gap-2.5 border border-primary rounded-2xl bg-white mb-4 ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
        >
          <Image
            source={require("@/assets/images/google.png")}
            style={{ width: 24, height: 24 }}
          />

          <Text
            className="text-accent text-sm"
            style={{ fontFamily: "Poppins" }}
          >
            Google
          </Text>
        </TouchableOpacity>

        {/* apple login */}
        <View
          className={`py-4 items-center flex flex-row justify-center gap-2.5 border border-primary rounded-2xl bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
        >
          <Image
            source={require("@/assets/images/apple.png")}
            style={{ width: 24, height: 24 }}
          />

          <Text
            className="text-accent text-sm"
            style={{ fontFamily: "Poppins" }}
          >
            Apple
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SocialLogin;
