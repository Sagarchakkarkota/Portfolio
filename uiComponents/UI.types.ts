interface buttonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
  icon?: any;
  type?: "submit" | "reset" | "button" | undefined;
  buttonType?: string;
}

export type { buttonProps };
