import { CommentModalProps } from "@/types/types";
import { FontAwesome, Foundation } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CommentModal: React.FC<CommentModalProps> = ({ visible, onClose }) => {
  const [text, onChangeText] = useState("");

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 justify-end bg-black/50">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="w-full"
          >
            <Pressable className="bg-[#444444CC] rounded-t-2xl px-6 pt-4 pb-6">
              {/* Drag Handle */}
              <View className="items-center mb-6">
                <View className="w-14 h-1.5 rounded-full bg-white" />
              </View>

              {/* Comments (you can extract this into a reusable component later) */}
              <ScrollView>
                <View className="mb-6">
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
                  <Text className="mt-3 mb-1 text-xs text-white p-2.5 border-[0.5px] border-primary rounded-2xl">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry, Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ab natus cum, velit laborum temporibus
                    recusandae. Numquam officiis aperiam minima molestiae.
                  </Text>
                  <View className="flex-row items-center gap-2 p-2.5 mt-1">
                    <Foundation name="heart" size={24} color="white" />
                    <Text
                      className="text-white"
                      style={{ fontFamily: "Poppins" }}
                    >
                      26
                    </Text>
                  </View>
                </View>

                <View className="mb-6">
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
                  <Text className="mt-3 mb-1 text-xs text-white p-2.5 border-[0.5px] border-primary rounded-2xl">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry, Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ab natus cum, velit laborum temporibus
                    recusandae. Numquam officiis aperiam minima molestiae.
                  </Text>
                  <View className="flex-row items-center gap-2 p-2.5 mt-1">
                    <Foundation name="heart" size={24} color="white" />
                    <Text
                      className="text-white"
                      style={{ fontFamily: "Poppins" }}
                    >
                      26
                    </Text>
                  </View>
                </View>
              </ScrollView>

              {/* Comment Input (Floating Style) */}
              <View className="absolute bottom-10 left-6 right-6 flex-row items-center gap-4 rounded-full py-2">
                <TextInput
                  value={text}
                  onChangeText={onChangeText}
                  placeholder="Write Your Comment..."
                  placeholderTextColor="#999"
                  className="flex-1 bg-primary text-accent py-4 px-6 border-[0.5px] border-primary rounded-[50px]"
                  style={{ fontFamily: "Poppins" }}
                />

                <Pressable
                  className="bg-purple-500 p-4 rounded-[50px]"
                  onPress={() => {
                    console.log("Send:", text);
                    onChangeText("");
                    onClose();
                  }}
                >
                  <FontAwesome name="send" size={24} color="white" />
                </Pressable>
              </View>
            </Pressable>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CommentModal;
