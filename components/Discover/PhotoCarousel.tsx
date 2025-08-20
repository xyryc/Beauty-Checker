import { Image } from "expo-image";
import React, { useState } from "react";
import { Dimensions, FlatList, View } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

interface PhotoCarouselProps {
  urls: string[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = React.memo(({ urls }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const renderPhoto = ({ item }: { item: string }) => (
    <Image
      source={{ uri: item }}
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      }}
      contentFit="cover"
      transition={0}
      cachePolicy="memory"
    />
  );

  return (
    <View className="flex-1">
      <FlatList
        data={urls}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / SCREEN_WIDTH
          );
          setCurrentPhotoIndex(index);
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPhoto}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        windowSize={2}
        removeClippedSubviews={true}
      />

      {urls.length > 1 && (
        <View className="absolute bottom-30 self-center flex-row">
          {urls.map((_, index) => (
            <View
              key={index}
              className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
                index === currentPhotoIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </View>
      )}
    </View>
  );
});

PhotoCarousel.displayName = "PhotoCarousel";

export default PhotoCarousel;
