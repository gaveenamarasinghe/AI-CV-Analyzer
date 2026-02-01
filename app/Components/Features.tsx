"use client";
import { Brain, Target, TrendingUp, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";


const features = [
  {
    icon: Brain,
    title: "AI-Powered CV Analysis",
    desc: "Get instant, detailed feedback on your resume with actionable suggestions to stand out to recruiters.",
    color: "from-indigo-500 to-indigo-600",
    href: "/cv-analyzer"
  },
  {
    icon: MessageSquare,
    title: "Realistic Mock Interviews",
    desc: "Practice with role-specific questions and receive real-time AI feedback on your answers.",
    color: "from-purple-500 to-purple-600",
    href: "/mork-interviews",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    desc: "Identify exactly what skills you need to develop to reach your target roles.",
    color: "from-pink-500 to-rose-600",
    href: "/skill-gap",
  },
  {
    icon: TrendingUp,
    title: "Personalized Career Roadmap",
    desc: "Receive a clear, step-by-step plan with milestones to accelerate your career growth.",
    color: "from-blue-500 to-cyan-600",
    href: "/career-roadmap",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-white via-indigo-50/30 to-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/80 text-indigo-700 rounded-full mb-6 font-medium">
            <Sparkles className="w-5 h-5" />
            <span>Powerful AI Tools</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Land Your Dream Role
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI features designed specifically for students and early-career professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg mb-6 flex-grow">
                {feature.desc}
              </p>

              {/* Learn more button */}
              <div className="mt-auto flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors">
                Learn more
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;