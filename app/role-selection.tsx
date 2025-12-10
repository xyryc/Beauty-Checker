import { storage } from "@/services/storageService";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function RoleSelection() {
  const router = useRouter();

  const selectRole = async (role: "customer" | "provider") => {
    await storage.setSelectedRole(role);
    router.replace("/(auth)/login");
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#FEFEFE] px-7 py-4">
      {/* gradient text */}
      <Text
        style={{
          fontFamily: "Poppins-Medium",
        }}
        className="text-2xl mb-6 text-[#6200EE]"
      >
        Choose Your Role & Get Started!
      </Text>

      {/* buttons */}
      <TouchableOpacity
        onPress={() => selectRole("customer")}
        className="border border-[#6200EE] p-2 rounded-lg flex-row gap-3 items-center mb-4"
      >
        <View className="p-2.5 border border-[##6200EE] rounded-sm">
          <Image
            source={require("@/assets/images/customer.svg")}
            style={{ width: 76, height: 76 }}
            contentFit="cover"
          />
        </View>

        <View className="flex-1">
          <Text
            style={{
              fontFamily: "Poppins-Medium",
            }}
            className="text-xl text-primary mb-1"
          >
            Customer
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
            }}
            className="text-accent text-sm"
          >
            I'm looking for a service or to book appointments.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => selectRole("provider")}
        className="border border-[#6200EE] p-2 rounded-lg flex-row gap-3 items-center"
      >
        <View className="p-2.5 border border-[##6200EE] rounded-sm">
          <Image
            source={require("@/assets/images/provider.svg")}
            style={{ width: 76, height: 76 }}
            contentFit="cover"
          />
        </View>

        <View className="flex-1">
          <Text
            style={{
              fontFamily: "Poppins-Medium",
            }}
            className="text-xl text-primary mb-1"
          >
            Provider
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
            }}
            className="text-accent text-sm"
          >
            I offer services and want to manage bookings.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
