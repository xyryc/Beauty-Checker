import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { Image } from "expo-image";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

interface Post {
  id: number;
  type: "video" | "image";
  url: string[];
  username: string;
  userImage: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
}

const TikTokStyleFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Low quality, compressed media URLs
  const posts: Post[] = useMemo(
    () => [
      {
        id: 1,
        type: "video",
        url: [
          "https://www.pexels.com/download/video/8131886/?fps=25.0&h=2048&w=1080",
        ], // Low quality video
        username: "Motin Mia",
        userImage:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100", // Compressed thumbnail
        caption: "Lorem Ipsum...",
        likes: 26,
        comments: 27,
        shares: 27,
      },
      {
        id: 2,
        type: "image",
        url: [
          "https://images.pexels.com/photos/2533038/pexels-photo-2533038.jpeg?auto=compress&cs=tinysrgb&w=480&h=640", // Low quality image
          "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg?auto=compress&cs=tinysrgb&w=480&h=640",
        ],
        username: "Sarah Beauty",
        userImage:
          "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
        caption: "Beauty transformation...",
        likes: 45,
        comments: 12,
        shares: 8,
      },
      {
        id: 3,
        type: "video",
        url: [
          "https://www.pexels.com/download/video/8131887/?fps=25.0&h=960&w=506",
        ], // Low quality video
        username: "Emma Styles",
        userImage:
          "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
        caption: "Hair styling tips...",
        likes: 89,
        comments: 34,
        shares: 15,
      },
    ],
    []
  );

  // Ultra simple photo carousel
  const PhotoCarousel = React.memo(({ urls }: { urls: string[] }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    return (
      <View style={{ flex: 1 }}>
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
          renderItem={({ item }) => (
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
          )}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          windowSize={2}
          removeClippedSubviews={true}
        />

        {urls.length > 1 && (
          <View
            style={{
              position: "absolute",
              bottom: 120,
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            {urls.map((_, index) => (
              <View
                key={index}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  marginHorizontal: 2,
                  backgroundColor:
                    index === currentPhotoIndex
                      ? "white"
                      : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </View>
        )}
      </View>
    );
  });

  // Optimized video player - starts paused, plays when in view
  const VideoPlayer = React.memo(
    ({ url, isActive }: { url: string; isActive: boolean }) => {
      const [isPlaying, setIsPlaying] = useState(false);
      const [hasStarted, setHasStarted] = useState(false);
      const videoRef = useRef<Video>(null);

      // Auto-play when comes into view
      React.useEffect(() => {
        if (isActive && !hasStarted) {
          setHasStarted(true);
          setTimeout(() => {
            videoRef.current?.playAsync();
            setIsPlaying(true);
          }, 300); // Small delay for smooth transition
        } else if (!isActive) {
          videoRef.current?.pauseAsync();
          setIsPlaying(false);
        }
      }, [isActive, hasStarted]);

      const togglePlayback = useCallback(() => {
        if (isPlaying) {
          videoRef.current?.pauseAsync();
          setIsPlaying(false);
        } else {
          videoRef.current?.playAsync();
          setIsPlaying(true);
        }
      }, [isPlaying]);

      return (
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={togglePlayback}
          activeOpacity={1}
        >
          <Video
            ref={videoRef}
            source={{ uri: url }}
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
            }}
            resizeMode={ResizeMode.COVER}
            shouldPlay={false} // Always start paused
            isLooping
            isMuted={false}
            useNativeControls={false}
          />

          {/* Play button overlay */}
          {!isPlaying && (
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="play" size={35} color="white" />
              </View>
            </View>
          )}
        </TouchableOpacity>
      );
    }
  );

  // Minimal action buttons
  const PostActions = React.memo(({ post }: { post: Post }) => (
    <View
      style={{
        position: "absolute",
        right: 12,
        bottom: 140,
        alignItems: "center",
      }}
    >
      {/* Like */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          marginBottom: 16,
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 20,
          padding: 8,
        }}
      >
        <Ionicons name="heart" size={22} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 11,
            fontWeight: "600",
            marginTop: 2,
          }}
        >
          {post.likes}
        </Text>
      </TouchableOpacity>

      {/* Comment */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          marginBottom: 16,
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 20,
          padding: 8,
        }}
      >
        <Ionicons name="chatbubble" size={22} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 11,
            fontWeight: "600",
            marginTop: 2,
          }}
        >
          {post.comments}
        </Text>
      </TouchableOpacity>

      {/* Share */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          marginBottom: 16,
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 20,
          padding: 8,
        }}
      >
        <Ionicons name="share" size={22} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 11,
            fontWeight: "600",
            marginTop: 2,
          }}
        >
          {post.shares}
        </Text>
      </TouchableOpacity>

      {/* Bookmark */}
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 20,
          padding: 8,
        }}
      >
        <Ionicons name="bookmark" size={22} color="white" />
      </TouchableOpacity>
    </View>
  ));

  // Simple bottom info
  const PostInfo = React.memo(({ post }: { post: Post }) => (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Image
            source={{ uri: post.userImage }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 17.5,
              marginRight: 10,
            }}
            transition={0}
            cachePolicy="memory"
          />
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {post.username}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#374151",
            paddingHorizontal: 20,
            paddingVertical: 6,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Book
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 13,
          lineHeight: 18,
        }}
      >
        {post.caption}
        <Text style={{ color: "#60A5FA" }}> See More</Text>
      </Text>
    </View>
  ));

  // Simple header
  const Header = React.memo(() => (
    <View
      style={{
        position: "absolute",
        top: 44,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <FontAwesome name="bars" size={22} color="white" />
        </TouchableOpacity>

        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          For You
        </Text>

        <TouchableOpacity>
          <Ionicons name="refresh" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  ));

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
    <View style={{ flex: 1, backgroundColor: "black" }}>
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

      <Header />
    </View>
  );
};

export default TikTokStyleFeed;
