import { Ionicons } from "@expo/vector-icons";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useCallback, useEffect, useState } from "react";
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

    // Create video player
    const player = useVideoPlayer(url, (player) => {
      player.loop = true;
      player.muted = false;
    });

    // Auto-play when comes into view
    useEffect(() => {
      if (isActive && !hasStarted) {
        setHasStarted(true);
        setTimeout(() => {
          player.play();
          setIsPlaying(true);
        }, 300); // Small delay for smooth transition
      } else if (!isActive) {
        player.pause();
        setIsPlaying(false);
      }
    }, [isActive, hasStarted, player]);

    const togglePlayback = useCallback(() => {
      if (isPlaying) {
        player.pause();
        setIsPlaying(false);
      } else {
        player.play();
        setIsPlaying(true);
      }
    }, [isPlaying, player]);

    return (
      <TouchableOpacity
        className="flex-1"
        onPress={togglePlayback}
        activeOpacity={1}
      >
        <VideoView
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
          }}
          player={player}
          contentFit="cover"
          nativeControls={false}
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
