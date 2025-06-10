import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

const SavedScreen = () => {
  const router = useRouter();

  return (
    <SafeScreen>
      <View className="bg-[#111111]" />
      <StatusBar style="dark" />

      <View className="flex-1 bg-customBlack">
        {/* Custom Header */}
        <View className="flex-row items-center justify-between p-4 bg-customBlack relative">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <Text
            className="absolute left-0 right-0 text-center text-xl font-medium text-white"
            style={{ fontFamily: "Poppins" }}
          >
            Saved
          </Text>
        </View>

        {/* Content */}
        <View
          className="justify-center items-center"
          style={{
            padding: 16,
            borderColor: "#A1A1A1",
            borderBottomWidth: 1,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Image
            source={
              "https://img.freepik.com/free-photo/foundation-bottles-advertising-arrangement_23-2149511225.jpg"
            }
            style={{ height: 94, width: 100, borderRadius: 8 }}
          />

          <View className="flex-1">
            <Text className="text-white mb-2" style={{ fontFamily: "Poppins" }}>
              The Day Straw hats will Fulfill their True Dreams!...
              <Text
                className="text-purpleAccent"
                style={{ fontFamily: "Poppins" }}
              >
                See More
              </Text>
            </Text>

            <View>
              <Text
                className="text-xs text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Post by: Motin Mia
              </Text>
              <Text
                className="text-xs text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Saved 3d ago
              </Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View
          className="justify-center items-center"
          style={{
            padding: 16,
            borderColor: "#A1A1A1",
            borderBottomWidth: 1,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Image
            source={
              "https://img.freepik.com/free-photo/foundation-bottles-advertising-arrangement_23-2149511225.jpg"
            }
            style={{ height: 94, width: 100, borderRadius: 8 }}
          />

          <View className="flex-1">
            <Text className="text-white mb-2" style={{ fontFamily: "Poppins" }}>
              The Day Straw hats will Fulfill their True Dreams!...
              <Text
                className="text-purpleAccent"
                style={{ fontFamily: "Poppins" }}
              >
                See More
              </Text>
            </Text>

            <View>
              <Text
                className="text-xs text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Post by: Motin Mia
              </Text>
              <Text
                className="text-xs text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Saved 3d ago
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
};

export default SavedScreen;
