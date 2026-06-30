"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onPresentationMode: () => void;
}

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Flows", href: "#flows" },
  { label: "Technology", href: "#technology" },
  { label: "Budget", href: "#capital" },
];

export default function Header({ onPresentationMode }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-xs tracking-[0.12em] text-primary font-medium uppercase"
        >
          Wellity
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-grow text-sm text-muted hover:text-ink transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onPresentationMode}
            className="ml-2 px-3.5 py-1.5 text-xs font-mono tracking-wide border border-line rounded-lg text-muted hover:text-primary hover:border-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary"
          >
            Present
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <path d="M5 5l10 10" />
                <path d="M15 5L5 15" />
              </>
            ) : (
              <>
                <path d="M3 6h14" />
                <path d="M3 10h14" />
                <path d="M3 14h14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-line bg-paper/95 backdrop-blur-md">
          <div className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors font-sans py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onPresentationMode();
              }}
              className="mt-2 px-3.5 py-2 text-xs font-mono tracking-wide border border-line rounded-lg text-muted hover:text-primary hover:border-primary transition-colors w-fit"
            >
              Presentation Mode
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
