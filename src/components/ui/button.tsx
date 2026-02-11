"use client";
import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const variants: any = {
      default: "bg-brand-sky text-brand-navy hover:bg-white",
      destructive: "bg-red-600 text-white hover:bg-red-700 font-black",
      outline: "border border-white/10 bg-transparent hover:bg-white/5",
      ghost: "hover:bg-white/5 text-slate-400",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-bold transition-all active:scale-95 disabled:opacity-50",
          variants[variant || "default"],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";