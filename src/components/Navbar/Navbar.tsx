"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./NavbarSidebar";
import { NAVBAR_ITEMS } from "./constants";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarItem } from "./NavbarItem";
import { ArrowBigRight, MenuIcon } from "lucide-react";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full h-nav flex justify-between items-center sticky z-10 top-0 border-b-4 bg-secondary-background/30">
      <div className="border-r-4 h-full bg-primary shrink-0">
        <Button asChild variant="ghost" size="reset">
          <Link href="/" className="px-6 py-1 h-full">
            <Image
              src="/motherhunt-logo.png"
              width="0"
              height="0"
              sizes="100vw"
              alt="MotherHunt"
              className="h-full w-full"
              priority
            />
          </Link>
        </Button>
      </div>

      <NavbarSidebar
        items={NAVBAR_ITEMS}
        isOpen={isSidebarOpen}
        onOpenChange={(value) => {
          setIsSidebarOpen(value);
        }}
      />

      <div className="items-center gap-2 hidden lg:flex px-6">
        {NAVBAR_ITEMS.map(({ href, label }) => (
          <NavbarItem
            key={href}
            href={href}
            isActive={pathname === href && !isBtnHovered}
            onHoverStateChange={(value: boolean) => setIsBtnHovered(value)}
            label={label}
          />
        ))}
        <Button
          asChild
          className="hidden lg:inline-block border-0 px-8 py-2 rounded-none text-lg"
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

      <div className="flex lg:hidden items-center justify-center">
        <Button variant="ghost" onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
