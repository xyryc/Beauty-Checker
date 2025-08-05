import ButtonPrimary from "@/components/Shared/ButtonPrimary";
import Header from "@/components/Shared/Header";
import SafeScreen from "@/components/Shared/SafeScreen";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const EditProfileScreen = () => {
  const [bio, setBio] = useState("");
  const [owner, setOwner] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [website, setWebsite] = useState("");

  const router = useRouter();

  return (
    <SafeScreen>
      <Header text="Edit Profile" />

      <KeyboardAvoidingView
        className="h-screen"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="px-5 py-6"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
        >
          {/* profile picture */}
          <View>
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              Profile Picture
            </Text>
            <Image
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
                borderColor: "#767676",
                borderWidth: 2,
              }}
              source={
                "https://images.pexels.com/photos/31776332/pexels-photo-31776332.jpeg"
              }
              contentFit="cover"
            />
          </View>

          {/* cover photo */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Cover Photo
            </Text>
            <Image
              style={{
                height: 150,
                width: "auto",
                borderRadius: 12,
              }}
              source={
                "https://images.pexels.com/photos/31776332/pexels-photo-31776332.jpeg"
              }
              contentFit="cover"
            />
          </View>

          {/* bio */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Bio
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={bio}
              onChangeText={(newText) => setBio(newText)}
              placeholder="Add Details"
            />
          </View>

          {/* owner name */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Owner's Name
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={owner}
              onChangeText={(newText) => setOwner(newText)}
              placeholder="Julian Assange"
            />
          </View>

          {/* company name */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Company Name
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={company}
              onChangeText={(newText) => setCompany(newText)}
              placeholder="Beauty Checker International"
            />
          </View>

          {/* mobile number */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Mobile Number
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={mobile}
              onChangeText={(newText) => setMobile(newText)}
              placeholder="+634 0000 000"
            />
          </View>

          {/* email */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Email
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={email}
              onChangeText={(newText) => setEmail(newText)}
              placeholder="johndoe@gmail.com"
            />
          </View>

          {/* address */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Address
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={address}
              onChangeText={(newText) => setAddress(newText)}
              placeholder="Moscrow, Russia"
            />
          </View>

          {/* facebook */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Facebook
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={facebook}
              onChangeText={(newText) => setFacebook(newText)}
              placeholder="www.facebook.com/johndoe"
            />
          </View>

          {/* instagram */}
          <View className="mt-6">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Instagram
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={instagram}
              onChangeText={(newText) => setInstagram(newText)}
              placeholder="www.instagram.com/johndoe"
            />
          </View>

          {/* website */}
          <View className="my-6">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Website
            </Text>
            <TextInput
              style={{ fontFamily: "Poppins" }}
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={website}
              onChangeText={(newText) => setWebsite(newText)}
              placeholder="www.example.com"
            />
          </View>

          {/* save */}
          <ButtonPrimary onPress={() => router.back()} text="Save" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
};

export default EditProfileScreen;
