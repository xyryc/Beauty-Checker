import { ServiceCategory } from "@/types/types";
import { Image } from "expo-image";
import { Platform, Text, View } from "react-native";

type CategoryCardProps = {
  category: ServiceCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <View className={`mr-4`}>
      <View
        className={`${
          Platform.OS === "ios"
            ? "shadow-ios-quaternary"
            : "shadow-md shadow-black"
        }`}
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: 8 }}
          source={category.img_url}
          contentFit="cover"
        />
      </View>

      <Text
        className="font-medium text-xs text-accent text-center mt-2 shadow-none"
        style={{ fontFamily: "Poppins" }}
      >
        {category.service_name}
      </Text>
    </View>
  );
};

export default CategoryCard;
