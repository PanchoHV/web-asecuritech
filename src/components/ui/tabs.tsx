import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

export const Tabs = TabsPrimitive.Root
export const TabsList = (props: any) => <TabsPrimitive.List className="inline-flex h-10 items-center justify-center rounded-xl bg-white/5 p-1 text-slate-400" {...props} />
export const TabsTrigger = (props: any) => <TabsPrimitive.Trigger className="inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all data-[state=active]:bg-brand-sky data-[state=active]:text-brand-navy data-[state=active]:shadow-sm" {...props} />
export const TabsContent = (props: any) => <TabsPrimitive.Content className="mt-2 focus-visible:outline-none" {...props} />