import { ShareModalProps } from "@/types/types";
import { Foundation } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

const CommentModal: React.FC<ShareModalProps> = ({ visible, onClose }) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <Pressable
        className="flex-1 justify-end bg-black/50 rounded-t-[32px]"
        onPress={onClose}
      >
        <View className="bg-neutral-800 rounded-t-2xl px-6 pt-4 pb-10">
          {/* Drag Handle */}
          <View className="items-center mb-6">
            <View className="w-14 h-1.5 rounded-full bg-white" />
          </View>

          {/* comment */}
          <View className="mb-6">
            {/* profile */}
            <View className="flex-row gap-2.5">
              <Image
                source="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                style={{ width: 48, height: 48, borderRadius: 50 }}
              />

              <View>
                <Text
                  className="text-xl font-medium text-white mb-0.5"
                  style={{ fontFamily: "Poppins" }}
                >
                  Alex Jones
                </Text>

                <Text className="text-accent">1d</Text>
              </View>
            </View>

            {/* comment */}
            <Text className="mt-3 mb-1 text-xs text-white p-2.5 border-[0.5px] border-primary rounded-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

            {/* like */}
            <View className="flex-row items-center gap-2 p-2.5 mt-1">
              <Foundation name="heart" size={24} color="white" />
              <Text className="text-white" style={{ fontFamily: "Poppins" }}>
                26
              </Text>
            </View>
          </View>

          <View className="mb-6">
            {/* profile */}
            <View className="flex-row gap-2.5">
              <Image
                source="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                style={{ width: 48, height: 48, borderRadius: 50 }}
              />

              <View>
                <Text
                  className="text-xl font-medium text-white mb-0.5"
                  style={{ fontFamily: "Poppins" }}
                >
                  Alex Jones
                </Text>

                <Text className="text-accent">1d</Text>
              </View>
            </View>

            {/* comment */}
            <Text className="mt-3 mb-1 text-xs text-white p-2.5 border-[0.5px] border-primary rounded-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

            {/* like */}
            <View className="flex-row items-center gap-2 p-2.5 mt-1">
              <Foundation name="heart" size={24} color="white" />
              <Text className="text-white" style={{ fontFamily: "Poppins" }}>
                26
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default CommentModal;
