import { FileText, BadgeCheck, Car } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Request",
    description:
      "Tell us about your accident and vehicle details through our quick application form.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Get Approved",
    description:
      "Our team reviews your information and confirms your eligibility.",
  },
  {
    number: "03",
    icon: Car,
    title: "Receive Vehicle",
    description:
      "A replacement vehicle is delivered quickly so you can stay on the road.",
  },
];

export default function HowItWorks() {
  return (
        <section className="
            pt-16
            pb-20
            bg-gradient-to-b
            from-[#DFF4FF]
            to-white
            ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#0891B2] font-semibold uppercase tracking-wider">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111]">
            Your Replacement Vehicle Journey
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto">
            Getting a replacement vehicle is simple and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

  <div className="hidden md:block absolute left-0 right-0 top-24 h-[2px] bg-[#0891B2]/10"></div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                    group
                    relative
                    bg-white
                    rounded-3xl
                    p-8
                    border
                    border-slate-200
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-300
                    "
              >
                {/* Number */}
                <div
                  className="
                  absolute
                  top-5
                  right-5
                  text-5xl
                  font-black
                  text-[#0891B2]/20
                  "
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="
                  w-16 h-16
                  rounded-full
                  bg-gradient-to-b
                  from-[#EFF6FF]
                  to-white
                  shadow-md
                  border border-[#0891B2]/10
                  flex items-center justify-center
                  mb-6
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#0891B2]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#111111] mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}