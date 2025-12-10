import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DiscoverHeader: React.FC = React.memo(() => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const handleMenuPress = () => {
    setVisible(true);
    console.log("Menu pressed");
    // Handle menu action
  };

  const handleRefreshPress = () => {
    console.log("Refresh pressed");
    // Handle refresh action
  };

  return (
    <View className="absolute top-11 left-0 right-0 z-10 px-4 py-3">
      <View className="flex-row items-center gap-2">
        <TouchableOpacity
          onPress={handleMenuPress}
          activeOpacity={0.8}
          className="p-2"
        >
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>

        <Text
          className="text-white text-[17px] font-semibold"
          style={{ fontFamily: "Poppins-Medium" }}
        >
          For You
        </Text>

        {/* For You Modal */}
        <Modal transparent visible={visible} animationType="none">
          <Pressable className="flex-1" onPress={() => setVisible(false)}>
            <View
              className={`absolute left-5 top-[10%] w-48 bg-white/60 rounded-2xl p-4 space-y-4 ${
                Platform.OS === "ios" ? "top-32" : "top-16"
              }`}
            >
              {/* For You */}
              <TouchableOpacity className="flex-row items-center space-x-1">
                <View className="p-2.5">
                  <Entypo name="video" size={16} color="#9333EA" />
                </View>
                <Text className="text-base font-semibold text-[#9333EA]">
                  For You
                </Text>
              </TouchableOpacity>

              {/* Saved */}
              <TouchableOpacity
                className="flex-row items-center space-x-1"
                onPress={() => {
                  router.push("/discover/saved");
                  setVisible(false);
                }}
              >
                <View className="p-2.5">
                  <FontAwesome name="bookmark" size={16} color="#111" />
                </View>
                <Text className="text-base font-semibold text-black">
                  Saved
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
      </View>
    </View>
  );
});

DiscoverHeader.displayName = "DiscoverHeader";

export default DiscoverHeader;
