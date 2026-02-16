import Link from "next/link";
import { Shield, MessageSquare, BookOpen, Users, Search, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              eSafety AI Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your intelligent companion for online safety. Get instant answers, search the web for safety information, and learn how to stay protected online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat with AI Assistant
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          How Our AI Helps You Stay Safe
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Powered by advanced AI technology with real-time web search capabilities
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Search Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI searches the web in real-time to provide you with the latest safety information, threat alerts, and best practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Instant Answers</h3>
            <p className="text-gray-600 leading-relaxed">
              Ask any question about online safety, cyberbullying, privacy, or digital wellbeing and get immediate, accurate responses.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Personalized Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              Get tailored advice based on your specific situation, age group, and concerns about online safety.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Topics Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Key Safety Topics
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Learn about the most important aspects of staying safe online
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: "Cyberbullying", color: "red" },
              { icon: Shield, title: "Privacy Protection", color: "blue" },
              { icon: Users, title: "Social Media Safety", color: "green" },
              { icon: BookOpen, title: "Digital Literacy", color: "purple" },
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
              >
                <topic.icon className={`w-10 h-10 text-${topic.color}-600 mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Start chatting with our AI assistant now and get personalized safety advice
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg text-lg"
          >
            <MessageSquare className="w-6 h-6 mr-2" />
            Start Chatting Now
          </Link>
        </div>
      </section>
    </div>
  );
}
