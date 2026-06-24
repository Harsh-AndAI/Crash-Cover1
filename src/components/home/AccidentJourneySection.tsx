"use client";

import {
  Car,
  PhoneCall,
  ClipboardCheck,
  Truck,
  Wrench,
} from "lucide-react";

const steps = [
  {
    icon: Car,
    title: "Accident Occurs",
    description:
      "Your vehicle is damaged and requires repairs.",
  },
  {
    icon: PhoneCall,
    title: "Contact Crash Cover",
    description:
      "Our team reviews your situation and guides you.",
  },
  {
    icon: ClipboardCheck,
    title: "Quick Approval",
    description:
      "We assess eligibility and arrange your replacement vehicle.",
  },
  {
    icon: Truck,
    title: "Vehicle Delivered",
    description:
      "A suitable replacement vehicle is delivered to you.",
  },
  {
    icon: Wrench,
    title: "Back On The Road",
    description:
      "Continue your daily routine while repairs are completed.",
  },
];

export default function AccidentJourneySection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] text-[#0891B2] font-semibold">
            Simple Journey
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
            From Accident To Recovery
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            We make the process simple, fast, and stress-free.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                relative
                bg-white
                rounded-3xl
                p-6
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0891B2]/10 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-[#0891B2]" />
                </div>

                <span className="text-sm font-bold text-[#0891B2]">
                  STEP {index + 1}
                </span>

                <h3 className="text-xl font-bold text-[#111111] mt-2">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                flex
                gap-5
                bg-white
                p-5
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                "
              >
                <div className="w-14 h-14 rounded-xl bg-[#0891B2]/10 flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-[#0891B2]" />
                </div>

                <div>
                  <span className="text-xs font-bold text-[#0891B2]">
                    STEP {index + 1}
                  </span>

                  <h3 className="font-bold text-lg text-[#111111] mt-1">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}