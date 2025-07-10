import ProfileHeader from "@/components/Profile/ProfileHeader";
import SavedServices from "@/components/Profile/SavedServices";
import SafeScreen from "@/components/SafeScreen";
import React from "react";
import { FlatList } from "react-native";

const Profile = () => {
  return (
    <SafeScreen>
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
    </SafeScreen>
  );
};

export default Profile;
