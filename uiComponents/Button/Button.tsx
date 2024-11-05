import { buttonProps } from "../UI.types";

const Button = ({
  onClick,
  className,
  text,
  icon,
  type,
  buttonType = "primary",
}: buttonProps) => {
  return (
    <>
      {buttonType == "primary" ? (
        <button
          className={`${className} border border-primary bg-primary/70 text-white h-10 w-32 rounded-lg hover:bg-primary/60`}
          onClick={onClick}
          type={type}
        >
          <>{text}</>
          <>{icon}</>
        </button>
      ) : (
        <button
          className={`${className} border border-gray text-body p-2 rounded-lg hover:bg-lightGray`}
          onClick={onClick}
          type={type}
        >
          <>{text}</>
          <>{icon}</>
        </button>
      )}
    </>
  );
};

export default Button;
