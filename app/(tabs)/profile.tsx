import ProfileHeader from "@/components/Profile/ProfileHeader";
import SavedServices from "@/components/Profile/SavedServices";
import React from "react";
import { FlatList } from "react-native";

const Profile = () => {
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      contentContainerClassName="px-5 pt-6 pb-2"
      ListHeaderComponent={() => (
        <>
          <ProfileHeader />
        </>
      )}
      ListFooterComponent={() => <SavedServices />}
    />
  );
};

export default Profile;
