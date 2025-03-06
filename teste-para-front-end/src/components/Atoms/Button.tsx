import { Variant } from "@/types/Variant";
import { twJoin, twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: Variant;
  outline?: boolean;
}

export default function Button({
  children,
  variant = "default",
  className,
  outline,
  ...rest
}: Props) {
  const buttonVariants: Record<Variant, string> = {
    default: twJoin(
      "bg-accent text-white hover:bg-[#3722BA]",
      outline && " bg-transparent text-accent outline outline-accent"
    ),
    logitech: twJoin(
      "bg-logitech-accent hover:bg-[#0085AC] text-xl text-text",
      outline &&
        " bg-transparent text-logitech-accent outline outline-logitech-accent"
    ),
  };

  const buttonStyle = twJoin(
    buttonVariants[variant],
    "p-2 font-dm-sans font-bold cursor-pointer"
  );

  return (
    <button className={twMerge(buttonStyle, className)} {...rest}>
      {children}
    </button>
  );
}
