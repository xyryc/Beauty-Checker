import { ServiceCategory } from "@/types/types";
import { Image } from "expo-image";
import { Platform, Text, View } from "react-native";

type CategoryCardProps = {
  category: ServiceCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <View className="mr-4 items-center shadow-2xl">
      <View
        className={`${
          Platform.OS === "ios"
            ? "shadow-ios-quaternary"
            : "shadow-2xl bg-white rounded-lg"
        }`}
      >
        <Image
          style={{ width: 100, height: 100, borderRadius: 8 }}
          source={category?.img_url}
          contentFit="cover"
        />
      </View>

      <Text
        className="font-medium text-xs text-accent text-center mt-2 shadow-none"
        style={{ fontFamily: "Poppins" }}
      >
        {category?.service_name}
      </Text>
    </View>
  );
};

export default CategoryCard;
