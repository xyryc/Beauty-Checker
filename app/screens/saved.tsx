import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
0;

const SavedScreen = () => {
  const router = useRouter();

  return (
    <SafeScreen>
      <View className="h-12 bg-[#111111]" />
      <StatusBar style="dark" />

      <View className="flex-1 bg-customBlack">
        {/* Custom Header */}
        <View className="flex-row items-center justify-between p-4 bg-customBlack relative">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <Text className="absolute left-0 right-0 text-center text-xl font-poppins font-medium text-white">
            Saved
          </Text>
        </View>

        {/* Content */}
        <View
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
            <Text className="font-poppins text-white mb-2">
              The Day Straw hats will Fulfill their True Dreams!...
              <Text className="font-poppins text-purpleAccent">See More</Text>
            </Text>

            <View>
              <Text className="text-xs text-white font-poppins">
                Post by: Motin Mia
              </Text>
              <Text className="text-xs text-white font-poppins">
                Saved 3d ago
              </Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View
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
            <Text className="font-poppins text-white mb-2">
              The Day Straw hats will Fulfill their True Dreams!...
              <Text className="font-poppins text-purpleAccent">See More</Text>
            </Text>

            <View>
              <Text className="text-xs text-white font-poppins">
                Post by: Motin Mia
              </Text>
              <Text className="text-xs text-white font-poppins">
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
