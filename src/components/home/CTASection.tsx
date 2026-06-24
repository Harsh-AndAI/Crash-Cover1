"use client";

import { Phone, Car, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-gradient-to-r from-[#0891B2] to-[#0E7490] rounded-[32px] p-10 md:p-16 shadow-[0_25px_60px_rgba(8,145,178,0.20)] border border-white/20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[3px] text-cyan-100 font-semibold">
                Get Started Today
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                Need A Replacement Vehicle Today?
              </h2>

              <p className="mt-6 text-lg text-cyan-50 leading-8">
                Our team can arrange a replacement vehicle quickly so you can
                stay on the road while your vehicle is being repaired.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck size={22} />
                  <span>No Upfront Cost</span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <Clock size={22} />
                  <span>Fast Approval</span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <Car size={22} />
                  <span>Vehicle Delivered</span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <Phone size={22} />
                  <span>Local Support Team</span>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center lg:items-end gap-5">

              <Link
                href="#contact"
                className="
                  w-full
                  lg:w-auto
                  text-center
                  bg-white
                  text-[#0891B2]
                  px-10
                  py-4
                  rounded-xl
                  font-bold
                  text-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Request Vehicle Now
              </Link>

              <a
                href="tel:+61000000000"
                className="
                  w-full
                  lg:w-auto
                  text-center
                  border-2
                  border-white
                  text-white
                  px-10
                  py-4
                  rounded-xl
                  font-bold
                  text-lg
                  hover:bg-white
                  hover:text-[#0891B2]
                  transition-all
                  duration-300
                "
              >
                Call Us Today
              </a>

              <div className="mt-4 text-center lg:text-right">
                <p className="text-cyan-100 text-sm">
                  Available 7 Days A Week
                </p>

                <h3 className="text-white text-3xl font-bold mt-1">
                  1300 889 256
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}