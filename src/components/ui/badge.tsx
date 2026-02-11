import * as React from "react"
export const Badge = ({ className, variant, ...props }: any) => {
  const variants: any = {
    default: "bg-white/10 text-slate-300 border-white/20",
    destructive: "bg-red-500/20 text-red-500 border-red-500/30",
    secondary: "bg-brand-sky/20 text-brand-sky border-brand-sky/30",
    outline: "border-white/10 text-slate-500",
  }
  return <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${variants[variant || "default"]} ${className}`} {...props} />
}