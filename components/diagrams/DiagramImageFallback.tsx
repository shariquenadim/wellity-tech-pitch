"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

interface DiagramImageFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  children: ReactNode;
  className?: string;
  imageClassName?: string;
  dark?: boolean;
}

export default function DiagramImageFallback({
  src,
  fallbackSrc,
  alt,
  children,
  className = "",
  imageClassName = "",
  dark = false,
}: DiagramImageFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [showFallback, setShowFallback] = useState(false);

  if (showFallback) {
    return <>{children}</>;
  }

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative mx-auto aspect-video w-full overflow-hidden rounded-[14px] border ${
          dark ? "border-paper/12 bg-paper" : "border-line bg-white"
        }`}
      >
        <Image
          src={currentSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className={`object-contain ${imageClassName}`}
          onError={() => {
            if (fallbackSrc && currentSrc !== fallbackSrc) {
              setCurrentSrc(fallbackSrc);
              return;
            }
            setShowFallback(true);
          }}
        />
      </div>
    </div>
  );
}
