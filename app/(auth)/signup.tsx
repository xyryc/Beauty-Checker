import SocialLogin from "@/components/Auth/SocialLogin";
import { storage } from "@/services/storage";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUp = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const insets = useSafeAreaInsets();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Load the selected role when component mounts
  useEffect(() => {
    const loadRole = async () => {
      const role = await storage.getSelectedRole();
      setSelectedRole(role);
      console.log("SignUp Screen Role:", role);
    };
    loadRole();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async () => {
    if (!selectedRole) {
      Alert.alert("Error", "Please select a role first");
      return;
    }

    // Validate form fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // Validate terms and privacy
    if (!acceptedTerms || !acceptedPrivacy) {
      Alert.alert(
        "Error",
        "Please accept the Terms & Conditions and Privacy Policy"
      );
      return;
    }

    setLoading(true);
    try {
      // Prepare user data
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: selectedRole,
      };

      // console.log(userData);

      // In a real app, you would call authService.register() here
      await storage.setAuthToken("dummy-auth-token");
      // await storage.setUserData(userData);

      // Navigate based on role
      if (selectedRole === "provider") {
        // Set provider status as pending verification
        // await storage.setProviderStatus("pending_verification");
        // Navigate to provider onboarding
        router.replace("/(auth)/onboarding");
      } else {
        // Regular users go straight to app
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error("Signup error:", error);
      Alert.alert("Error", "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView
        style={[
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            backgroundColor: "#ffffff",
          },
        ]}
      >
        <ScrollView
          contentContainerClassName="justify-between px-5 "
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true}
        >
          {/* Top container */}
          <View className="mt-[27px]">
            {/* header text */}
            <View className="items-center mb-8">
              <Text
                className="text-2xl font-medium mb-2 text-primary"
                style={{ fontFamily: "Poppins" }}
              >
                Hello!
              </Text>
              <Text
                className="text-sm placeholder:text-accent"
                style={{ fontFamily: "Poppins" }}
              >
                Welcome To Beaty Checker.
              </Text>
              <Text
                className="text-sm placeholder:text-accent"
                style={{ fontFamily: "Poppins" }}
              >
                Please Sign Up To Continue.
              </Text>
            </View>

            {/* Email, password fields */}
            <View>
              {/* Full name */}
              <View className="mb-6">
                <Text
                  className="text-lg font-medium mb-2 text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Full Name
                </Text>
                <TextInput
                  className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg placeholder:text-accent bg-white ${
                    Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                  }`}
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChangeText={(text) => handleInputChange("name", text)}
                  multiline={false}
                  scrollEnabled={false}
                />
              </View>

              {/* email */}
              <View className="mb-6">
                <Text
                  className="text-lg font-medium mb-2 text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Email
                </Text>
                <TextInput
                  className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg placeholder:text-accent bg-white ${
                    Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                  }`}
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Enter Your Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.email}
                  onChangeText={(text) => handleInputChange("email", text)}
                />
              </View>

              {/* phone */}
              <View className="mb-6">
                <Text
                  className="text-lg font-medium mb-2 text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Phone Number
                </Text>
                <TextInput
                  className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg placeholder:text-accent bg-white ${
                    Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                  }`}
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Enter Your Phone Number"
                  keyboardType="phone-pad"
                  value={formData.phone}
                  onChangeText={(text) => handleInputChange("phone", text)}
                />
              </View>

              {/* password */}
              <View className="mb-6">
                <Text
                  className="text-lg font-medium mb-2 text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Password
                </Text>
                <TextInput
                  className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg placeholder:text-accent bg-white ${
                    Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                  }`}
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Enter Your Password"
                  secureTextEntry
                  value={formData.password}
                  onChangeText={(text) => handleInputChange("password", text)}
                />
              </View>

              {/* confirm password */}
              <View className="mb-6">
                <Text
                  className="text-lg font-medium mb-2 text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  Confirm Password
                </Text>
                <TextInput
                  className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg placeholder:text-accent bg-white ${
                    Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                  }`}
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Confirm Your Password"
                  secureTextEntry
                  value={formData.confirmPassword}
                  onChangeText={(text) =>
                    handleInputChange("confirmPassword", text)
                  }
                />
              </View>

              {/* Terms & Privacy Checkboxes */}
              <View className="mb-4">
                {/* Terms & Conditions */}
                <TouchableOpacity
                  onPress={() => setAcceptedTerms(!acceptedTerms)}
                  className="flex-row items-center mb-3"
                >
                  <View
                    className={`w-5 h-5 border-2 rounded mr-3 items-center justify-center ${
                      acceptedTerms
                        ? "bg-primary border-primary"
                        : "border-[#A1A1A1]"
                    }`}
                  >
                    {acceptedTerms && (
                      <Ionicons name="checkmark" size={14} color="white" />
                    )}
                  </View>
                  <Text
                    className="text-sm flex-1"
                    style={{ fontFamily: "Poppins" }}
                  >
                    I agree to the{" "}
                    <Text className="text-link underline">
                      Terms & Conditions
                    </Text>
                  </Text>
                </TouchableOpacity>

                {/* Privacy Policy */}
                <TouchableOpacity
                  onPress={() => setAcceptedPrivacy(!acceptedPrivacy)}
                  className="flex-row items-center"
                >
                  <View
                    className={`w-5 h-5 border-2 rounded mr-3 items-center justify-center ${
                      acceptedPrivacy
                        ? "bg-primary border-primary"
                        : "border-[#A1A1A1]"
                    }`}
                  >
                    {acceptedPrivacy && (
                      <Ionicons name="checkmark" size={14} color="white" />
                    )}
                  </View>
                  <Text
                    className="text-sm flex-1"
                    style={{ fontFamily: "Poppins" }}
                  >
                    I agree to the{" "}
                    <Text className="text-link underline">Privacy Policy</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* social login */}
            <SocialLogin />
          </View>

          {/* Bottom container */}
          <View className="pt-16 pb-5">
            {/* Sign up button */}
            <TouchableOpacity
              onPress={handleSignUp}
              className="rounded-2xl overflow-hidden"
              disabled={loading || !acceptedTerms || !acceptedPrivacy}
              style={{
                opacity:
                  loading || !acceptedTerms || !acceptedPrivacy ? 0.5 : 1,
              }}
            >
              <LinearGradient
                colors={["#B78AF7", "#612AC3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="rounded-2xl"
              >
                <Text
                  className="text-white py-[14.5px] text-lg font-medium text-center"
                  style={{ fontFamily: "Poppins" }}
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Sign in link */}
            <View className="flex flex-row mt-6 justify-center gap-1">
              <Text className="text-sm" style={{ fontFamily: "Poppins" }}>
                Already Have An Account?
              </Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text
                  className="text-sm text-link"
                  style={{ fontFamily: "Poppins" }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
