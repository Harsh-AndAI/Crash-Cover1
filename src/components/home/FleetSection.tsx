"use client";

import Image from "next/image";
import Link from "next/link";

import sedan from "@/assets/fleet/sedan.png";
import suv from "@/assets/fleet/suv.png";
import luxury from "@/assets/fleet/luxury.png";
import commercial from "@/assets/fleet/commercial.png";

const fleet = [
  {
    title: "Compact Cars",
    image: sedan,
    desc: "Efficient and practical daily drivers.",
  },
  {
    title: "SUV Range",
    image: suv,
    desc: "Spacious vehicles for family travel.",
  },
  {
    title: "Luxury Vehicles",
    image: luxury,
    desc: "Premium replacement vehicle options.",
  },
  {
    title: "Commercial Vehicles",
    image: commercial,
    desc: "Vans and utility vehicles for work.",
  },
];

export default function FleetSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[3px] text-[#0891B2] font-semibold">
            Our Fleet
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
            Replacement Vehicles For Every Need
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            From compact cars to commercial vehicles,
            we help keep you moving.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {fleet.map((item) => (
            <div
              key={item.title}
              className="
                    group
                    bg-gradient-to-b
                    from-white
                    to-slate-50
                    rounded-3xl
                    overflow-hidden
                    border
                    border-slate-200
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-500
                    "
            >
              <div className="p-6">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="
                        w-full
                        h-56 md:h-64
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                    />
              </div>

              <div className="px-6 pb-6">
                <span
                className="
                inline-block
                px-3
                py-1
                rounded-full
                bg-[#0891B2]/10
                text-[#0891B2]
                text-xs
                font-semibold
                mb-4
                "
                >
                Fleet Category
                </span>
                <h3 className="text-xl font-bold text-[#111111]">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.desc}
                </p>
                <div className="mt-5">
                <span
                    className="
                    inline-flex
                    items-center
                    gap-2
                    text-[#0891B2]
                    font-semibold
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    "
                >
                    Learn More →
                </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/fleet"
            className="
              inline-flex
              items-center
              bg-[#0891B2]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-[#0E7490]
              transition-all
              duration-300
            "
          >
            View Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
}