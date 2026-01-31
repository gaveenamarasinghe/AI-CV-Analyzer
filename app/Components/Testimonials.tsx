"use client";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineering Intern at Google",
    message:
      "CareerAI transformed my job search. The realistic mock interviews built my confidence, and the detailed feedback helped me land my dream internship at Google.",
  },
  {
    name: "Michael Chen",
    role: "Data Science Intern at Microsoft",
    message:
      "The AI-powered CV analysis was a game-changer. It spotted issues no recruiter had ever mentioned. Within weeks, I started getting callbacks from top tech companies.",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Design Intern at Adobe",
    message:
      "The personalized career roadmap gave me clear direction for the first time. I knew exactly which skills to build and what projects to showcase — and it worked!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-white via-purple-50/30 to-white py-24 md:py-32 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6 font-medium">
            <Sparkles className="w-5 h-5" />
            <span>Real Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Trusted by Students Who{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Landed Dream Internships
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who turned their career goals into reality with CareerAI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Quote icon */}
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                <Quote className="w-8 h-8 text-white opacity-80" />
              </div>

              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-sm"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                “{testimonial.message}”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional trust indicator */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-lg">
            Join <span className="font-semibold text-indigo-600">5,000+</span> students who’ve boosted their careers with CareerAI
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;