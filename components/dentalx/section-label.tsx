import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  variant = "light",
  className,
}: {
  children: React.ReactNode
  variant?: "light" | "dark"
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
        variant === "light"
          ? "bg-secondary text-muted-foreground"
          : "bg-white/10 text-forest-foreground/80",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
      {children}
    </span>
  )
}
