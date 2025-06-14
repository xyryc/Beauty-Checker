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
