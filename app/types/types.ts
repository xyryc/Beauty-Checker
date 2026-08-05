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
  className?: string;
};

export interface Post {
  id: number;
  type: "video" | "image";
  url: string[];
  username: string;
  userImage: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
}

export interface PostProps {
  post: Post;
  player?: VideoPlayer | null;
  commentVisible?: boolean;
  setCommentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible?: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CommonCardProps = {
  item: any;
  onPress: () => void;
};

export interface BookingRequest {
  id: string;
  clientId: string;
  clientName: string;
  service: string;
  dateTime: string;
  amount: number;
  clientImage: string;
  status: "new" | "accepted" | "completed" | "cancelled";
}

export interface BookingStatusProps {
  item: BookingRequest;
  status: string;
  onCancel?: (id: string) => void;
  onAccept?: (id: string) => void;
  onMessage?: (id: string) => void;
  onComplete?: (id: string) => void;
  onReschedule?: (id: string) => void;
}

export interface CustomerNotification {
  id: string;
  type: "chat" | "booking";
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  providerName: string;
  providerImage: string;
  bookingStatus?: "confirmed" | "cancelled" | "completed" | "reminder";
}

export interface ProviderNotification {
  id: string;
  type: "chat" | "booking" | "payment" | "review";
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  clientName: string;
  clientImage: string;
  bookingStatus?:
    | "new_request"
    | "accepted"
    | "cancelled"
    | "completed"
    | "rescheduled";
  actionRequired?: boolean;
  amount?: number;
  rating?: number;
}
