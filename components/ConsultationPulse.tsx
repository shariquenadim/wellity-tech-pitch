"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ConsultationPulseProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ConsultationPulse({
  size = "md",
  className = "",
}: ConsultationPulseProps) {
  const shouldReduceMotion = useReducedMotion();

  const dimensions = {
    sm: { width: 180, height: 50, dotSize: 8, fontSize: 9, lineY: 18 },
    md: { width: 300, height: 70, dotSize: 12, fontSize: 11, lineY: 26 },
    lg: { width: 460, height: 90, dotSize: 16, fontSize: 13, lineY: 34 },
  };

  const d = dimensions[size];
  const pharmacyX = d.dotSize + 40;
  const doctorX = d.width - d.dotSize - 40;
  const lineStart = pharmacyX + d.dotSize + 4;
  const lineEnd = doctorX - d.dotSize - 4;

  return (
    <div className={`inline-flex items-center ${className}`} aria-label="Consultation pulse animation: pharmacy connects to doctor in real time">
      <svg
        width={d.width}
        height={d.height}
        viewBox={`0 0 ${d.width} ${d.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        {/* Connection line */}
        <line
          x1={lineStart}
          y1={d.lineY}
          x2={lineEnd}
          y2={d.lineY}
          stroke="var(--line)"
          strokeWidth={1.5}
          strokeDasharray="4 3"
        />

        {/* Traveling packet */}
        {!shouldReduceMotion && (
          <motion.circle
            cx={lineStart}
            cy={d.lineY}
            r={d.dotSize * 0.35}
            fill="var(--accent)"
            opacity={0}
            animate={{
              cx: [lineStart, lineEnd],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              times: [0, 0.1, 0.9, 1],
            }}
          />
        )}

        {/* Pharmacy dot (teal) */}
        <circle
          cx={pharmacyX}
          cy={d.lineY}
          r={d.dotSize}
          fill="var(--primary)"
          opacity={0.15}
        />
        <circle
          cx={pharmacyX}
          cy={d.lineY}
          r={d.dotSize * 0.6}
          fill="var(--primary)"
        />

        {/* Doctor dot (clay/signal) with pulse */}
        <motion.circle
          cx={doctorX}
          cy={d.lineY}
          r={d.dotSize}
          fill="var(--signal)"
          opacity={0.2}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  r: [d.dotSize, d.dotSize * 1.4, d.dotSize],
                  opacity: [0.2, 0.08, 0.2],
                }
          }
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <circle
          cx={doctorX}
          cy={d.lineY}
          r={d.dotSize * 0.6}
          fill="var(--signal)"
        />

        {/* Labels */}
        <text
          x={pharmacyX}
          y={d.lineY + d.dotSize + d.fontSize + 4}
          textAnchor="middle"
          fill="var(--muted)"
          fontSize={d.fontSize}
          fontFamily="var(--font-ibm-plex-mono), monospace"
        >
          PHARMACY
        </text>
        <text
          x={d.width / 2}
          y={d.lineY - d.dotSize - 4}
          textAnchor="middle"
          fill="var(--accent)"
          fontSize={d.fontSize - 1}
          fontFamily="var(--font-ibm-plex-mono), monospace"
          letterSpacing="0.05em"
        >
          LIVE
        </text>
        <text
          x={doctorX}
          y={d.lineY + d.dotSize + d.fontSize + 4}
          textAnchor="middle"
          fill="var(--muted)"
          fontSize={d.fontSize}
          fontFamily="var(--font-ibm-plex-mono), monospace"
        >
          DOCTOR
        </text>
      </svg>
    </div>
  );
}
