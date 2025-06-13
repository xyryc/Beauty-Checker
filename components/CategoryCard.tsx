import { ServiceCategory } from "@/types/types";
import { Image } from "expo-image";
import { Text, View } from "react-native";

type CategoryCardProps = {
  category: ServiceCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <View className="mr-4">
      <Image
        className="shadow-ios bg-white "
        style={{ width: 80, height: 80, borderRadius: 8 }}
        source={category.img_url}
        contentFit="cover"
      />

      <Text
        className="font-medium text-xs text-accent text-center mt-2"
        style={{ fontFamily: "Poppins" }}
      >
        {category.service_name}
      </Text>
    </View>
  );
};

export default CategoryCard;
