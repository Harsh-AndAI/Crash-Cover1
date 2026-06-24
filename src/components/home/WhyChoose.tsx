import {
  ShieldCheck,
  Truck,
  Car,
  FileCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "No Upfront Cost",
    description:
      "Our costs are recovered through the at-fault party's insurer.",
  },
  {
    icon: Truck,
    title: "Fast Vehicle Delivery",
    description:
      "We deliver replacement vehicles quickly across Melbourne.",
  },
  {
    icon: Car,
    title: "Like-for-Like Vehicle",
    description:
      "Drive a vehicle similar to your own while yours is repaired.",
  },
  {
    icon: FileCheck,
    title: "Claim Support",
    description:
      "We assist throughout the insurance claim process.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#0891B2] font-semibold uppercase tracking-wider">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111]">
            Your Journey Doesn't Stop Here
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto">
            We help not-at-fault drivers stay mobile with fast,
            reliable replacement vehicles and end-to-end support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-sm
                border border-slate-100
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-16 h-16
                  mx-auto
                  rounded-full
                  bg-[#0891B2]/10
                  flex items-center justify-center
                  mb-6
                  "
                >
                  <Icon
                    size={32}
                    className="text-[#0891B2]"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#111111] mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}