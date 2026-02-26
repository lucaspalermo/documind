import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "cta" | "upgrade" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({ children, variant = "default", size = "sm", className }: BadgeProps) {
  const variants = {
    default: "bg-surface-100 text-surface-600",
    primary: "bg-primary-50 text-primary-700 border border-primary-200",
    cta: "bg-cta-50 text-cta-700 border border-cta-200",
    upgrade: "bg-upgrade-50 text-upgrade-700 border border-upgrade-200",
    outline: "border border-surface-300 text-surface-600",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
