import React, { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SafeScreenProps = {
  children: ReactNode;
};

const SafeScreen = ({ children }: SafeScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: insets.top, backgroundColor: "#fefefe" }]}>
      {children}
    </View>
  );
};

export default SafeScreen;
