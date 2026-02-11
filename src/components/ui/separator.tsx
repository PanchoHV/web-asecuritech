import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
export const Separator = ({ className, ...props }: any) => <SeparatorPrimitive.Root className={`shrink-0 bg-white/5 h-[1px] w-full ${className}`} {...props} />
