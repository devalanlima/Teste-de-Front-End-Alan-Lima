import { Variant } from "@/types/Variant";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: Variant;
}

export default function Card({
  children,
  className,
  variant = "default",
  ...rest
}: Props) {
  const cardVariants: Record<Variant, string> = {
    logitech: "logitech-card",
    default: "bg-background hover:bg-[#E8E8E8]",
  };

  return (
    <div
      className={twMerge(`${cardVariants[variant]} rounded-sm p-4`, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
