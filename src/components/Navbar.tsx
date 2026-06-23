// "use client";

import Link from "next/link";
import Image from "next/image";
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
  return (
        <header
        className="
            sticky top-0 z-50
            bg-white
            border-b border-slate-100
        "
        >
      <nav className="mx-auto max-w-[1400px] px-8">
        <div className="flex h-28 items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/">
            <Image
            src={logo}
            alt="Crash Cover Logo"
            width={320}
            height={90}
            priority
            />
          </Link>

          {/* Navigation */}
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
          <div className="flex items-center gap-4">


            <Link
              href="/contact"
              className="
                rounded-lg
                bg-[#0891B2]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#0E7490]
              "
            >
              Request Vehicle
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}