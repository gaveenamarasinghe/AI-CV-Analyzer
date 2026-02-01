"use client";

import { useState, useCallback } from "react";
import {
  Upload,
  Brain,
  CheckCircle2,
  Loader2,
  FileText,
  ArrowRight,
  Volume2,
} from "lucide-react";

const analysisSteps = [
  "Scanning resume structure...",
  "Detecting skills and experience...",
  "Evaluating ATS compatibility...",
  "Identifying missing keywords...",
  "Generating improvement suggestions...",
];

const CVUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFile(e.target.files?.[0] || null);
      setResult(null);
      setError(null);
      setCurrentStep("");
    },
    []
  );

  const handleAnalyze = useCallback(() => {
    if (!file) return;

    setLoading(true);
    setResult(null);
    setError(null);

    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < analysisSteps.length) {
        setCurrentStep(analysisSteps[stepIndex]);
        stepIndex++;
      } else {
        clearInterval(interval);

        const simulatedResult = `
Strengths:
• Clean and professional resume layout
• Relevant technical skills detected
• Consistent career progression

Areas for Improvement:
• Add measurable achievements
• Improve summary section clarity
• Optimize formatting for ATS systems

ATS Optimization Tips:
• Use standard section headings (Experience, Skills, Education)
• Avoid tables and graphics
• Add role-specific keywords

Missing Skills:
• Cloud fundamentals
• System design basics
• Automated testing tools

Overall Score: 78 / 100
        `.trim();

        setResult(simulatedResult);
        setCurrentStep("");
        setLoading(false);
      }
    }, 900);
  }, [file]);

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6 font-medium">
            <Brain className="w-5 h-5" />
            AI Resume Intelligence
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI CV Analysis
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Upload your resume and receive instant AI-powered feedback in real time.
          </p>
        </header>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Resume Upload</h3>
            </div>
            <p className="mt-2 text-indigo-100">PDF or DOCX • Client-side analysis</p>
          </div>

          <div className="p-10">
            {!file ? (
              <label className="block cursor-pointer border-2 border-dashed border-indigo-300 rounded-2xl p-12 text-center hover:border-indigo-500 transition">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Upload className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  Click or drag file to upload
                </p>
              </label>
            ) : (
              <div className="text-center space-y-6">
                <p className="font-semibold">{file.name}</p>

                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-xl flex items-center gap-2 mx-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze CV
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {loading && currentStep && (
                  <p className="text-indigo-600 font-medium animate-pulse">
                    {currentStep}
                  </p>
                )}
              </div>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-center pb-6">{error}</p>
          )}

          {result && (
            <div className="border-t p-8 bg-gray-50 whitespace-pre-wrap space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Brain className="w-6 h-6 text-indigo-600" />
                AI Analysis Report
              </h3>

              <p className="text-gray-700">{result}</p>

              <button
                disabled
                className="px-6 py-3 bg-purple-300 text-white rounded-xl flex items-center gap-2 cursor-not-allowed"
              >
                <Volume2 className="w-5 h-5" />
                Voice Feedback (Coming Soon)
              </button>
            </div>
          )}
        </div>

        <footer className="mt-12 flex justify-center gap-8 text-sm text-gray-600">
          {["Real-Time Analysis", "ATS-Friendly", "Instant Insights"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                {item}
              </div>
            )
          )}
        </footer>
      </div>
    </section>
  );
};

export default CVUpload;
