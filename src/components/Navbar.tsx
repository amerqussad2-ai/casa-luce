"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-charcoal/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-[0.25em] text-cream sm:text-2xl"
        >
          CASA LUCE
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-cream/90 transition-colors hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/reservations"
          className="hidden shrink-0 rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta/90 lg:inline-block"
        >
          Reserve a Table
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-cream/10 bg-charcoal/95 px-6 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-medium uppercase tracking-widest text-cream/90 transition-colors hover:text-terracotta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/reservations"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta/90"
              >
                Reserve a Table
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
