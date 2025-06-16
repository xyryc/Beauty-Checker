import { VideoPlayer } from "expo-video";

export type ShareModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type CommentModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type ChatScreenModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type ServiceCategory = {
  id: number;
  service_name: string;
  img_url: any;
};

export type HeaderProps = {
  text: string;
};

export type ButtonSmallProps = {
  icon?: React.ReactElement;
  text: string;
  onPress?: () => void;
};

export interface Post {
  type: "video" | "image";
  url: string;
  username: string;
  userImage: string;
  caption: string;
  time: string;
}

export interface VideoPostProps {
  post: Post;
  player: VideoPlayer | null;
  commentVisible: boolean;
  setCommentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
