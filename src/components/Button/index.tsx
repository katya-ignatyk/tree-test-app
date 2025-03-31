import { AiOutlineLoading } from "react-icons/ai";

type ButtonVariant = "danger" | "primary" | "default";
type ReactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  loading?: boolean;
  variant?: ButtonVariant;
} & ReactButtonProps;

const Button = ({
  loading,
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps) => {
  const variants = {
    danger: "text-red-700 border-red-500",
    primary: "text-blue-700 border-blue-500",
    default: "text-gray-50 border-gray-500",
  };

  return (
    <button
      className={`bg-transparent hover:opacity-50 cursor-pointer border rounded py-2 px-4 flex items-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <AiOutlineLoading className="animate-spin h-6 w-6" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
