import { Stack } from "expo-router";

const DiscoverLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="saved" options={{ headerShown: true }} />
    </Stack>
  );
};

export default DiscoverLayout;
