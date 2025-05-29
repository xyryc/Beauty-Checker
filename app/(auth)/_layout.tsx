import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />

      <Stack.Screen
        name="forgot-password"
        options={{ title: "Forgot Password", headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="verify-code"
        options={{ title: "Verify Code", headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="change-password"
        options={{ title: "Change Password", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};

export default AuthLayout;
