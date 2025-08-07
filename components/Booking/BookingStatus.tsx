import { BookingStatusProps } from "@/types/types"; // import your type
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import ButtonCancel from "../Shared/ButtonCancel";
import ButtonSmall from "../Shared/ButtonSmall";
import ButtonSmallOutline from "../Shared/ButtonSmallOutline";

const BookingStatus = ({
  item,
  status,
  onCancel,
  onAccept,
  onMessage,
  onComplete,
}: BookingStatusProps) => {
  return (
    <View className="bg-white mx-4 mb-4 rounded-md p-2 shadow-sm border-[0.5px] border-primary">
      <View className="flex-row justify-between mb-4 p-1">
        {/* Client Info */}
        <View className="flex-row gap-4 flex-1">
          <Image
            source={{ uri: item.clientImage }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
            contentFit="cover"
          />

          <View className="ml-4 flex-1">
            <Text
              className="text-primary text-lg"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              {item.clientName}
            </Text>
            <Text
              className="text-purple-600 text-sm mb-2"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Service: {item.service}
            </Text>
            <Text className="text-accent text-[10px]">{item.dateTime}</Text>
          </View>
        </View>

        {/* Amount */}
        <Text
          style={{ fontFamily: "Poppins-Medium" }}
          className="text-primary text-lg"
        >
          ${item.amount}
        </Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center gap-4">
        {status === "new" ? (
          <>
            <ButtonCancel text="Cancel" onPress={() => onCancel?.(item.id)} />
            <ButtonSmall text="Accept" onPress={() => onAccept?.(item.id)} />
          </>
        ) : status === "accepted" ? (
          <>
            <ButtonSmallOutline
              text="Message"
              onPress={() => onMessage?.(item.id)}
            />
            <ButtonSmall
              text="Complete"
              onPress={() => onComplete?.(item.id)}
            />
          </>
        ) : null}
      </View>
    </View>
  );
};

export default BookingStatus;
