"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 overflow-hidden py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-8 font-medium border border-white/20">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span>Start Today – It's Free!</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Ready to{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Accelerate Your Career
          </span>
          ?
        </h2>

        <p className="text-xl md:text-2xl text-indigo-100/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Join thousands of ambitious students and early-career professionals who are 
          already landing better internships and jobs with CareerAI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-indigo-700 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Start Free Trial
            <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/pricing"
            className="group inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white border-2 border-white/40 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/60"
          >
            See Pricing
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-indigo-100/80">
          <div className="flex items-center gap-2">
            <span className="text-green-300 text-2xl">✓</span> No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300 text-2xl">✓</span> Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300 text-2xl">✓</span> 30-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;