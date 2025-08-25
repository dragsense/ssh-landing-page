"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientFillButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  /** seconds – higher = slower (default 0.8 s) */
  duration?: number;
}

export const GradientFillButton = ({
  children,
  className,
  duration = 0.4,
  ...props
}: GradientFillButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative inline-block overflow-hidden rounded-full border border-[#4e8f79]/50 cursor-pointer",
        "px-8 py-3 text-sm font-medium text-black dark:text-white",
        "focus:outline-none focus:ring-2 focus:ring-[#4e8f79]/60",
        className
      )}
    >
      {/* animated fill bar */}
      <motion.span
        className="absolute inset-y-0 left-0 bg-[#4e8f79]/50"
        initial={{ width: "2px" }}
        animate={{ width: hovered ? "100%" : "0px" }}
        transition={{ duration, ease: "easeInOut" }}
      />

      {/* button label */}
      <span className="relative z-10 transition-colors group-hover:text-white">
        {children}
      </span>
    </motion.a>
  );
};
