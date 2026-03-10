import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-button border border-border bg-white px-4 py-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/30 focus-visible:border-teal disabled:cursor-not-allowed disabled:opacity-50 transition-all font-dm-sans",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, ...props }, ref) => (
        <label
            ref={ref}
            className={cn(
                "text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-body mb-2 block font-dm-sans uppercase tracking-wider",
                className
            )}
            {...props}
        />
    )
);
Label.displayName = "Label";

const HelperText = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-[12px] text-muted font-dm-sans mt-1.5", className)}
        {...props}
    />
));
HelperText.displayName = "HelperText";

const ErrorText = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-[12px] text-red-500 font-dm-sans mt-1.5", className)}
        {...props}
    />
));
ErrorText.displayName = "ErrorText";

export { Input, Label, HelperText, ErrorText };
