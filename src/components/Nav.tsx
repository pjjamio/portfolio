"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-neutral-100">
          PJ<span className="text-accent">.</span>
        </Link>

        <button
          className="text-neutral-300 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className="hidden gap-8 text-sm sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  (pathname === l.href ? "text-accent" : "text-neutral-400 hover:text-neutral-100") +
                  " transition-colors"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line/70 px-6 py-3 text-sm sm:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={
                  (pathname === l.href ? "text-accent" : "text-neutral-400") +
                  " block py-1.5"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
