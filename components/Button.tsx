import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
};

const variantMap = {
  primary: "bg-secondary hover:bg-secondary/80 text-white",
  secondary:
    "bg-secondary/10 hover:bg-secondary text-secondary hover:text-white",
  outline:
    "bg-white/10 hover:text-black border border-white/30 text-white backdrop-blur-sm hover:border-transparent hover:bg-white",
};

export const Button = ({
  label,
  href,
  variant = "primary",
  leftIcon,
  rightIcon,
  className,
  ...rest
}: Props) => {
  return (
    <Link
      href={href}
      className={`${className} ${variantMap[variant]} flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200`}
      {...rest}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </Link>
  );
};
