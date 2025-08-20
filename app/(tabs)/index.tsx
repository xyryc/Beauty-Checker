import postData from "@/assets/data/posts.json";
import DiscoverHeader from "@/components/Discover/DiscoverHeader";
import PhotoCarousel from "@/components/Discover/PhotoCarousel";
import PostActions from "@/components/Discover/PostActions";
import PostInfo from "@/components/Discover/PostInfo";
import VideoPlayer from "@/components/Discover/VideoPlayer";
import { Post } from "@/types/types";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Dimensions, FlatList, StatusBar, View } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const posts: Post[] = useMemo(() => {
    return (postData as Post[]).map((post) => ({
      ...post,
      likes: post.likes || Math.floor(Math.random() * 100) + 10,
      comments: post.comments || Math.floor(Math.random() * 50) + 5,
      shares: post.shares || Math.floor(Math.random() * 20) + 2,
    }));
  }, []);

  const renderPost = useCallback(
    ({ item, index }: { item: Post; index: number }) => {
      const isActive = index === currentIndex;

      return (
        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
          {item.type === "video" ? (
            <VideoPlayer url={item.url[0]} isActive={isActive} />
          ) : (
            <PhotoCarousel urls={item.url} />
          )}

          <PostActions post={item} />
          <PostInfo post={item} />
        </View>
      );
    },
    [currentIndex]
  );

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  return (
    <View className="flex-1 bg-black">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <FlatList
        ref={flatListRef}
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 80,
          waitForInteraction: false,
        }}
        getItemLayout={(data, index) => ({
          length: SCREEN_HEIGHT,
          offset: SCREEN_HEIGHT * index,
          index,
        })}
        removeClippedSubviews={true}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        windowSize={2}
        scrollEventThrottle={50}
        decelerationRate="fast"
        bounces={false}
        disableIntervalMomentum={true}
      />

      <DiscoverHeader />
    </View>
  );
};

export default Discover;
