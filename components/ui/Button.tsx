import * as React from "react"
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        primary: "bg-amber-500 text-black hover:bg-amber-400",
        secondary: "border border-white/20 bg-white/10 text-white hover:border-white/60 hover:bg-white/20",
        outline: "border border-white/30 text-white hover:border-white/80 hover:bg-white/10",
        ghost: "text-white hover:bg-white/10",
      },
      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}

type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export function Button({
  className,
  variant,
  size,
  asChild = false,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (href) {
    const { children, href: _href, ...rest } = props as ButtonAsLinkProps
    const external = href.startsWith("http")
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  const Comp = asChild ? Slot : "button"
  const buttonProps = props as ButtonAsButtonProps

  return <Comp className={classes} {...buttonProps} />
}

export { buttonVariants }
