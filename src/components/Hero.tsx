import Link from "next/link";
import Image from "next/image";
import heroCar from "@/assets/images/hero-car2.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="
            absolute
            right-0
            top-0
            h-[250px]
            w-[250px]
            md:h-[500px]
            md:w-[500px]
            rounded-full
            bg-[#0891B2]/5
            blur-3xl
            " />
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 py-12 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="text-[#0891B2] font-semibold uppercase tracking-widest mb-4">
              Crash Cover Replacement Vehicles
            </p>

            <h1 className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-bold
            text-[#111111]
            leading-[1.1]
            ">
              Your Trusted
              <span className="block text-[#0891B2]">
                Mobility Partner
              </span>
            </h1>

            <p className="
              mt-6
              text-base
              md:text-lg
              text-slate-600
              leading-7
              md:leading-8
              max-w-xl
              ">
              Fast and reliable accident replacement vehicles
              for not-at-fault drivers across Melbourne.
              We help keep you moving while your vehicle is
              being repaired.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 md:gap-3">
              <span className="
                rounded-full
                bg-slate-100
                px-3 md:px-4
                py-2
                text-xs md:text-sm
                font-medium
                text-slate-700
                ">
                ✓ Not-at-Fault Drivers
              </span>

              <span className="
                rounded-full
                bg-slate-100
                px-3 md:px-4
                py-2
                text-xs md:text-sm
                font-medium
                text-slate-700
                ">
                ✓ Fast Vehicle Delivery
              </span>

              <span className="
                  rounded-full
                  bg-slate-100
                  px-3 md:px-4
                  py-2
                  text-xs md:text-sm
                  font-medium
                  text-slate-700
                  ">
                ✓ Melbourne Wide
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="
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
                Request Vehicle
              </Link>

              <a
                href="tel:0495004455"
                className="
                  border-2
                  border-[#0891B2]
                  text-[#0891B2]
                  w-full sm:w-auto px-8 py-4 text-center
                  rounded-xl
                  font-semibold
                  hover:bg-[#0891B2]
                  hover:text-white
                  transition-all
                  duration-300
                  "
              >
                Call Now
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0891B2]">
                500+
              </h3>
              <p className="text-slate-600 text-sm md:text-base">
                Vehicles Supplied
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0891B2]">
                24/7
              </h3>
              <p className="text-slate-600 text-sm md:text-base">
                Customer Support
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0891B2]">
                100%
              </h3>
              <p className="text-slate-600 text-sm md:text-base">
                Claim Assistance
              </p>
            </div>
          </div>

          </div>

          {/* Right Content */}
          <div className="flex justify-center order-first lg:order-last">
            <Image
              src={heroCar}
              alt="Crash Cover Vehicle"
              className="
                w-full
                max-w-md
                md:max-w-xl
                lg:max-w-2xl
                h-auto
                drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]
                "
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}