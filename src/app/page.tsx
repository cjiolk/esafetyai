"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  Brain,
  Zap,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  Lock,
  Eye,
  MessageSquare,
  Gamepad2,
  BookOpen,
  Target,
  ArrowRight,
  CheckCircle2,
  Star,
  Globe,
  Activity,
} from "lucide-react";

export default function Home() {
  const [stats, setStats] = useState({
    usersProtected: 0,
    threatsBlocked: 0,
    lessonsCompleted: 0,
    safetyScore: 0,
  });

  // Animate stats on load
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      usersProtected: 50000,
      threatsBlocked: 125000,
      lessonsCompleted: 75000,
      safetyScore: 98,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        usersProtected: Math.floor(targets.usersProtected * progress),
        threatsBlocked: Math.floor(targets.threatsBlocked * progress),
        lessonsCompleted: Math.floor(targets.lessonsCompleted * progress),
        safetyScore: Math.floor(targets.safetyScore * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Protection",
      description: "Advanced machine learning algorithms detect and prevent online threats in real-time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Gamepad2,
      title: "Interactive Learning",
      description: "Engaging games and scenarios that make learning online safety fun and memorable",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "24/7 AI Assistant",
      description: "Get instant answers to your safety questions from our intelligent chatbot",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "Personalized Training",
      description: "Adaptive learning paths tailored to your age, experience, and needs",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Real-Time Monitoring",
      description: "Continuous protection with instant alerts for potential dangers",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Certification Program",
      description: "Earn badges and certificates as you master online safety skills",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Chat with AI",
      description: "Get instant safety advice",
      href: "/chat",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Gamepad2,
      title: "Play Games",
      description: "Learn through fun activities",
      href: "/games",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: BookOpen,
      title: "Take Quiz",
      description: "Test your knowledge",
      href: "/quiz",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "Practice Scenarios",
      description: "Real-world situations",
      href: "/scenarios",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent",
      content: "This platform has transformed how my kids understand online safety. The AI assistant is incredibly helpful!",
      rating: 5,
    },
    {
      name: "James T.",
      role: "Teacher",
      content: "I use eSafety AI in my classroom. The interactive games make teaching digital citizenship engaging and effective.",
      rating: 5,
    },
    {
      name: "Emily R.",
      role: "Student",
      content: "The scenarios helped me recognize a phishing attempt. This platform literally saved me from a scam!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Powered by Advanced AI Technology</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Master Online Safety</span>
              <br />
              <span className="text-slate-800">with AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              The world&apos;s most advanced eSafety platform. Learn, practice, and stay protected with cutting-edge AI technology and interactive experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/chat"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/about"
                className="px-8 py-4 glass rounded-full font-bold text-lg text-slate-700 hover:bg-white/90 transition-all duration-300 hover-lift"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Live Stats Dashboard */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            {[
              { label: "Users Protected", value: stats.usersProtected.toLocaleString(), icon: Users, color: "from-blue-500 to-cyan-500" },
              { label: "Threats Blocked", value: stats.threatsBlocked.toLocaleString(), icon: Shield, color: "from-purple-500 to-pink-500" },
              { label: "Lessons Completed", value: stats.lessonsCompleted.toLocaleString(), icon: BookOpen, color: "from-green-500 to-emerald-500" },
              { label: "Safety Score", value: `${stats.safetyScore}%`, icon: TrendingUp, color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Start Your <span className="gradient-text">Safety Journey</span>
            </h2>
            <p className="text-lg text-slate-600">Choose your path to becoming an online safety expert</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={action.title}
                href={action.href}
                className="group relative glass rounded-2xl p-8 hover-lift hover-glow overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`inline-flex p-4 rounded-xl ${action.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{action.title}</h3>
                <p className="text-slate-600 mb-4">{action.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              <span className="gradient-text">Powerful Features</span> for Complete Protection
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Advanced technology meets intuitive design to create the ultimate online safety platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass rounded-2xl p-8 hover-lift hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-lg text-slate-600">See what our community has to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass rounded-2xl p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-bold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative glass rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Ready to Get <span className="gradient-text">Protected</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already mastering online safety with our AI-powered platform
              </p>
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Start Your Free Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
