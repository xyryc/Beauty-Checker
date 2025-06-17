import { Image } from "expo-image";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const ImageSlider = () => {
  const images = [
    {
      uri: "https://images.pexels.com/photos/3089849/pexels-photo-3089849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/9743963/pexels-photo-9743963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/32498668/pexels-photo-32498668/free-photo-of-stunning-woman-applying-lip-gloss-against-red-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/8990700/pexels-photo-8990700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      uri: "https://images.pexels.com/photos/9218719/pexels-photo-9218719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <View>
      <Image
        source={mainImage}
        style={{ width: "100%", height: 250, borderRadius: 10 }}
        contentFit="cover"
      />

      <ScrollView horizontal className="mt-2 mb-4">
        {images.map((img, idx) => (
          <TouchableOpacity key={idx} onPress={() => setMainImage(img)}>
            <Image
              source={img}
              style={[
                styles.thumbnail,
                mainImage.uri === img.uri && styles.selectedThumbnail,
              ]}
              contentFit="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: "#9333ea",
  },
});
