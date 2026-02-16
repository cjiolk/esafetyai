import Link from "next/link";
import { Shield, AlertTriangle, Lock, Users, Eye, Heart, BookOpen, Phone, Home } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">eSafety Resources</h1>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Complete Guide to Online Safety
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to stay safe, secure, and confident online
          </p>
        </div>

        {/* Main Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Cyberbullying */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Cyberbullying</h3>
            <p className="text-gray-600 mb-6">
              Learn how to recognize, prevent, and respond to cyberbullying effectively.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>What is cyberbullying and its forms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>How to respond if you&apos;re targeted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Supporting others who are bullied</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Reporting and blocking bullies</span>
              </li>
            </ul>
          </div>

          {/* Privacy Protection */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Privacy Protection</h3>
            <p className="text-gray-600 mb-6">
              Keep your personal information safe and control what you share online.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Understanding privacy settings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>What information to never share</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Managing your digital footprint</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Data protection best practices</span>
              </li>
            </ul>
          </div>

          {/* Social Media Safety */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Social Media Safety</h3>
            <p className="text-gray-600 mb-6">
              Navigate social platforms safely and build positive online relationships.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Platform-specific safety tips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Recognizing fake accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Healthy social media habits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Dealing with peer pressure online</span>
              </li>
            </ul>
          </div>

          {/* Password Security */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Password Security</h3>
            <p className="text-gray-600 mb-6">
              Create strong passwords and protect your accounts from unauthorized access.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Creating unbreakable passwords</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Two-factor authentication setup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Password manager recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>What to do if accounts are hacked</span>
              </li>
            </ul>
          </div>

          {/* Scam Recognition */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Scam Recognition</h3>
            <p className="text-gray-600 mb-6">
              Identify and avoid online scams, phishing attempts, and fraudulent schemes.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Common types of online scams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Red flags to watch for</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Phishing email identification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Reporting suspicious activity</span>
              </li>
            </ul>
          </div>

          {/* Digital Wellbeing */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Wellbeing</h3>
            <p className="text-gray-600 mb-6">
              Maintain a healthy balance between online and offline life.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Managing screen time effectively</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Recognizing digital addiction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Building healthy online habits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Mental health and social media</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-xl mb-16">
          <div className="flex items-start gap-4">
            <Phone className="w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-3xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-lg mb-6 text-red-100">
                If you&apos;re experiencing serious threats, harassment, or feel unsafe, reach out for help immediately.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Talk to Someone</h4>
                  <p className="text-sm text-red-100">
                    Contact a parent, teacher, school counselor, or trusted adult
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Report to Authorities</h4>
                  <p className="text-sm text-red-100">
                    Contact local police or cybercrime units for serious threats
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Crisis Hotlines</h4>
                  <p className="text-sm text-red-100">
                    Use national crisis hotlines available 24/7 in your country
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Platform Reporting</h4>
                  <p className="text-sm text-red-100">
                    Report harmful content directly to social media platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Chat */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Have Questions?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our AI assistant is here to provide personalized advice and answer your specific questions about online safety.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg"
          >
            <Shield className="w-6 h-6 mr-2" />
            Chat with AI Assistant
          </Link>
        </div>
      </section>
    </div>
  );
}
