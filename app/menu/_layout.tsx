import { Stack } from "expo-router";

const MenuLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} />
      <Stack.Screen name="SettingsScreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MenuLayout;
