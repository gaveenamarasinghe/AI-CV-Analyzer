"use client";
import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 overflow-hidden">
     
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
         
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                CareerAI
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering students and early-career professionals to land their dream internships and jobs with AI-powered guidance.
            </p>
           
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:hello@careerai.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#features" className="hover:text-indigo-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-indigo-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#how" className="hover:text-indigo-400 transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-indigo-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-indigo-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <Link href="/resources/resume-tips" className="hover:text-indigo-400 transition-colors">
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link href="/resources/interview-prep" className="hover:text-indigo-400 transition-colors">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link href="/resources/career-guides" className="hover:text-indigo-400 transition-colors">
                  Career Guides
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {currentYear} CareerAI. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Made with <span className="text-red-500">♥</span> for the next generation of professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;