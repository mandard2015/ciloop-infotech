import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-950 shadow-sm transition duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
