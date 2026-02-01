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

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type AnalysisResponse = {
  strengths?: string[];
  weaknesses?: string[];
  atsTips?: string[];
  missingSkills?: string[];
  score?: number;
  message?: string;
};

const CVUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [voiceLoading, setVoiceLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0] || null;
      setFile(selectedFile);
      setResult(null);
      setError(null);
    },
    []
  );

  const handleAnalyze = useCallback(async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("cv", file);

      const response = await fetch(`${API_URL}/api/cv/analyze`, {
        method: "POST",
        body: formData,
      });

      const data: AnalysisResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "CV analysis failed");
      }

      const formattedResult = `
Strengths:
• ${data.strengths?.length ? data.strengths.join("\n• ") : "Not detected"}

Areas for Improvement:
• ${data.weaknesses?.length ? data.weaknesses.join("\n• ") : "Not detected"}

ATS Optimization Tips:
• ${data.atsTips?.length ? data.atsTips.join("\n• ") : "No suggestions"}

Missing Skills:
• ${data.missingSkills?.length ? data.missingSkills.join("\n• ") : "None"}

Overall Score: ${data.score ?? "N/A"} / 100
      `.trim();

      setResult(formattedResult);
    } catch (err: any) {
      setError(err.message || "Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }, [file]);

  const handleVoiceFeedback = async () => {
    if (!result) return;

    setVoiceLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/vapi/call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: result,
        }),
      });

      if (!response.ok) {
        throw new Error("Voice feedback failed");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setVoiceLoading(false);
    }
  };

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
            Upload your resume and receive recruiter-focused feedback with AI
            voice guidance.
          </p>
        </header>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Resume Upload</h3>
            </div>
            <p className="mt-2 text-indigo-100">PDF or DOCX • Max 5MB</p>
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
                onClick={handleVoiceFeedback}
                disabled={voiceLoading}
                className="px-6 py-3 bg-purple-600 text-white rounded-xl flex items-center gap-2"
              >
                {voiceLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Voice...
                  </>
                ) : (
                  <>
                    <Volume2 className="w-5 h-5" />
                    Play Voice Feedback
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <footer className="mt-12 flex justify-center gap-8 text-sm text-gray-600">
          {["ATS-Optimized", "Voice Feedback", "Actionable Insights"].map(
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
