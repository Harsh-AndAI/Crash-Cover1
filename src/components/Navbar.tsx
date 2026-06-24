"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logos/crash-cover-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Fleet", href: "/fleet" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <header
        className="
            sticky top-0 z-50
            bg-white
            border-b border-slate-100
        "
        >
      <nav className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="flex h-24 md:h-24 lg:h-28 items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/">
            <Image
              src={logo}
              alt="Crash Cover Logo"
              width={320}
              height={90}
              priority
              className="w-[220px] md:w-[240px] lg:w-[320px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-[15px]
                  font-semibold
                  text-[#111111]
                  transition-all
                  duration-300
                  hover:text-[#0891B2]

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-[#0891B2]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">


            <Link
              href="/contact"
              className="
                rounded-lg
                bg-[#0891B2]
                px-4 md:px-5 lg:px-6
                py-2 md:py-3
                text-xs md:text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#0E7490]
              "
            >
              Request Vehicle
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X size={32} className="text-[#111111]" />
              ) : (
                <Menu size={32} className="text-[#111111]" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
  <div className="lg:hidden border-t border-slate-100 bg-white">
    <div className="flex flex-col px-5 py-5">

      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="
            py-3
            border-b
            border-slate-100
            text-[#111111]
            font-medium
          "
        >
          {link.name}
        </Link>
      ))}

      <Link
        href="/contact"
        onClick={() => setIsOpen(false)}
        className="
          mt-4
          bg-[#0891B2]
          text-white
          text-center
          py-3
          rounded-lg
          font-semibold
        "
      >
        Request Vehicle
      </Link>

    </div>
  </div>
)}
    </header>
  );
}