import Link from "next/link";
import Image from "next/image";
// import aboutImage from "@/assets/images/about-image.jpg";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side */}
          <div className="relative">
            {/* <Image
              src={aboutImage}
              alt="Crash Cover Team"
              className="w-full rounded-3xl object-cover shadow-lg"
              priority
            /> */}

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-6 py-4">
              <h3 className="text-2xl font-bold text-[#0891B2]">
                500+
              </h3>
              <p className="text-sm text-slate-600">
                Vehicles Supplied
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>

            <p className="text-[#0891B2] font-semibold uppercase tracking-widest mb-4">
              About Crash Cover
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              Keeping Melbourne Drivers Moving
            </h2>

            <p className="mt-6 text-slate-600 text-base md:text-lg leading-8">
              Crash Cover provides accident replacement vehicles
              for not-at-fault drivers across Melbourne and
              surrounding regions.
            </p>

            <p className="mt-4 text-slate-600 text-base md:text-lg leading-8">
              We work closely with customers, repairers and
              insurers to ensure a smooth and stress-free
              replacement vehicle experience while your vehicle
              is being repaired.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#0891B2] transition-all duration-300">
                <p className="font-medium text-[#111111]">
                  ✓ Fast Vehicle Delivery
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#0891B2] transition-all duration-300">
                <p className="font-medium text-[#111111]">
                  ✓ Insurance Claim Support
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#0891B2] transition-all duration-300">
                <p className="font-medium text-[#111111]">
                  ✓ Melbourne Wide Coverage
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#0891B2] transition-all duration-300">
                <p className="font-medium text-[#111111]">
                  ✓ Dedicated Assistance
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="
                inline-block
                mt-8
                bg-[#0891B2]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                hover:bg-[#0E7490]
              "
            >
              Learn More
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}