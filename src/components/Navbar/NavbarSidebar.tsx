import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import { NavbarItemData } from "./types";

interface NavbarSidebarProps {
  items: NavbarItemData[];
  isOpen: boolean;
  onOpenChange: (_: boolean) => void;
}

export const NavbarSidebar = ({
  items,
  isOpen,
  onOpenChange,
}: NavbarSidebarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>{"Menu"}</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map(({ href, children, isActive }) => (
            <Link
              key={href}
              href={href}
              className="w-full text-left p-4 flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="sign-in"
              className="w-full text-left p-4 flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {"Log in"}
            </Link>
            <Link
              href="sign-up"
              className="w-full text-left p-4 flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {"Start selling"}
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
