import * as React from "react";
export const Table = (props: any) => <table className="w-full caption-bottom text-sm" {...props} />;
export const TableHeader = (props: any) => <thead className="border-b border-white/10 bg-white/[0.02]" {...props} />;
export const TableBody = (props: any) => <tbody className="divide-y divide-white/5" {...props} />;
export const TableRow = (props: any) => <tr className="transition-colors hover:bg-white/5" {...props} />;
export const TableHead = (props: any) => <th className="h-12 px-4 text-left align-middle font-black text-[10px] uppercase tracking-widest text-slate-500" {...props} />;
export const TableCell = (props: any) => <td className="p-4 align-middle text-slate-300" {...props} />;