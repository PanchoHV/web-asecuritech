import * as React from "react";
export const Card = ({ className, ...props }: any) => <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl" {...props} />;
export const CardHeader = ({ className, ...props }: any) => <div className="flex flex-col space-y-1.5 p-6" {...props} />;
export const CardTitle = ({ className, ...props }: any) => <h3 className="text-lg font-bold text-white tracking-tight" {...props} />;
export const CardContent = ({ className, ...props }: any) => <div className="p-6 pt-0" {...props} />;