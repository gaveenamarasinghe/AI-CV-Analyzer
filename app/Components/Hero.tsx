"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-32 text-center lg:pt-32 lg:pb-40">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-8 font-medium">
          <Sparkles className="w-5 h-5" />
          <span>AI-Powered Career Growth</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="text-gray-900">Accelerate Your Career with</span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Personal AI Mentor
          </span>
        </h1>

        <p className="mt-8 text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          Get personalized CV feedback, realistic mock interviews, and tailored skill roadmaps 
          designed to help you land your dream internship or job faster.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Start Free Trial
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/demo"
            className="group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-indigo-700 bg-white border-2 border-indigo-200 rounded-xl hover:bg-indigo-50 transition-all duration-300 hover:border-indigo-300"
          >
            Watch Demo
            <span className="ml-3 text-indigo-500">→</span>
          </Link>
        </div>

        {/* Optional trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span> 100% Free Trial
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span> No Credit Card Required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span> Loved by 5,000+ Students
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;