"use client";
import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Función de utilidad requerida por Shadcn
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

// --- IMPLEMENTACIÓN FIEL DE COMPONENTES ---
export const Button = React.forwardRef<HTMLButtonElement, any>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 px-4 py-2", 
    variant === "destructive" ? "bg-red-600 text-white hover:bg-red-700" : "bg-white/10 text-white hover:bg-white/20", className)} {...props} />
));

export const Badge = ({ className, variant, ...props }: any) => (
  <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors", 
    variant === "destructive" ? "border-transparent bg-red-600 text-white" : "border-white/20 text-slate-300", className)} {...props} />
);

export const Card = ({ className, ...props }: any) => <div className={cn("rounded-xl border border-white/10 bg-white/5 text-card-foreground shadow", className)} {...props} />;
export const CardHeader = ({ className, ...props }: any) => <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
export const CardTitle = ({ className, ...props }: any) => <h3 className={cn("font-semibold leading-none tracking-tight text-white", className)} {...props} />;
export const CardContent = ({ className, ...props }: any) => <div className={cn("p-6 pt-0", className)} {...props} />;

export const Input = (props: any) => <input className="flex h-9 w-full rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" {...props} />;
export const Separator = ({ className }: any) => <div className={cn("shrink-0 bg-white/10 h-[1px] w-full", className)} />;

export const Table = ({ ...props }: any) => <div className="relative w-full overflow-auto"><table className="w-full caption-bottom text-sm" {...props} /></div>;
export const TableHeader = ({ ...props }: any) => <thead className="[&_tr]:border-b border-white/10" {...props} />;
export const TableBody = ({ ...props }: any) => <tbody className="[&_tr:last-child]:border-0" {...props} />;
export const TableRow = ({ className, ...props }: any) => <tr className={cn("border-b border-white/5 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted", className)} {...props} />;
export const TableHead = ({ className, ...props }: any) => <th className={cn("h-10 px-2 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0", className)} {...props} />;
export const TableCell = ({ className, ...props }: any) => <td className={cn("p-2 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />;

export const Textarea = (props: any) => <textarea className="flex min-h-[60px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" {...props} />;