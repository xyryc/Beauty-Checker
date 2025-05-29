import { Stack, useRouter } from "expo-router";

const AuthLayout = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />

      <Stack.Screen name="forgot-password" />
    </Stack>
  );
};

export default AuthLayout;
