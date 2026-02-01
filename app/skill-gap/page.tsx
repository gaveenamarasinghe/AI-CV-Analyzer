"use client";
import React, { useState } from 'react';
import { Target, TrendingUp, Award, BookOpen, CheckCircle2, AlertCircle, Zap, Briefcase } from 'lucide-react';

export default function SkillGapAnalysis() {
  const [currentRole, setCurrentRole] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [currentSkills, setCurrentSkills] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const targetRoles = {
    'Senior Software Engineer': {
      required: ['System Design', 'Microservices', 'Cloud Architecture', 'CI/CD', 'Team Leadership', 'Code Review'],
      nice: ['Performance Optimization', 'Security Best Practices', 'Mentoring']
    },
    'Tech Lead': {
      required: ['Architecture Design', 'Team Management', 'Project Planning', 'Stakeholder Communication', 'Technical Strategy', 'Agile/Scrum'],
      nice: ['Budget Management', 'Hiring', 'Cross-team Collaboration']
    },
    'Product Manager': {
      required: ['Product Strategy', 'User Research', 'Data Analysis', 'Roadmap Planning', 'Stakeholder Management', 'Market Research'],
      nice: ['A/B Testing', 'SQL', 'Competitive Analysis']
    },
    'DevOps Engineer': {
      required: ['Kubernetes', 'Docker', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Cloud Platforms (AWS/Azure/GCP)'],
      nice: ['Security Scanning', 'Cost Optimization', 'GitOps']
    },
    'Data Scientist': {
      required: ['Machine Learning', 'Python/R', 'Statistics', 'Data Visualization', 'SQL', 'Feature Engineering'],
      nice: ['Deep Learning', 'NLP', 'Big Data Tools']
    },
    'UX Designer': {
      required: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Figma/Sketch', 'Usability Testing'],
      nice: ['Front-end Development', 'Animation', 'Accessibility']
    }
  };

  const analyzeGap = () => {
    setShowAnalysis(true);
  };

  const getCurrentSkillsArray = () => {
    return currentSkills.split(',').map(s => s.trim().toLowerCase()).filter(s => s);
  };

  const getGapAnalysis = () => {
    if (!targetRole || !targetRoles[targetRole]) return null;

    const current = getCurrentSkillsArray();
    const target = targetRoles[targetRole];
    
    const missingRequired = target.required.filter(
      skill => !current.includes(skill.toLowerCase())
    );
    
    const missingNice = target.nice.filter(
      skill => !current.includes(skill.toLowerCase())
    );
    
    const hasRequired = target.required.filter(
      skill => current.includes(skill.toLowerCase())
    );

    return { missingRequired, missingNice, hasRequired };
  };

  const gap = showAnalysis ? getGapAnalysis() : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-3 rounded-2xl shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-3">
            Professional Skill Gap Analysis
          </h1>
          <p className="text-gray-600 text-lg">
            Identify exactly what skills you need to develop to reach your target role
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-purple-100">
          <div className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Briefcase className="w-4 h-4 mr-2 text-violet-600" />
                Current Role
              </label>
              <input
                type="text"
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                placeholder="e.g., Software Engineer"
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Target className="w-4 h-4 mr-2 text-violet-600" />
                Target Role
              </label>
              <select
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors bg-white"
              >
                <option value="">Select your target role...</option>
                {Object.keys(targetRoles).map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Award className="w-4 h-4 mr-2 text-violet-600" />
                Current Skills
              </label>
              <textarea
                value={currentSkills}
                onChange={(e) => setCurrentSkills(e.target.value)}
                placeholder="Enter your current skills separated by commas (e.g., JavaScript, React, Node.js, Git)"
                rows={4}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              onClick={analyzeGap}
              disabled={!targetRole || !currentSkills}
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold py-4 rounded-xl hover:from-violet-700 hover:to-fuchsia-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Analyze Skill Gap
              </span>
            </button>
          </div>
        </div>

        {/* Analysis Results */}
        {showAnalysis && gap && (
          <div className="space-y-6 animate-fade-in">
            {/* Progress Overview */}
            <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Your Progress to {targetRole}</h2>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-5xl font-bold mb-2">
                    {Math.round((gap.hasRequired.length / (gap.hasRequired.length + gap.missingRequired.length)) * 100)}%
                  </div>
                  <div className="text-purple-100">Skills Match</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold mb-1">
                    {gap.hasRequired.length} / {gap.hasRequired.length + gap.missingRequired.length}
                  </div>
                  <div className="text-purple-100">Required Skills</div>
                </div>
              </div>
            </div>

            {/* Skills You Have */}
            {gap.hasRequired.length > 0 && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-2 rounded-xl mr-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Skills You Already Have</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {gap.hasRequired.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-xl border-2 border-green-200 font-medium shadow-sm"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Critical Skills to Develop */}
            {gap.missingRequired.length > 0 && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-2 rounded-xl mr-3">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Critical Skills to Develop</h3>
                    <p className="text-gray-600 mt-1">These are required for your target role</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gap.missingRequired.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="font-semibold text-gray-800">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nice-to-Have Skills */}
            {gap.missingNice.length > 0 && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-xl mr-3">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Bonus Skills to Stand Out</h3>
                    <p className="text-gray-600 mt-1">These will give you a competitive edge</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {gap.missingNice.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl border-2 border-blue-200 font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Plan */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-xl p-8 border border-amber-200">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 p-2 rounded-xl mr-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Recommended Action Plan</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">1</div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Focus on critical skills first:</strong> Prioritize the {gap.missingRequired.length} required skills to meet baseline expectations for the role.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">2</div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Create a learning schedule:</strong> Dedicate 5-10 hours per week to skill development through online courses, projects, and practice.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">3</div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Build portfolio projects:</strong> Apply new skills in real-world projects to demonstrate competency to potential employers.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">4</div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Seek mentorship:</strong> Connect with professionals currently in your target role for guidance and feedback on your development path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}