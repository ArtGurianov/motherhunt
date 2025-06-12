"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./NavbarSidebar";
import { NAVBAR_ITEMS } from "./constants";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarItem } from "./NavbarItem";
import { ArrowBigRight, ChevronsRightIcon } from "lucide-react";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const pathname = usePathname();

  const { width: windowWidth } = useWindowSize();
  const imageContainerRef = useRef<HTMLImageElement | null>(null);
  const itemsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!itemsContainerRef.current || !imageContainerRef.current) return;

    setIsBurgerMenu(
      itemsContainerRef.current.offsetWidth +
        imageContainerRef.current.offsetWidth >
        document.body.clientWidth
    );
  }, [windowWidth]);

  const displayItems = (
    <div className="flex justify-center items-center px-6 gap-2">
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
        className="border-0 px-8 py-2 rounded-none text-lg"
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
  );

  return (
    <nav className="w-full h-nav flex justify-start bg-secondary-background/30 items-center sticky z-10 top-0 border-b-4 shadow-secondary-background shadow-xl overflow-clip">
      <div
        ref={imageContainerRef}
        className="border-r-4 border-accent-foreground h-full bg-primary shrink-0 max-w-[calc(100vw-var(--spacing)*16)]"
      >
        <Button asChild variant="ghost" size="reset" className="h-full w-auto">
          <Link href="/" className="px-2 sm:px-6 py-1 h-full w-auto">
            <Image
              src="/motherhunt-logo.png"
              width="0"
              height="0"
              sizes="100vh"
              alt="MotherHunt"
              className="h-18 w-64"
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

      <div className={cn("flex grow justify-end", { hidden: isBurgerMenu })}>
        {displayItems}
      </div>

      <div
        className={cn("grow shrink-0 flex items-center justify-end", {
          hidden: !isBurgerMenu,
        })}
      >
        <Button variant="ghost" onClick={() => setIsSidebarOpen(true)}>
          <ChevronsRightIcon />
        </Button>
      </div>

      {/* CHECKING DIMENSIONS */}
      <div ref={itemsContainerRef} className="absolute -z-50 invisible">
        {displayItems}
      </div>
    </nav>
  );
};
