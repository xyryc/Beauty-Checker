# Expo Video Migration

## Issue
The app was using the deprecated `expo-av` Video component, which Expo recommends replacing with the new `expo-video` API.

**Warning Message:**
```
[expo-av]: Video component from `expo-av` is deprecated in favor of `expo-video`. 
See the documentation at https://docs.expo.dev/versions/latest/sdk/video/ for the new API reference.
```

---

## Changes Made

### 1. **Migrated VideoPlayer Component**

**File**: `components/Discover/VideoPlayer.tsx`

#### Before (expo-av):
```typescript
import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";

const VideoPlayer = ({ url, isActive }) => {
  const videoRef = useRef<Video>(null);
  
  // Play/pause using ref methods
  videoRef.current?.playAsync();
  videoRef.current?.pauseAsync();
  
  return (
    <Video
      ref={videoRef}
      source={{ uri: url }}
      resizeMode={ResizeMode.COVER}
      shouldPlay={false}
      isLooping
      isMuted={false}
      useNativeControls={false}
    />
  );
};
```

#### After (expo-video):
```typescript
import { useVideoPlayer, VideoView } from "expo-video";

const VideoPlayer = ({ url, isActive }) => {
  // Create video player with hook
  const player = useVideoPlayer(url, (player) => {
    player.loop = true;
    player.muted = false;
  });
  
  // Play/pause using player methods
  player.play();
  player.pause();
  
  return (
    <VideoView
      player={player}
      contentFit="cover"
      nativeControls={false}
    />
  );
};
```

---

## Key API Differences

### Video Instance Management

| expo-av | expo-video |
|---------|-----------|
| `useRef<Video>()` | `useVideoPlayer(source, setup)` |
| `videoRef.current?.playAsync()` | `player.play()` |
| `videoRef.current?.pauseAsync()` | `player.pause()` |

### Component Props

| expo-av | expo-video |
|---------|-----------|
| `<Video />` | `<VideoView />` |
| `source={{ uri: url }}` | Pass URL to `useVideoPlayer()` |
| `resizeMode={ResizeMode.COVER}` | `contentFit="cover"` |
| `isLooping={true}` | `player.loop = true` (in setup) |
| `isMuted={false}` | `player.muted = false` (in setup) |
| `shouldPlay={false}` | Control via `player.play()` |
| `useNativeControls={false}` | `nativeControls={false}` |

---

## Benefits of expo-video

1. **Better Performance**: More efficient video playback
2. **Improved API**: Cleaner, more intuitive API design
3. **Better Control**: Direct player object manipulation
4. **Future Support**: Actively maintained, expo-av is deprecated
5. **Modern Hooks**: Uses React hooks pattern

---

## Current Video Usage in Project

### ✅ Migrated Components:
- `components/Discover/VideoPlayer.tsx` - **Migrated to expo-video**

### ✅ Already Using expo-video:
- `components/Shared/VideoPost.tsx` - Already using `expo-video`
- `components/Shared/RenderVideosCard.tsx` - Already using `expo-video`

---

## Package Status

### Dependencies:
```json
{
  "expo-av": "~16.0.7",           // ⚠️ Can be removed if not used elsewhere
  "expo-video": "~3.0.14",        // ✅ Already installed
  "expo-video-thumbnails": "~10.0.7"  // ✅ For thumbnail generation
}
```

### Note on expo-av:
While `expo-av` is still in `package.json`, it may be used for **audio** playback elsewhere in the app. The Video component has been migrated, but if you're only using `expo-av` for video, you can remove it:

```bash
npm uninstall expo-av
```

⚠️ **Before removing**, verify that `expo-av` is not used for:
- Audio playback (`Audio` component)
- Sound effects
- Recording functionality

---

## Testing Checklist

After migration, test the following:

- [ ] Video plays automatically when scrolled into view
- [ ] Video pauses when scrolled out of view
- [ ] Tap to play/pause functionality works
- [ ] Play button overlay appears when paused
- [ ] Video loops correctly
- [ ] Audio is not muted
- [ ] No console warnings about deprecated APIs
- [ ] Performance is smooth during scrolling

---

## Migration Guide for Other Video Components

If you need to migrate other video components in the future:

### Step 1: Import Changes
```typescript
// Old
import { Video, ResizeMode } from "expo-av";

// New
import { useVideoPlayer, VideoView } from "expo-video";
```

### Step 2: Replace Ref with Hook
```typescript
// Old
const videoRef = useRef<Video>(null);

// New
const player = useVideoPlayer(videoSource, (player) => {
  player.loop = true;
  player.muted = false;
  // Set other initial properties
});
```

### Step 3: Update Component
```typescript
// Old
<Video
  ref={videoRef}
  source={{ uri: url }}
  resizeMode={ResizeMode.COVER}
  isLooping
/>

// New
<VideoView
  player={player}
  contentFit="cover"
/>
```

### Step 4: Update Control Methods
```typescript
// Old
await videoRef.current?.playAsync();
await videoRef.current?.pauseAsync();

// New
player.play();
player.pause();
```

---

## Additional Resources

- [Expo Video Documentation](https://docs.expo.dev/versions/latest/sdk/video/)
- [Migration Guide](https://docs.expo.dev/versions/latest/sdk/video/#migrating-from-expo-av)
- [API Reference](https://docs.expo.dev/versions/latest/sdk/video/#api)

---

## Status

✅ **COMPLETE**

All video components using `expo-av` have been migrated to `expo-video`. The deprecation warning should no longer appear.

---

## Next Steps

1. **Test thoroughly**: Verify video playback works in all scenarios
2. **Clear cache**: Run `npx expo start --clear`
3. **Monitor console**: Ensure no more deprecation warnings
4. **Consider removing expo-av**: If only used for video (not audio)

---

**Migration completed successfully! 🎉**
