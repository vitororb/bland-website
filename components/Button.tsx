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
  primary: "bg-secondary hover:bg-primary text-white",
  secondary:
    "bg-secondary/10 hover:bg-secondary text-secondary hover:text-white",
  outline:
    "bg-white/10 hover:text-secondary border border-white/30 text-white backdrop-blur-sm hover:border-transparent hover:bg-white",
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
      className={`${className} ${variantMap[variant]} flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200`}
      {...rest}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </Link>
  );
};
