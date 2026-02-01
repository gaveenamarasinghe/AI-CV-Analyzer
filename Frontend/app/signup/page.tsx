"use client";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Sparkles,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Shield,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const showToast = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : formData;

      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(data.message || "Authentication failed", "error");
        return;
      }

      if (isLogin) {
        showToast("Login successful 🎉", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        showToast("Account created successfully 🎉", "success");
        setIsLogin(true);
      }

      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      showToast("Server not reachable", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-fuchsia-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Toast Notification - Large Card Style */}
      {notification.show && (
        <div
          className={`fixed top-8 right-8 z-50 w-96 rounded-3xl shadow-2xl backdrop-blur-xl transform transition-all animate-in slide-in-from-top-5 ${
            notification.type === "success"
              ? "bg-gradient-to-br from-emerald-500 to-teal-500"
              : "bg-gradient-to-br from-rose-500 to-pink-500"
          }`}
        >
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">
                  {notification.type === "success" ? "Success!" : "Error"}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {notification.message}
                </p>
              </div>
            </div>
            <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white/40 rounded-full animate-[shrink_3s_linear]" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-6xl relative z-10 flex gap-8 items-center">
        
        {/* Left Side - Features */}
        <div className="hidden lg:flex flex-1 flex-col gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                CareerAI
              </h1>
            </div>
            <p className="text-2xl text-slate-700 font-medium">
              Transform your career with AI-powered insights
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm border-2 border-violet-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">AI-Powered Matching</h3>
              <p className="text-slate-600">Get matched with opportunities that perfectly fit your skills and aspirations</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-2 border-fuchsia-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Skill Development</h3>
              <p className="text-slate-600">Personalized learning paths to boost your career growth exponentially</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Career Analytics</h3>
              <p className="text-slate-600">Track your progress with comprehensive insights and actionable metrics</p>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="flex-1 max-w-md">
          
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              CareerAI
            </h1>
            <p className="text-slate-600 text-sm mt-2">
              {isLogin ? "Welcome back" : "Create your account"}
            </p>
          </div>

          {/* Auth Card */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Tabs */}
            <div className="flex border-b-2 border-slate-200 relative">
              <div
                className={`absolute bottom-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ${
                  isLogin ? "left-0 w-1/2" : "left-1/2 w-1/2"
                }`}
              ></div>

              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-5 font-bold text-lg transition-all ${
                  isLogin 
                    ? "text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-5 font-bold text-lg transition-all ${
                  !isLogin 
                    ? "text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div className="p-8 space-y-5">
              
              {!isLogin && (
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-800 outline-none focus:border-violet-500 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>
              )}

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-800 outline-none focus:border-violet-500 focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-800 outline-none focus:border-violet-500 focus:bg-white transition-all placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-500 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-violet-600 hover:text-fuchsia-600 font-semibold transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex justify-center items-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {!isLogin && (
                <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <Shield className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span>By signing up, you agree to our <span className="text-violet-600 font-semibold">Terms of Service</span> and <span className="text-violet-600 font-semibold">Privacy Policy</span></span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-slate-600 text-sm mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text font-bold hover:underline"
            >
              {isLogin ? "Sign up for free" : "Sign in"}
            </button>
          </p>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-6 mt-8 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Trusted</span>
            </div>
            <div className="flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-violet-500" />
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;