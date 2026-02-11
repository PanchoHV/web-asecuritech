import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export const Sheet = SheetPrimitive.Root
export const SheetTrigger = SheetPrimitive.Trigger
export const SheetContent = ({ children, ...props }: any) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
    <SheetPrimitive.Content className="fixed inset-y-0 right-0 z-50 h-full w-full border-l border-white/10 bg-[#0B1120] p-6 shadow-2xl transition ease-in-out sm:max-w-4xl overflow-y-auto" {...props}>
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
        <X className="h-6 w-6 text-white" />
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
)
export const SheetHeader = (props: any) => <div className="flex flex-col space-y-2 text-left mb-6" {...props} />
export const SheetTitle = (props: any) => <SheetPrimitive.Title className="text-2xl font-bold text-white tracking-tight" {...props} />
