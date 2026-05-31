import type { AnchorHTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

export interface HomeActionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid" | "outline";
}

export function HomeActionLink({
  className,
  variant = "solid",
  children,
  ...props
}: HomeActionLinkProps): ReactElement {
  return (
    <a
      className={cn(
        "inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 md:px-8 md:py-4 md:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
        variant === "solid"
          ? "bg-accent text-white shadow-lg shadow-black/20 hover:bg-accent/90"
          : "border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}