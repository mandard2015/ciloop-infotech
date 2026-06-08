import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-sky-600 text-white hover:bg-sky-700 focus-visible:ring-sky-500",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-500",
  ghost:
    "bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-500 border border-slate-200",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "px-5 py-3 text-sm font-semibold",
  sm: "px-4 py-2 text-sm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
