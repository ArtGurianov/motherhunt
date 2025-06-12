import { Button } from "@/components/ui/button";
import type { NavbarItemData } from "./types";
import Link from "next/link";
import Image from "next/image";

interface NavbarItemProps extends NavbarItemData {
  onHoverStateChange: (_: number | null) => void;
  isActive: boolean;
  hoveredIndex: number | null;
  currentIndex: number;
}

export const NavbarItem = ({
  href,
  label,
  isActive,
  hoveredIndex,
  currentIndex,
  onHoverStateChange,
}: NavbarItemProps) => {
  return (
    <div className="relative">
      <Button
        asChild
        size="lg"
        variant="ghost"
        onMouseOver={() => onHoverStateChange(currentIndex)}
        onMouseOut={() => onHoverStateChange(null)}
      >
        <Link href={href}>{label}</Link>
      </Button>
      <Image
        className="absolute -z-10 top-0 left-0"
        src={
          (isActive && !hoveredIndex) || hoveredIndex === currentIndex
            ? "/capture-btn-active.png"
            : "/capture-btn-inactive.png"
        }
        alt="navbar-btn-icon"
        sizes="100vh"
        priority
        fill
      />
    </div>
  );
};
