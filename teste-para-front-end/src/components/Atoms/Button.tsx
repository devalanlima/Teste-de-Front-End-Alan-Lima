import { Variant } from "@/types/Variant";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: Variant;
}

export default function Button({
  children,
  variant = "default",
  className,
  ...rest
}: Props) {
  const buttonVariants: Record<Variant, string> = {
    default: "bg-accent text-white hover:bg-[#3722BA]",
    logitech: "bg-logitech-accent hover:bg-[#0085AC] text-text text-xl",
  };

  return (
    <button
      className={twMerge(
        `${buttonVariants[variant]} p-2 font-dm-sans font-bold cursor-pointer`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
