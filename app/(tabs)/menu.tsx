import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Menu = () => {
  return (
    <View className="px-5 mt-6">
      {/* account */}
      <View>
        <Text className="text-2xl font-medium font-poppins text-primary mb-4">
          Account
        </Text>

        <TouchableOpacity className="flex-row items-center justify-between py-2">
          <View className="flex-row items-center gap-2">
            <Image
              className="mr-2"
              style={{ width: 40, height: 40, borderRadius: 50 }}
              contentFit="cover"
              source="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            />

            <Text className="text-primary font-poppins text-xl font-medium">
              Julian Assange
            </Text>
          </View>

          <View>
            <Text>right</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between py-2">
          <View className="flex-row items-center gap-2">
            <Image
              className="mr-2"
              style={{ width: 40, height: 40, borderRadius: 50 }}
              contentFit="cover"
              source="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            />

            <Text className="text-accent font-poppins">Settings</Text>
          </View>

          <View>
            <Text>right</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
