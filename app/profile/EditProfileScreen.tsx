import Header from "@/components/Header";
import SafeScreen from "@/components/SafeScreen";
import { Image } from "expo-image";
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
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <SafeScreen>
      <Header text="Edit Profile" />

      <KeyboardAvoidingView
        className="h-screen"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView className="px-5 py-6">
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

          {/* bio */}
          <View className="mt-4">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              Bio
            </Text>
            <TextInput
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent h-36"
              multiline
              numberOfLines={4}
              value={bio}
              onChangeText={(newText) => setBio(newText)}
              placeholder="Add Details"
            />
          </View>

          {/* mobile number */}
          <View className="mt-4">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              Mobile Number
            </Text>
            <TextInput
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={mobile}
              onChangeText={(newText) => setMobile(newText)}
              placeholder="+634 0000 000"
            />
          </View>

          {/* email */}
          <View className="mt-4">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              Email
            </Text>
            <TextInput
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={email}
              onChangeText={(newText) => setEmail(newText)}
              placeholder="johndoe@gmail.com"
            />
          </View>

          {/* address */}
          <View className="mt-4">
            <Text
              className="mb-1.5 text-primary text-lg font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              Address
            </Text>
            <TextInput
              className="border-[0.5px] border-[#767676] rounded-xl px-6 py-4 placeholder:text-accent"
              value={address}
              onChangeText={(newText) => setAddress(newText)}
              placeholder="Moscrow, Russia"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
};

export default EditProfileScreen;
