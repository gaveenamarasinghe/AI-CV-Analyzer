"use client";
import { useState } from "react";
import { 
  TrendingUp, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Target, 
  Loader2, 
  ArrowRight, 
  Calendar,
  BookOpen,
  Award,
  Briefcase,
  ChevronRight
} from "lucide-react";

const CareerRoadmap = () => {
  const [targetRole, setTargetRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("entry");
  const [isGenerating, setIsGenerating] = useState(false);
  const [roadmap, setRoadmap] = useState<{
    title: string;
    timeline: string;
    overallGoal: string;
    milestones: Array<{
      phase: string;
      duration: string;
      goals: string[];
      skills: string[];
      resources: string[];
      status: "pending" | "in-progress" | "completed";
    }>;
    nextSteps: string[];
  } | null>(null);

  const popularRoles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX/UI Designer",
    "DevOps Engineer",
    "Machine Learning Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  const handleGenerateRoadmap = () => {
    if (!targetRole.trim()) return;

    setIsGenerating(true);

    // Simulate AI-powered roadmap generation with real-time job market data
    setTimeout(() => {
      const sampleRoadmap: NonNullable<typeof roadmap> = {
        title: `${targetRole} Career Roadmap`,
        timeline: "12–24 months (depending on current level)",
        overallGoal: `Become a proficient ${targetRole} ready for top-tier companies`,
        milestones: [
          {
            phase: "Foundation Building",
            duration: "Months 1–3",
            goals: [
              "Master core technical skills",
              "Build strong portfolio projects",
              "Establish professional online presence"
            ],
            skills: ["JavaScript/TypeScript", "React", "Git", "REST APIs", "Basic Algorithms"],
            resources: ["freeCodeCamp", "The Odin Project", "LeetCode (Easy/Medium)"],
            status: "pending"
          },
          {
            phase: "Intermediate Growth",
            duration: "Months 4–8",
            goals: [
              "Contribute to open-source",
              "Complete advanced projects",
              "Start applying to internships"
            ],
            skills: ["Node.js/Express", "Database (SQL/NoSQL)", "Testing", "CI/CD Basics"],
            resources: ["Udemy: Advanced React", "GitHub", "Build 3–5 portfolio projects"],
            status: "pending"
          },
          {
            phase: "Advanced Specialization",
            duration: "Months 9–14",
            goals: [
              "Gain real-world experience",
              "Specialize in high-demand area",
              "Network & get referrals"
            ],
            skills: ["System Design", "Microservices", "Cloud (AWS/GCP)", "Performance Optimization"],
            resources: ["System Design Interview – Alex Xu", "AWS Certified Developer"],
            status: "pending"
          },
          {
            phase: "Job-Ready & Beyond",
            duration: "Months 15+",
            goals: [
              "Land your first role",
              "Continue learning & growing",
              "Prepare for promotions"
            ],
            skills: ["Leadership", "Code Reviews", "Mentoring"],
            resources: ["Conferences", "Books: Clean Code, The Pragmatic Programmer"],
            status: "pending"
          }
        ],
        nextSteps: [
          "Update your CV with new skills",
          "Start applying to junior roles",
          "Join relevant tech communities"
        ]
      };

      setRoadmap(sampleRoadmap);
      setIsGenerating(false);
    }, 3200);
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-indigo-50 to-blue-50 py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-teal-700 rounded-full mb-6 font-medium shadow-sm">
            <TrendingUp className="w-5 h-5" />
            <span>AI-Powered Career Roadmap</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Your Personalized{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Step-by-Step Career Plan
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Get a clear, milestone-based roadmap powered by real-time job market data to accelerate your career growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-10 py-12 text-white text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Build Your Career Roadmap</h3>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                Tell us your target role and current level — get your custom plan in seconds
              </p>
            </div>

            {/* Input Area */}
            <div className="p-10">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    Target Job Role
                  </label>
                  <input
                    type="text"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    placeholder="e.g., Full Stack Engineer"
                    className="w-full px-6 py-5 border-2 border-emerald-200 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 text-lg transition-all"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    Your Current Level
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="w-full px-6 py-5 border-2 border-emerald-200 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 text-lg bg-white"
                  >
                    <option value="entry">Entry Level / Student</option>
                    <option value="junior">Junior (0–2 years)</option>
                    <option value="mid">Mid-Level (2–5 years)</option>
                    <option value="senior">Senior / Switching Fields</option>
                  </select>
                </div>
              </div>

              {/* Popular Roles */}
              <div className="mb-10">
                <p className="text-sm text-gray-500 mb-4">Popular roles to get started:</p>
                <div className="flex flex-wrap gap-3">
                  {popularRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => setTargetRole(role)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        targetRole === role
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleGenerateRoadmap}
                  disabled={isGenerating || !targetRole.trim()}
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Generating Your Roadmap...
                    </>
                  ) : (
                    <>
                      Generate My Roadmap
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Generated Roadmap */}
            {roadmap && (
              <div className="border-t border-gray-200 p-10 bg-gradient-to-b from-gray-50 to-white">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {roadmap.title}
                      </h3>
                      <p className="text-gray-600 text-lg mt-1">
                        Estimated Timeline: <span className="font-semibold text-emerald-700">{roadmap.timeline}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <p className="text-xl font-semibold text-gray-800 mb-4">Overall Goal</p>
                  <p className="text-lg text-gray-700 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    {roadmap.overallGoal}
                  </p>
                </div>

                {/* Milestones */}
                <div className="space-y-10">
                  {roadmap.milestones.map((milestone, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-5 text-white flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <Calendar className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold">{milestone.phase}</h4>
                            <p className="text-emerald-100">{milestone.duration}</p>
                          </div>
                        </div>
                        <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                          Milestone {index + 1}
                        </span>
                      </div>

                      <div className="p-8">
                        <div className="grid md:grid-cols-3 gap-8">
                          {/* Goals */}
                          <div>
                            <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Target className="w-5 h-5 text-emerald-600" />
                              Goals
                            </h5>
                            <ul className="space-y-2">
                              {milestone.goals.map((goal, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                  <span>{goal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills */}
                          <div>
                            <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-emerald-600" />
                              Key Skills
                            </h5>
                            <ul className="space-y-2">
                              {milestone.skills.map((skill, i) => (
                                <li key={i} className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-xl">
                                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Resources */}
                          <div>
                            <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Award className="w-5 h-5 text-emerald-600" />
                              Recommended Resources
                            </h5>
                            <ul className="space-y-2">
                              {milestone.resources.map((resource, i) => (
                                <li key={i} className="flex items-center gap-3">
                                  <ArrowRight className="w-4 h-4 text-emerald-600" />
                                  <span>{resource}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Next Steps */}
                <div className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                  <h4 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
                    <Briefcase className="w-8 h-8" />
                    Next Steps to Take Today
                  </h4>
                  <ul className="space-y-4">
                    {roadmap.nextSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-700 font-bold">{i + 1}</span>
                        </div>
                        <p className="text-lg">{step}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;