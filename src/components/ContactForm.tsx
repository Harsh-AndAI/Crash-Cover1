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
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-blue-900 px-6 sm:px-10 py-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Apply online now
        </h2>
        <p className="mt-2 text-sm sm:text-base text-blue-100 max-w-2xl">
          Our local team is available to help you!
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-6 sm:px-10 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
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
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
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
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
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
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
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
                    aria-pressed={isSelected}
                    className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                      isSelected
                        ? "bg-blue-900 border-blue-900 text-white shadow-sm"
                        : "bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100"
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
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition uppercase"
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
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition uppercase"
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
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
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
            className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-sm font-bold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-800 transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}