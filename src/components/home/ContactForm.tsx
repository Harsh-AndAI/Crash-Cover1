"use client";

import { useState } from "react";

type FaultStatus = "no" | "yes" | "unsure" | null;

type FormData = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  faultStatus: FaultStatus;
  postcode: string;
  regNumber: string;
  vehicleMakeModel: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    faultStatus: null,
    postcode: "",
    regNumber: "",
    vehicleMakeModel: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFaultSelect = (value: FaultStatus) => {
    setFormData((prev) => ({ ...prev, faultStatus: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const faultOptions: { label: string; value: FaultStatus }[] = [
    { label: "No", value: "no" },
    { label: "Yes", value: "yes" },
    { label: "Not Sure", value: "unsure" },
  ];

  return (
  <section
    id="contact"
    className="py-24 bg-white scroll-mt-32"
  >
    <div className="max-w-5xl mx-auto px-6">

      <div className="text-center mb-12">
        <p className="uppercase tracking-[3px] text-[#0891B2] font-semibold">
          Contact Us
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
          Request A Replacement Vehicle
        </h2>

        <p className="mt-4 text-slate-600">
          Complete the form below and our team will contact you shortly.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto">
      {/* Form */}
      <form onSubmit={handleSubmit} className="px-6 sm:px-10 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-slate-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-[#0891B2] transition"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-sm font-semibold text-slate-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Smith"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-[#0891B2] transition"
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="mobile"
              className="text-sm font-semibold text-slate-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              placeholder="07700 900000"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-[#0891B2] transition"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john.smith@example.com"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-[#0891B2] transition"
            />
          </div>

          {/* Was the accident your fault? - full width */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">
              Was the accident your fault?
            </span>
            <div className="grid grid-cols-3 gap-3">
              {faultOptions.map((option) => {
                const isSelected = formData.faultStatus === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleFaultSelect(option.value)}
                    aria-pressed={isSelected ? "true" : "false"}
                    className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#0891B2] ${
                      isSelected
                        ? "bg-[#0891B2] border-[#0891B2] text-white shadow-sm"
                        : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Postcode of Accident */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="postcode"
              className="text-sm font-semibold text-slate-700"
            >
              Postcode of Accident
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              required
              value={formData.postcode}
              onChange={handleChange}
              placeholder="SW1A 1AA"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-[#0891B2] transition uppercase"
            />
          </div>

          {/* Vehicle Registration Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="regNumber"
              className="text-sm font-semibold text-slate-700"
            >
              Vehicle Registration Number
            </label>
            <input
              type="text"
              id="regNumber"
              name="regNumber"
              required
              value={formData.regNumber}
              onChange={handleChange}
              placeholder="AB12 CDE"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-[#0891B2] transition uppercase"
            />
          </div>

          {/* Vehicle Make & Model - full width */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label
              htmlFor="vehicleMakeModel"
              className="text-sm font-semibold text-slate-700"
            >
              Vehicle Make & Model
            </label>
            <input
              type="text"
              id="vehicleMakeModel"
              name="vehicleMakeModel"
              required
              value={formData.vehicleMakeModel}
              onChange={handleChange}
              placeholder="Ford Focus"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-[#0891B2] transition"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 order-2 sm:order-1">
            By submitting, you agree to be contacted regarding your claim.
          </p>
          <button
            type="submit"
            className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#0891B2] px-12 py-4 text-sm font-bold text-white shadow-sm hover:bg-[#0E7490] focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:ring-offset-2 active:bg-[#0E7490] transition rounded-full font-semibold"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
    </div>
  </section>
  );
}