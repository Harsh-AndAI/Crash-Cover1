"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import logo from "@/assets/logos/crash-cover-logo.png";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#F8FAFC] border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Company */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src={logo}
              alt="Crash Cover Logo"
              width={220}
              height={80}
              className="mb-5"
            />

            <p className="text-[15px] leading-7 text-slate-600">
              Crash Cover is a Melbourne-based accident replacement
              vehicle provider helping not-at-fault drivers stay on
              the road after an accident.
            </p>

            <p className="mt-4 text-sm font-semibold text-[#0891B2]">
              Your Trusted Mobility Partner
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[20px] font-bold text-[#111111] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0891B2] transition-all duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0891B2] transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-[#0891B2] transition-all duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-[#0891B2] transition-all duration-300"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  href="/fleet"
                  className="hover:text-[#0891B2] transition-all duration-300"
                >
                  Fleet
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#0891B2] transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0891B2] transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[20px] font-bold text-[#111111] mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li className="hover:text-[#0891B2] cursor-pointer transition-all duration-300">
                Accident Replacement Vehicles
              </li>

              <li className="hover:text-[#0891B2] cursor-pointer transition-all duration-300">
                Insurance Claim Assistance
              </li>

              <li className="hover:text-[#0891B2] cursor-pointer transition-all duration-300">
                Accident Assistance
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[20px] font-bold text-[#111111] mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4 text-slate-600">
              <li>0495 00 44 55</li>

              <li>
                <a
                  href="mailto:info@crashcover.com.au"
                  className="hover:text-[#0891B2]"
                >
                  info@crashcover.com.au
                </a>
              </li>

              <li>
                81 Railway Avenue
                <br />
                Werribee 3030 VIC
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-[20px] font-bold text-[#111111] mb-5">
              Service Areas
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>Melbourne</li>
              <li>Geelong</li>
              <li>Western Suburbs</li>
              <li>Victoria Wide</li>
            </ul>

            <h3 className="text-[20px] font-bold text-[#111111] mt-10 mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl text-slate-500">
              <FaLinkedin className="cursor-pointer hover:text-[#0891B2] hover:scale-110 transition-all duration-300" />

              <FaInstagram className="cursor-pointer hover:text-[#0891B2] hover:scale-110 transition-all duration-300" />

              <FaFacebookF className="cursor-pointer hover:text-[#0891B2] hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-14 pt-8">

          <p className="text-center mt-8 text-sm text-slate-500">
            © 2026 Crash Cover Replacement Vehicles. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}