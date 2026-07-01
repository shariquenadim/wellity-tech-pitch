"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import DiagramImageFallback from "@/components/diagrams/DiagramImageFallback";

interface Props {
  trigger?: boolean;
  dark?: boolean;
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function Node({
  x,
  y,
  width,
  height,
  title,
  sub,
  delay,
  active,
  dark,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  sub?: string;
  delay: number;
  active: boolean;
  dark: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const text = dark ? "rgba(247,250,252,0.88)" : "var(--ink)";
  const subText = dark ? "rgba(247,250,252,0.52)" : "var(--muted)";

  return (
    <motion.g
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.45, ease: EASE, delay }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="12"
        fill={dark ? "rgba(247,250,252,0.06)" : "white"}
        stroke={dark ? "rgba(72,169,220,0.42)" : "var(--brand)"}
        strokeWidth="1.4"
      />
      <text
        x={x + width / 2}
        y={y + height / 2 - (sub ? 5 : -4)}
        textAnchor="middle"
        fill={text}
        fontSize="16"
        fontFamily="var(--font-ibm-plex-mono), monospace"
        fontWeight="600"
      >
        {title}
      </text>
      {sub && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 17}
          textAnchor="middle"
          fill={subText}
          fontSize="13"
          fontFamily="var(--font-ibm-plex-mono), monospace"
        >
          {sub}
        </text>
      )}
    </motion.g>
  );
}

function Connector({
  d,
  delay,
  active,
  live = false,
  dark,
  markerSuffix,
}: {
  d: string;
  delay: number;
  active: boolean;
  live?: boolean;
  dark: boolean;
  markerSuffix: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const color = live ? "var(--live)" : dark ? "rgba(247,250,252,0.24)" : "var(--line)";

  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={live ? "2" : "1.5"}
      strokeLinecap="round"
      fill="none"
      markerEnd={
        live
          ? `url(#architecture-arrow-live-${markerSuffix})`
          : `url(#architecture-arrow-${markerSuffix})`
      }
      initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
      animate={
        active
          ? { pathLength: 1, opacity: live ? 0.9 : 1 }
          : { pathLength: 0, opacity: 0 }
      }
      transition={{ duration: 0.55, ease: EASE, delay }}
    />
  );
}

function Layer({
  y,
  label,
  delay,
  active,
  dark,
}: {
  y: number;
  label: string;
  delay: number;
  active: boolean;
  dark: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.g
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.45, ease: EASE, delay }}
    >
      <rect
        x="24"
        y={y}
        width="852"
        height="86"
        rx="18"
        fill={dark ? "rgba(247,250,252,0.035)" : "var(--surface)"}
        stroke={dark ? "rgba(247,250,252,0.08)" : "rgba(213,226,236,0.8)"}
      />
      <text
        x="52"
        y={y + 49}
        fill={dark ? "rgba(247,250,252,0.45)" : "var(--muted)"}
        fontSize="12"
        fontFamily="var(--font-ibm-plex-mono), monospace"
        letterSpacing="0.16em"
      >
        {label}
      </text>
    </motion.g>
  );
}

export default function ArchitectureDiagram({
  trigger,
  dark = false,
  className = "",
}: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = shouldReduceMotion
    ? true
    : trigger !== undefined
    ? trigger
    : inView;
  const arrowColor = dark ? "rgba(247,250,252,0.28)" : "var(--line)";
  const markerSuffix = dark ? "dark" : "light";

  const svg = (
    <div className={`w-full overflow-x-auto -mx-6 px-6 ${className}`}>
      <svg
        ref={ref}
        viewBox="0 0 900 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto w-full max-w-[900px]"
        role="img"
        aria-label="Layered system architecture with clients, application, data, and external services"
      >
        <defs>
          <marker
            id={`architecture-arrow-${markerSuffix}`}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M1 1 7 4 1 7" stroke={arrowColor} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </marker>
          <marker
            id={`architecture-arrow-live-${markerSuffix}`}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M1 1 7 4 1 7" stroke="var(--live)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </marker>
        </defs>

        <Layer y={28} label="CLIENTS" delay={0} active={shouldAnimate} dark={dark} />
        <Layer y={146} label="APPLICATION" delay={0.12} active={shouldAnimate} dark={dark} />
        <Layer y={264} label="DATA" delay={0.24} active={shouldAnimate} dark={dark} />
        <Layer y={382} label="EXTERNAL" delay={0.36} active={shouldAnimate} dark={dark} />

        <Node x={250} y={49} width={205} height={44} title="Pharmacy Dashboard" delay={0.1} active={shouldAnimate} dark={dark} />
        <Node x={505} y={49} width={185} height={44} title="Doctor Dashboard" delay={0.16} active={shouldAnimate} dark={dark} />
        <Node x={230} y={168} width={430} height={54} title="App Layer" sub="Next.js / FastAPI · Auth · RBAC" delay={0.25} active={shouldAnimate} dark={dark} />
        <Node x={205} y={287} width={250} height={54} title="PostgreSQL" sub="Records + Audit" delay={0.38} active={shouldAnimate} dark={dark} />
        <Node x={505} y={287} width={250} height={54} title="Object Store · R2" sub="Documents" delay={0.44} active={shouldAnimate} dark={dark} />
        <Node x={160} y={407} width={170} height={50} title="ABDM/ABHA" delay={0.54} active={shouldAnimate} dark={dark} />
        <Node x={365} y={407} width={210} height={50} title="eSign + Verify" sub="Aadhaar/PAN/Licence" delay={0.6} active={shouldAnimate} dark={dark} />
        <Node x={610} y={407} width={180} height={50} title="WhatsApp Biz" delay={0.66} active={shouldAnimate} dark={dark} />

        <Connector d="M352 94 V132 Q352 146 376 158" delay={0.58} active={shouldAnimate} live dark={dark} markerSuffix={markerSuffix} />
        <Connector d="M598 94 V132 Q598 146 558 158" delay={0.62} active={shouldAnimate} live dark={dark} markerSuffix={markerSuffix} />
        <Connector d="M445 222 V264" delay={0.76} active={shouldAnimate} dark={dark} markerSuffix={markerSuffix} />
        <Connector d="M560 222 V264" delay={0.8} active={shouldAnimate} dark={dark} markerSuffix={markerSuffix} />
        <Connector d="M330 341 V370 Q330 386 280 397" delay={0.92} active={shouldAnimate} dark={dark} markerSuffix={markerSuffix} />
        <Connector d="M450 341 V397" delay={0.96} active={shouldAnimate} dark={dark} markerSuffix={markerSuffix} />
        <Connector d="M630 341 V370 Q630 386 690 397" delay={1} active={shouldAnimate} dark={dark} markerSuffix={markerSuffix} />

        <motion.text
          x="475"
          y="129"
          textAnchor="middle"
          fill="var(--live)"
          fontSize="11"
          fontFamily="var(--font-ibm-plex-mono), monospace"
          letterSpacing="0.16em"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: shouldAnimate ? 1 : 0 }}
          transition={{ duration: 0.35, ease: EASE, delay: 0.82 }}
        >
          SSE + REST
        </motion.text>
      </svg>
    </div>
  );

  return (
    <DiagramImageFallback
      src="/diagrams/architecture.png"
      alt="Layered Wellity architecture diagram"
      className={className}
      dark={dark}
    >
      {svg}
    </DiagramImageFallback>
  );
}
