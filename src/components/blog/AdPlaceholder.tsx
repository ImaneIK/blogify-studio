import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  size?: "small" | "medium" | "large" | "sidebar";
  className?: string;
}

const sizeClasses = {
  small: "h-[100px]",
  medium: "h-[250px]",
  large: "h-[400px]",
  sidebar: "h-[600px]",
};

export function AdPlaceholder({ size = "medium", className }: AdPlaceholderProps) {
  return (
    <div
      className={cn(
        "ad-placeholder w-full",
        sizeClasses[size],
        className
      )}
    >
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Advertisement
        </span>
        <p className="mt-1 text-[10px] text-muted-foreground/60">
          300 × {size === "sidebar" ? 600 : size === "large" ? 400 : size === "medium" ? 250 : 100}
        </p>
      </div>
    </div>
  );
}
