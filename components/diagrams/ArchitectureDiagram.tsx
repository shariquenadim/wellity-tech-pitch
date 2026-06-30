"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface Props {
  trigger?: boolean;
  dark?: boolean;
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ArchitectureDiagram({ trigger, dark = false, className = "" }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const shouldAnimate = shouldReduceMotion
    ? false
    : trigger !== undefined
    ? trigger
    : inView;

  const nodeFill = dark ? "rgba(255,255,255,0.08)" : "var(--surface)";
  const nodeStroke = dark ? "rgba(255,255,255,0.18)" : "var(--line)";
  const labelColor = dark ? "rgba(247,250,252,0.85)" : "var(--brand)";
  const subColor = dark ? "rgba(247,250,252,0.50)" : "var(--muted)";
  const connectorColor = dark ? "rgba(255,255,255,0.18)" : "var(--line)";
  const appFill = dark ? "rgba(255,255,255,0.05)" : "var(--brand)";
  const appStroke = dark ? "rgba(72,169,220,0.5)" : "var(--brand)";

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: shouldAnimate ? 1 : 0 },
    transition: { duration: 0.45, ease: EASE, delay },
  });

  const pathDraw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: shouldAnimate ? 1 : 0, opacity: shouldAnimate ? 1 : 0 },
    transition: { duration: 0.4, ease: EASE, delay },
  });

  return (
    <div className={`w-full overflow-x-auto -mx-6 px-6 ${className}`}>
      <svg
        ref={ref}
        viewBox="0 0 820 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[820px] mx-auto"
        role="img"
        aria-label="System architecture: clients connect through app layer to storage and external services"
      >
        {/* ——— Column 1: Clients ——— */}
        <motion.g {...fadeIn(0)}>
          <rect x="10" y="80" width="140" height="56" rx="10" fill={nodeFill} stroke={nodeStroke} strokeWidth="1" />
          <text x="80" y="104" textAnchor="middle" fill={labelColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">PHARMACY</text>
          <text x="80" y="122" textAnchor="middle" fill={subColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Dashboard</text>

          <rect x="10" y="200" width="140" height="56" rx="10" fill={nodeFill} stroke={nodeStroke} strokeWidth="1" />
          <text x="80" y="224" textAnchor="middle" fill={labelColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">DOCTOR</text>
          <text x="80" y="242" textAnchor="middle" fill={subColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Dashboard</text>
        </motion.g>

        {/* ——— Arrows: Clients → App Layer ——— */}
        <motion.path d="M 150 108 L 258 158" stroke={connectorColor} strokeWidth="1.5" {...pathDraw(0.2)} />
        <motion.path d="M 150 228 L 258 178" stroke={connectorColor} strokeWidth="1.5" {...pathDraw(0.2)} />
        <motion.polygon points="254,154 262,158 254,162" fill={connectorColor} {...fadeIn(0.35)} />
        <motion.polygon points="254,174 262,178 254,182" fill={connectorColor} {...fadeIn(0.35)} />

        {/* ——— Column 2: App Layer ——— */}
        <motion.g {...fadeIn(0.2)}>
          <rect x="260" y="120" width="160" height="100" rx="12" fill={appFill} fillOpacity={dark ? 1 : 0.07} stroke={appStroke} strokeWidth="1.5" />
          <text x="340" y="148" textAnchor="middle" fill={dark ? "rgba(72,169,220,0.9)" : "var(--brand)"} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" fontWeight="600" letterSpacing="0.05em">APP LAYER</text>
          <text x="340" y="170" textAnchor="middle" fill={subColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Next.js · FastAPI</text>
          <text x="340" y="188" textAnchor="middle" fill={subColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">SSE + REST</text>
          <text x="340" y="206" textAnchor="middle" fill={subColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Auth · RBAC</text>
        </motion.g>

        {/* ——— Arrows: App Layer → Storage ——— */}
        <motion.path d="M 420 160 L 508 108" stroke={connectorColor} strokeWidth="1.5" {...pathDraw(0.4)} />
        <motion.path d="M 420 180 L 508 228" stroke={connectorColor} strokeWidth="1.5" {...pathDraw(0.4)} />
        <motion.polygon points="504,104 512,108 504,112" fill={connectorColor} {...fadeIn(0.55)} />
        <motion.polygon points="504,224 512,228 504,232" fill={connectorColor} {...fadeIn(0.55)} />

        {/* ——— Column 3: Storage ——— */}
        <motion.g {...fadeIn(0.4)}>
          <rect x="510" y="80" width="140" height="56" rx="10" fill={nodeFill} stroke={nodeStroke} strokeWidth="1" />
          <text x="580" y="104" textAnchor="middle" fill={labelColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">POSTGRES</text>
          <text x="580" y="122" textAnchor="middle" fill={subColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Records · Audit</text>

          <rect x="510" y="200" width="140" height="56" rx="10" fill={nodeFill} stroke={nodeStroke} strokeWidth="1" />
          <text x="580" y="224" textAnchor="middle" fill={labelColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">OBJECT STORE</text>
          <text x="580" y="242" textAnchor="middle" fill={subColor} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">R2 · Documents</text>
        </motion.g>

        {/* ——— Dashed arrows: Storage → External ——— */}
        <motion.path d="M 650 108 L 688 68" stroke={connectorColor} strokeWidth="1.5" strokeDasharray="4 3" {...pathDraw(0.6)} />
        <motion.path d="M 650 108 L 688 148" stroke={connectorColor} strokeWidth="1.5" strokeDasharray="4 3" {...pathDraw(0.6)} />
        <motion.path d="M 650 228 L 688 248" stroke={connectorColor} strokeWidth="1.5" strokeDasharray="4 3" {...pathDraw(0.6)} />

        {/* ——— Column 4: External Services ——— */}
        <motion.g {...fadeIn(0.6)}>
          <rect x="690" y="40" width="120" height="44" rx="8" fill="none" stroke={nodeStroke} strokeWidth="1" strokeDasharray="4 3" />
          <text x="750" y="58" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">ABDM / ABHA</text>
          <text x="750" y="74" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">Health ID</text>

          <rect x="690" y="120" width="120" height="56" rx="8" fill="none" stroke={nodeStroke} strokeWidth="1" strokeDasharray="4 3" />
          <text x="750" y="142" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">VERIFICATION</text>
          <text x="750" y="158" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">eSign · Aadhaar</text>
          <text x="750" y="170" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">PAN · Licence</text>

          <rect x="690" y="220" width="120" height="44" rx="8" fill="none" stroke={nodeStroke} strokeWidth="1" strokeDasharray="4 3" />
          <text x="750" y="238" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">WHATSAPP</text>
          <text x="750" y="254" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">Business API</text>
        </motion.g>

        {/* ——— Column labels ——— */}
        <text x="80" y="40" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.1em" opacity="0.6">CLIENTS</text>
        <text x="340" y="40" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.1em" opacity="0.6">APPLICATION</text>
        <text x="580" y="40" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.1em" opacity="0.6">STORAGE</text>
        <text x="750" y="20" textAnchor="middle" fill={subColor} fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.1em" opacity="0.6">EXTERNAL</text>
      </svg>
    </div>
  );
}
