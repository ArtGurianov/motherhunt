"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import { NavbarItemData } from "./types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ArrowBigRight } from "lucide-react";

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
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b bg-primary">
          <SheetTitle className="font-sans text-background font-semibold text-2xl">
            {"Menu"}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col w-full overflow-y-auto h-full pb-2">
          <div className="flex flex-col w-full justify-center items-center gap-6 mt-4 px-4">
            {items.map(({ href, label }) => (
              <div
                key={href}
                className="flex items-center justify-center w-full max-w-[320px]"
              >
                <div className="relative w-full h-full">
                  <Button
                    asChild
                    className="text-3xl font-mono h-full w-full py-6"
                    size="reset"
                    variant="ghost"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                  <Image
                    className="absolute -z-10 top-0 left-0"
                    src={
                      pathname === href
                        ? "/capture-btn-mobile-active.png"
                        : "/capture-btn-mobile-inactive.png"
                    }
                    alt="navbar-btn-icon"
                    sizes="100vh"
                    priority
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute w-full flex justify-center items-center bottom-6 px-8">
            <Button
              asChild
              className="border-0 w-full py-2 rounded-none text-lg"
              size="lg"
            >
              <Link href="https://app.motherhunt.com" className="h-full">
                <span className="text-3xl flex gap-1 items-center justify-center h-full">
                  <ArrowBigRight />
                  {"Platform"}
                </span>
              </Link>
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
