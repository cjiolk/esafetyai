"use client";

import { useState } from "react";
import { Lightbulb, Calendar, Star, Share2, Bookmark } from "lucide-react";

type Tip = {
  id: number;
  title: string;
  content: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  date: string;
};

const tips: Tip[] = [
  {
    id: 1,
    title: "Use Unique Passwords for Every Account",
    content:
      "Never reuse the same password across multiple accounts. If one account gets hacked, all your other accounts with the same password become vulnerable. Use a password manager to keep track of different passwords securely.",
    category: "Passwords",
    difficulty: "Beginner",
    date: "2026-02-16",
  },
  {
    id: 2,
    title: "Think Before You Post",
    content:
      "Once something is online, it's nearly impossible to completely remove it. Before posting, ask yourself: Would I be okay with my parents, teachers, or future employers seeing this? Your digital footprint is permanent.",
    category: "Social Media",
    difficulty: "Beginner",
    date: "2026-02-15",
  },
  {
    id: 3,
    title: "Enable Two-Factor Authentication (2FA)",
    content:
      "2FA adds an extra layer of security by requiring a code from your phone or email in addition to your password. Enable it on all important accounts like email, social media, and banking apps.",
    category: "Security",
    difficulty: "Intermediate",
    date: "2026-02-14",
  },
  {
    id: 4,
    title: "Review Your Privacy Settings Regularly",
    content:
      "Social media platforms frequently update their privacy policies and settings. Check your privacy settings at least once a month to ensure you're only sharing information with people you trust.",
    category: "Privacy",
    difficulty: "Beginner",
    date: "2026-02-13",
  },
  {
    id: 5,
    title: "Recognize Phishing Red Flags",
    content:
      "Be suspicious of emails or messages that create urgency, have spelling errors, come from strange email addresses, or ask for personal information. Legitimate companies won't ask for passwords via email.",
    category: "Phishing",
    difficulty: "Intermediate",
    date: "2026-02-12",
  },
  {
    id: 6,
    title: "Use a VPN on Public Wi-Fi",
    content:
      "Public Wi-Fi networks are not secure. If you must use them, connect through a VPN (Virtual Private Network) to encrypt your data. Better yet, use your mobile data for sensitive tasks.",
    category: "Security",
    difficulty: "Advanced",
    date: "2026-02-11",
  },
  {
    id: 7,
    title: "Don't Overshare Personal Information",
    content:
      "Avoid posting your phone number, address, school name, daily schedule, or location in real-time. This information can be used by strangers to find or track you.",
    category: "Privacy",
    difficulty: "Beginner",
    date: "2026-02-10",
  },
  {
    id: 8,
    title: "Keep Your Software Updated",
    content:
      "Software updates often include security patches that protect against new threats. Enable automatic updates on your devices, apps, and operating systems to stay protected.",
    category: "Security",
    difficulty: "Beginner",
    date: "2026-02-09",
  },
  {
    id: 9,
    title: "Be Careful with App Permissions",
    content:
      "When installing apps, review what permissions they're requesting. Does a flashlight app really need access to your contacts? Only grant permissions that make sense for the app's function.",
    category: "Privacy",
    difficulty: "Intermediate",
    date: "2026-02-08",
  },
  {
    id: 10,
    title: "Report and Block Cyberbullies",
    content:
      "If someone is harassing you online, don't engage with them. Take screenshots as evidence, block them, and report their behavior to the platform and a trusted adult. You don't have to deal with it alone.",
    category: "Cyberbullying",
    difficulty: "Beginner",
    date: "2026-02-07",
  },
  {
    id: 11,
    title: "Verify Before You Click",
    content:
      "Hover over links to see the actual URL before clicking. If a link looks suspicious or doesn't match the supposed sender, don't click it. When in doubt, go directly to the website by typing the URL yourself.",
    category: "Phishing",
    difficulty: "Intermediate",
    date: "2026-02-06",
  },
  {
    id: 12,
    title: "Use Strong Security Questions",
    content:
      "Don't use real answers to security questions that can be found on your social media (like your pet's name or mother's maiden name). Use fake answers that only you would know, or random phrases.",
    category: "Passwords",
    difficulty: "Advanced",
    date: "2026-02-05",
  },
];

export default function TipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [bookmarkedTips, setBookmarkedTips] = useState<number[]>([]);

  const categories = ["All", ...Array.from(new Set(tips.map((tip) => tip.category)))];

  const filteredTips =
    selectedCategory === "All"
      ? tips
      : tips.filter((tip) => tip.category === selectedCategory);

  const toggleBookmark = (tipId: number) => {
    setBookmarkedTips((prev) =>
      prev.includes(tipId) ? prev.filter((id) => id !== tipId) : [...prev, tipId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Daily Safety Tips</h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              Practical advice to help you stay safe online. Learn something new every day!
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Tips Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                          tip.difficulty
                        )}`}
                      >
                        {tip.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                        {tip.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleBookmark(tip.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <Bookmark
                      className={`w-6 h-6 ${
                        bookmarkedTips.includes(tip.id) ? "fill-orange-500 text-orange-500" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{tip.content}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(tip.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <button className="text-orange-600 hover:text-orange-700 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No tips found in this category.</p>
          </div>
        )}
      </section>

      {/* Bookmarked Section */}
      {bookmarkedTips.length > 0 && (
        <section className="bg-orange-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-8">
              <Star className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Your Bookmarked Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips
                .filter((tip) => bookmarkedTips.includes(tip.id))
                .map((tip) => (
                  <div
                    key={tip.id}
                    className="bg-white rounded-lg shadow p-4 border-2 border-orange-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{tip.content}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Daily Tip CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-center text-white shadow-2xl">
          <Lightbulb className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Want Daily Safety Tips?</h2>
          <p className="text-lg mb-6 text-orange-100">
            Get a new safety tip delivered to your inbox every day!
          </p>
          <button className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg">
            Subscribe to Daily Tips
          </button>
        </div>
      </section>
    </div>
  );
}
