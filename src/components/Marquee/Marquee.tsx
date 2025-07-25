"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";

interface IMarqueeProps {
  className?: string;
  children: ReactNode;
}

export const Marquee = ({ children, className }: IMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [{ containerWidth, contentWidth }, setMeasurements] = useState({
    containerWidth: 0,
    contentWidth: 0,
  });

  useEffect(() => {
    setMeasurements({
      containerWidth: containerRef.current?.scrollWidth || 0,
      contentWidth: contentRef.current?.scrollWidth || 0,
    });
  }, []);

  let displayMarquee: ReactElement = (
    <div className="h-full flex justify-center">{children}</div>
  );
  if (containerWidth && containerWidth && containerWidth <= contentWidth) {
    displayMarquee = (
      <motion.div
        className="h-full flex"
        animate={{
          x: ["0%", contentWidth * -1],
          transition: {
            ease: "linear",
            duration: Math.ceil(contentWidth / 100),
            repeat: Infinity,
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-clip", className)}
    >
      {displayMarquee}
      {/* INVISIBLE - ONLY FOR SIZE MEASUREMENTS */}
      <div ref={contentRef} className="-z-50 absolute flex invisible">
        {children}
      </div>
    </div>
  );
};
