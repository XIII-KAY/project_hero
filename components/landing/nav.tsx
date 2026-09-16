"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { cn } from "cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#process", label: "How We Work" },
  { href: "/#why", label: "Why Us" },
  { href: "mailto:" + SITE.email, label: "Contact" },
];

const serviceLinks = [
  { href: "/#ai-data", label: "AI Data Operations" },
  { href: "/#research", label: "Research & Surveys" },
  { href: "/#workforce", label: "Remote Workforce" },
  { href: "/#transcription", label: "Transcription & Speech" },
  { href: "/#technology", label: "Technology & Automation" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="hero-nav" aria-label="Main navigation">
      <Link href="/" className="logo">
        {SITE.name}
        <span className="logo-dot">.</span>
      </Link>

      <div className="hero-nav-links">
        {navLinks.map((link) => {
          const active = (link.href === "/" && pathname === "/") || (link.href === "/#process" && pathname === "/");
          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn("hero-link", active && "active")}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="nav-dropdown">
          <Link href="/services" className={cn("hero-link", pathname === "/services" && "active")}>
            Services
          </Link>
          <div className="nav-dropdown-menu">
            <span className="dd-label">Services</span>
            {serviceLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/services" className="dd-all">
              View all services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}