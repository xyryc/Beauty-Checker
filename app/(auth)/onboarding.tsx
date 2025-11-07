// File: app/(provider)/onboarding.tsx
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type OnboardingStep = 1 | 2 | 3 | 4;

interface DocumentFile {
  name: string;
  uri: string;
  size?: number;
  mimeType?: string;
}

const ProviderOnboarding = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [loading, setLoading] = useState(false);

  // Form data for all steps
  const [businessInfo, setBusinessInfo] = useState({
    companyName: "",
    registrationNumber: "",
    taxNumber: "",
    vatId: "",
  });

  const [documents, setDocuments] = useState({
    qualifications: null as DocumentFile | null,
    insurance: null as DocumentFile | null,
  });

  const [serviceInfo, setServiceInfo] = useState({
    categories: [] as string[],
    description: "",
  });

  const [bankingInfo, setBankingInfo] = useState({
    accountHolder: "",
    iban: "",
    bankName: "",
  });

  // Available service categories
  const availableCategories = [
    "Hair Styling",
    "Nail Care",
    "Massage",
    "Facial Treatment",
    "Makeup",
    "Spa Services",
  ];

  const handleDocumentPick = async (type: "qualifications" | "insurance") => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/*"],
        copyToCacheDirectory: true,
      });

      if (result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        setDocuments((prev) => ({
          ...prev,
          [type]: {
            name: file.name,
            uri: file.uri,
            size: file.size,
            mimeType: file.mimeType,
          },
        }));
      }
    } catch (error) {
      console.error("Error picking document:", error);
      Alert.alert("Error", "Failed to pick document");
    }
  };

  const toggleCategory = (category: string) => {
    setServiceInfo((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const validateStep = (step: OnboardingStep): boolean => {
    switch (step) {
      case 1:
        if (!businessInfo.registrationNumber || !businessInfo.taxNumber) {
          Alert.alert("Error", "Please fill all business information");
          return false;
        }
        return true;
      case 2:
        if (!documents.qualifications || !documents.insurance) {
          Alert.alert("Error", "Please upload all required documents");
          return false;
        }
        return true;
      case 3:
        if (serviceInfo.categories.length === 0 || !serviceInfo.description) {
          Alert.alert(
            "Error",
            "Please select at least one category and add a description"
          );
          return false;
        }
        return true;
      case 4:
        if (
          !bankingInfo.accountHolder ||
          !bankingInfo.iban ||
          !bankingInfo.bankName
        ) {
          Alert.alert("Error", "Please fill all banking information");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep((currentStep + 1) as OnboardingStep);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as OnboardingStep);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setLoading(true);
    try {
      // TODO: API Integration - Submit onboarding data
      const onboardingData = {
        businessInfo,
        documents,
        serviceInfo,
        bankingInfo,
      };

      console.log("Onboarding data ready for API:", onboardingData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      Alert.alert(
        "Success",
        "Your profile is under review. We'll notify you once approved!",
        [
          {
            text: "OK",
            onPress: () => router.replace("/(tabs)"),
          },
        ]
      );
    } catch (error) {
      console.error("Onboarding error:", error);
      Alert.alert("Error", "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderProgressBar = () => (
    <View className="flex-row items-center justify-between mb-8 px-2">
      {[1, 2, 3, 4].map((step) => (
        <React.Fragment key={step}>
          <View className="items-center">
            <View
              className={`w-10 h-10 rounded-full items-center justify-center ${
                currentStep >= step ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <Text
                className={`font-medium ${
                  currentStep >= step ? "text-white" : "text-gray-600"
                }`}
                style={{ fontFamily: "Poppins" }}
              >
                {step}
              </Text>
            </View>
          </View>
          {step < 4 && (
            <View
              className={`flex-1 h-1 mx-2 ${
                currentStep > step ? "bg-primary" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );

  const renderStep1 = () => (
    <View>
      <Text
        className="text-2xl font-medium mb-2 text-primary text-center"
        style={{ fontFamily: "Poppins" }}
      >
        Business Information
      </Text>
      <Text
        className="text-sm text-accent text-center mb-8"
        style={{ fontFamily: "Poppins" }}
      >
        Please provide your business registration details
      </Text>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Company Name *
        </Text>
        <TextInput
          className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
          style={{ fontFamily: "Poppins" }}
          placeholder="Enter Company Name"
          value={businessInfo.companyName}
          onChangeText={(text) =>
            setBusinessInfo((prev) => ({ ...prev, companyName: text }))
          }
        />
      </View>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Commercial Registration Number *
        </Text>
        <TextInput
          className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
          style={{ fontFamily: "Poppins" }}
          placeholder="Enter Registration Number"
          value={businessInfo.registrationNumber}
          onChangeText={(text) =>
            setBusinessInfo((prev) => ({ ...prev, registrationNumber: text }))
          }
        />
      </View>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Tax Number *
        </Text>
        <TextInput
          className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
          style={{ fontFamily: "Poppins" }}
          placeholder="Enter Tax Number"
          value={businessInfo.taxNumber}
          onChangeText={(text) =>
            setBusinessInfo((prev) => ({ ...prev, taxNumber: text }))
          }
        />
      </View>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          VAT ID (Optional)
        </Text>
        <TextInput
          className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
          style={{ fontFamily: "Poppins" }}
          placeholder="Enter VAT ID"
          value={businessInfo.vatId}
          onChangeText={(text) =>
            setBusinessInfo((prev) => ({ ...prev, vatId: text }))
          }
        />
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View>
      <Text
        className="text-2xl font-medium mb-2 text-primary text-center"
        style={{ fontFamily: "Poppins" }}
      >
        Upload Documents
      </Text>
      <Text
        className="text-sm text-accent text-center mb-8"
        style={{ fontFamily: "Poppins" }}
      >
        Please upload your qualifications and insurance
      </Text>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Professional Qualifications *
        </Text>
        <TouchableOpacity
          onPress={() => handleDocumentPick("qualifications")}
          className={`py-4 px-4 border-2 border-dashed border-[#A1A1A1] rounded-lg bg-gray-50 ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
        >
          <View className="flex-row items-center justify-center">
            <Ionicons name="cloud-upload-outline" size={24} color="#612AC3" />
            <Text
              className="ml-2 text-primary"
              style={{ fontFamily: "Poppins" }}
            >
              {documents.qualifications
                ? documents.qualifications.name
                : "Upload Certificate"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Professional Liability Insurance *
        </Text>
        <TouchableOpacity
          onPress={() => handleDocumentPick("insurance")}
          className={`py-4 px-4 border-2 border-dashed border-[#A1A1A1] rounded-lg bg-gray-50 ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
        >
          <View className="flex-row items-center justify-center">
            <Ionicons name="cloud-upload-outline" size={24} color="#612AC3" />
            <Text
              className="ml-2 text-primary"
              style={{ fontFamily: "Poppins" }}
            >
              {documents.insurance
                ? documents.insurance.name
                : "Upload Insurance"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="bg-blue-50 p-4 rounded-lg">
        <Text
          className="text-sm text-blue-800"
          style={{ fontFamily: "Poppins" }}
        >
          💡 Accepted formats: PDF, JPG, PNG (max 5MB)
        </Text>
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View>
      <Text
        className="text-2xl font-medium mb-2 text-primary text-center"
        style={{ fontFamily: "Poppins" }}
      >
        Service Information
      </Text>
      <Text
        className="text-sm text-accent text-center mb-8"
        style={{ fontFamily: "Poppins" }}
      >
        Tell us about your services
      </Text>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-3 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Service Categories *
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {availableCategories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => toggleCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                serviceInfo.categories.includes(category)
                  ? "bg-primary border-primary"
                  : "bg-white border-[#A1A1A1]"
              }`}
            >
              <Text
                className={`${
                  serviceInfo.categories.includes(category)
                    ? "text-white"
                    : "text-primary"
                }`}
                style={{ fontFamily: "Poppins" }}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Business Description *
        </Text>
        <TextInput
          className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
          style={{ fontFamily: "Poppins" }}
          placeholder="Describe your services and experience..."
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          value={serviceInfo.description}
          onChangeText={(text) =>
            setServiceInfo((prev) => ({ ...prev, description: text }))
          }
        />
      </View>
    </View>
  );

  const renderStep4 = () => (
    <View>
      <Text
        className="text-2xl font-medium mb-2 text-primary text-center"
        style={{ fontFamily: "Poppins" }}
      >
        Banking Information
      </Text>
      <Text
        className="text-sm text-accent text-center mb-8"
        style={{ fontFamily: "Poppins" }}
      >
        For receiving payments
      </Text>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Account Holder Name *
        </Text>
        <TextInput
          className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
          style={{ fontFamily: "Poppins" }}
          placeholder="Enter Account Holder Name"
          value={bankingInfo.accountHolder}
          onChangeText={(text) =>
            setBankingInfo((prev) => ({ ...prev, accountHolder: text }))
          }
        />
      </View>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          IBAN *
        </Text>
        <TextInput
          className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
          style={{ fontFamily: "Poppins" }}
          placeholder="DE89 3704 0044 0532 0130 00"
          value={bankingInfo.iban}
          onChangeText={(text) =>
            setBankingInfo((prev) => ({ ...prev, iban: text }))
          }
        />
      </View>

      <View className="mb-6">
        <Text
          className="text-lg font-medium mb-2 text-primary"
          style={{ fontFamily: "Poppins" }}
        >
          Bank Name *
        </Text>
        <TextInput
          className={`py-[18px] px-4 border-[0.5px] border-[#A1A1A1] rounded-lg bg-white ${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          }`}
          style={{ fontFamily: "Poppins" }}
          placeholder="Enter Bank Name"
          value={bankingInfo.bankName}
          onChangeText={(text) =>
            setBankingInfo((prev) => ({ ...prev, bankName: text }))
          }
        />
      </View>

      <View className="bg-green-50 p-4 rounded-lg">
        <Text
          className="text-sm text-green-800"
          style={{ fontFamily: "Poppins" }}
        >
          🔒 Your banking information is encrypted and secure
        </Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        className="flex-1 bg-white"
        edges={["top", "left", "right"]}
      >
        <ScrollView className="flex-1 px-5">
          <View className="mt-8 mb-4">{renderProgressBar()}</View>

          <View className="flex-1">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View className="px-5 py-4 border-t border-gray-200">
          <View className="flex-row gap-3">
            {currentStep > 1 && (
              <TouchableOpacity
                onPress={handleBack}
                className="flex-1 py-4 rounded-2xl border border-primary"
              >
                <Text
                  className="text-primary text-lg font-medium text-center"
                  style={{ fontFamily: "Poppins" }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={currentStep === 4 ? handleSubmit : handleNext}
              className={`flex-1 rounded-2xl overflow-hidden ${
                currentStep === 1 ? "w-full" : ""
              }`}
              disabled={loading}
            >
              <LinearGradient
                colors={["#B78AF7", "#612AC3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="rounded-2xl"
              >
                <Text
                  className="text-white py-4 text-lg font-medium text-center"
                  style={{ fontFamily: "Poppins" }}
                >
                  {loading
                    ? "Submitting..."
                    : currentStep === 4
                    ? "Submit for Review"
                    : "Next"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ProviderOnboarding;
