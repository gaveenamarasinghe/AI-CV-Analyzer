"use client";
import { ArrowRight, Upload, Brain, Map, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your CV",
    description: "Simply drag & drop or upload your resume in PDF format",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our advanced AI scans your CV and evaluates your skills against top job requirements",
  },
  {
    icon: Map,
    title: "Receive Personalized Roadmap",
    description: "Get a tailored learning plan with specific skills, courses, and milestones",
  },
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description: "Monitor your growth, update your CV, and see your career trajectory improve",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-gradient-to-b from-white via-indigo-50/40 to-white py-24 md:py-32 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6 font-medium">
            <Sparkles className="w-5 h-5" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            How CareerAI{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Transforms Your Career
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Get from resume upload to dream job faster with our streamlined AI-powered process
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-20 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step number circle with gradient */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 font-bold flex items-center justify-center text-sm shadow-md">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%+1.5rem)] -translate-x-1/2 text-indigo-400">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;