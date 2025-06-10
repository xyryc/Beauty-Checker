import { ChatScreenModalProps } from "@/types/types";
import { Image } from "expo-image";
import React from "react";
import {
  Modal,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ChatScreenModal: React.FC<ChatScreenModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <Pressable className="flex-1" onPress={() => onClose()}>
        <View
          className={`${
            Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
          } absolute top-16 right-5 w-36 px-4 py-5 space-y-4 border-[0.5px] border-primary bg-white rounded-2xl`}
        >
          {/* delete */}
          <TouchableOpacity className="flex-row items-center pb-4 gap-2">
            <Image
              source={require("../assets/images/delete.svg")}
              contentFit="cover"
              style={{ width: 24, height: 24 }}
            />

            <Text className=" font-medium text-primary">Delete</Text>
          </TouchableOpacity>

          {/* block */}
          <TouchableOpacity className="flex-row items-center gap-2 py-4 border-y-[0.5px] border-primary">
            <Image
              source={require("../assets/images/block.svg")}
              contentFit="cover"
              style={{ width: 24, height: 24 }}
            />

            <Text className="font-medium text-primary">Block</Text>
          </TouchableOpacity>

          {/* report */}
          <TouchableOpacity className="flex-row items-center pt-4 gap-2">
            <Image
              source={require("../assets/images/report.svg")}
              contentFit="cover"
              style={{ width: 24, height: 24 }}
            />

            <Text className="font-medium text-primary">Report</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ChatScreenModal;
