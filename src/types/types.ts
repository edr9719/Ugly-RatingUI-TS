export type RatingProps = {
  heading: string;
  feedbackMessages?: string[];
};

export type StarProps = {
  color?: string;
  star: number;
  rating: number;
  hover: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  submitted: boolean;
};

export type ButtonProps = {
  description: string;
  onClick?: () => void | ((value: boolean) => void);
  submitted?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  rating?: number;
  disabled?: boolean;
};

export type ModalProps = {
  description: string;
};
