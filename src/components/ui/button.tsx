"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cta" | "upgrade" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  href?: string;
}

const baseStyles =
  "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

const variants = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/30 active:scale-[0.98]",
  secondary:
    "bg-surface-100 text-surface-700 hover:bg-surface-200 border border-surface-200 active:scale-[0.98]",
  cta: "bg-cta-500 text-white hover:bg-cta-600 shadow-md shadow-cta-500/25 hover:shadow-lg hover:shadow-cta-500/35 btn-shimmer active:scale-[0.98]",
  upgrade:
    "bg-gradient-to-r from-upgrade-500 to-upgrade-400 text-white hover:from-upgrade-600 hover:to-upgrade-500 shadow-md shadow-upgrade-500/25 btn-shimmer active:scale-[0.98]",
  ghost: "text-surface-600 hover:text-surface-900 hover:bg-surface-100 active:scale-[0.98]",
  outline:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:scale-[0.98]",
  danger: "bg-danger-500 text-white hover:bg-danger-600 active:scale-[0.98]",
};

const sizes = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3 gap-2",
  xl: "text-lg px-8 py-4 gap-2.5",
};

function Button({
  className,
  variant = "primary",
  size = "md",
  loading,
  children,
  href,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={loading || disabled} {...props}>
      {content}
    </button>
  );
}

export { Button };
