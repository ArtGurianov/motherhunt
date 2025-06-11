import { Button } from "@/components/ui/button";
import type { NavbarItemData } from "./types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarItemProps extends NavbarItemData {
  onHoverStateChange: (_: boolean) => void;
  isActive: boolean;
}

export const NavbarItem = ({
  href,
  label,
  isActive,
  onHoverStateChange,
}: NavbarItemProps) => {
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className={cn("", {
        "bg-accent-foreground/70 border-border/100": isActive,
      })}
      onMouseOver={() => onHoverStateChange(true)}
      onMouseOut={() => onHoverStateChange(false)}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
