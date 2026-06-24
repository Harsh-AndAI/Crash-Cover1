"use client";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-20 bg-[#F8FAFC]"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="uppercase tracking-[3px] text-[#0891B2] font-semibold">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
            Get In Touch
          </h2>

          <p className="mt-4 text-slate-600">
            Have a question? Our team is here to help.
          </p>
        </div>

        <form className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Full Name *
              </label>

              <input
                type="text"
                placeholder="John Smith"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0891B2]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Email Address *
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0891B2]"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium text-slate-700">
              Phone Number *
            </label>

            <input
              type="tel"
              placeholder="0400 000 000"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0891B2]"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium text-slate-700">
              Message / Query Description *
            </label>

            <textarea
              rows={6}
              placeholder="Tell us how we can help..."
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0891B2]"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="
                w-full
                bg-[#0891B2]
                text-white
                py-4
                rounded-xl
                font-semibold
                hover:bg-[#0E7490]
                transition-all
                duration-300
              "
            >
              Send Message
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}

