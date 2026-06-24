"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Michael T.",
    review:
      "Crash Cover arranged a replacement vehicle within hours. The process was smooth, professional and stress-free.",
  },
  {
    name: "Sarah L.",
    review:
      "Excellent communication from start to finish. The vehicle was delivered quickly and exactly what we needed.",
  },
  {
    name: "David R.",
    review:
      "After my accident I was worried about transport. Crash Cover handled everything and got me back on the road fast.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[3px] text-cyan-100 font-semibold">
            Customer Stories
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Drivers Trust Crash Cover
          </h2>

          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={22}
                fill="white"
                className="text-white"
              />
            ))}
            <span className="ml-2 text-lg font-semibold text-white">
              4.9 Customer Rating
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="
              bg-white
              p-6
              rounded-3xl
              shadow-2xl
              border border-white/10
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#0891B2"
                    className="text-white"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-8">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-[#111111]">
                  {review.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-8 border-t border-white/10">

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              500+
            </h3>
            <p className="mt-2 text-cyan-100">
              Vehicles Delivered
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              98%
            </h3>
            <p className="mt-2 text-cyan-100">
              Customer Satisfaction
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              24/7
            </h3>
            <p className="mt-2 text-cyan-100">
              Support Available
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}