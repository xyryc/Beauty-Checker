import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import React, { useCallback, useRef, useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

interface VideoPlayerProps {
  url: string;
  isActive: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = React.memo(
  ({ url, isActive }) => {
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
        className="flex-1"
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
          <View className="absolute inset-0 justify-center items-center bg-black/10">
            <View className="w-[70px] h-[70px] rounded-full bg-black/60 justify-center items-center">
              <Ionicons name="play" size={35} color="white" />
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
