"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MangaAvatarProps {
  expression?: "determined" | "thinking" | "celebrating" | "surprised" | "focused";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showSparkles?: boolean;
}

const MangaAvatar = ({
  expression = "determined",
  size = "lg",
  className,
  showSparkles = false,
}: MangaAvatarProps) => {
  const sizeStyles = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-80 h-80",
  };

  // Size values in pixels for Next.js Image component
  const sizeValues = {
    sm: 128,
    md: 192,
    lg: 256,
    xl: 320,
  };

  // Map expressions to image files
  const imageMap = {
    determined: "/images/avatar_hero_v2.png",
    focused: "/images/avatar_hero_v2.png",
    thinking: "/images/avatar_thinking_v2.png",
    celebrating: "/images/avatar_happy_v2.png",
    surprised: "/images/avatar_happy_v2.png",
  };

  const currentImage = imageMap[expression] || imageMap.determined;
  const pixelSize = sizeValues[size];

  return (
    <div className={cn("relative", sizeStyles[size], className)}>
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#1a1a1a] bg-[#f5f0e1] relative z-10">
        <Image
          src={currentImage}
          alt="Dharun Prasanth - ML Engineer"
          width={pixelSize}
          height={pixelSize}
          className="w-full h-full object-cover"
          priority={size === "xl" || size === "lg"}
        />
      </div>

      {/* Sparkle effects */}
      {showSparkles && (
        <>
          <motion.div
            className="manga-sparkle top-2 right-4 z-20"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <motion.div
            className="manga-sparkle bottom-8 left-2 z-20"
            animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          />
        </>
      )}
    </div>
  );
};

export default MangaAvatar;
