import ProfileHeader from "@/components/Profile/ProfileHeader";
import SavedServices from "@/components/Profile/SavedServices";
import React from "react";
import { FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <FlatList
        data={[]}
        renderItem={() => null}
        contentContainerClassName="px-5 pb-2"
        ListHeaderComponent={() => (
          <>
            <ProfileHeader />
          </>
        )}
        ListFooterComponent={() => <SavedServices />}
      />
    </SafeAreaView>
  );
};

export default Profile;
