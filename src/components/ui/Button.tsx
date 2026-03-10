import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange disabled:pointer-events-none disabled:opacity-50 font-dm-sans",
    {
        variants: {
            variant: {
                primary: "bg-orange text-white hover:bg-navy shadow-md hover:shadow-lg",
                secondary: "bg-navy text-white hover:bg-orange transition-colors",
                outline: "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white",
                outlineWhite: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-navy",
                ghost: "text-navy hover:text-orange bg-transparent",
            },
            size: {
                default: "h-12 px-6 py-3",
                sm: "h-10 px-4 py-2",
                lg: "h-14 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
