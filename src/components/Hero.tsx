import Link from "next/link";
import Image from "next/image";
import heroCar from "@/assets/images/hero-car.png";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <p className="text-[#0891B2] font-semibold uppercase tracking-widest mb-4">
              Crash Cover Replacement Vehicles
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#111111] leading-tight">
              Your Trusted
              <span className="block text-[#0891B2]">
                Mobility Partner
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              Fast and reliable accident replacement vehicles
              for not-at-fault drivers across Melbourne.
              We help keep you moving while your vehicle is
              being repaired.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-[#0891B2] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0E7490] transition"
              >
                Request Vehicle
              </Link>

              <a
                href="tel:0495004455"
                className="border border-[#0891B2] text-[#0891B2] px-8 py-4 rounded-lg font-semibold hover:bg-[#0891B2] hover:text-white transition"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <Image
              src={heroCar}
              alt="Crash Cover Vehicle"
              className="w-full max-w-xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}