import Link from "next/link";
import { Shield, MessageSquare, BookOpen, Users, Search, AlertTriangle, Gamepad2, Brain, Lightbulb, Award, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              eSafety AI Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your intelligent companion for online safety. Get instant answers, play interactive games, and learn how to stay protected online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat with AI Assistant
              </Link>
              <Link
                href="/games"
                className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Gamepad2 className="w-5 h-5 mr-2" />
                Play Safety Games
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: "10K+ Users", color: "blue" },
            { icon: MessageSquare, label: "50K+ Questions", color: "green" },
            { icon: Gamepad2, label: "Interactive Games", color: "purple" },
            { icon: Award, label: "Expert Guidance", color: "yellow" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <stat.icon className={`w-10 h-10 mx-auto mb-3 text-${stat.color}-600`} />
              <div className="font-bold text-gray-900">{stat.label}</div>
            </div>
          ))}
        </div>
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
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Search Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI searches the web in real-time to provide you with the latest safety information, threat alerts, and best practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Instant Answers</h3>
            <p className="text-gray-600 leading-relaxed">
              Ask any question about online safety, cyberbullying, privacy, or digital wellbeing and get immediate, accurate responses.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Personalized Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              Get tailored advice based on your specific situation, age group, and concerns about online safety.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Learning Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Learn Through Interactive Experiences
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Choose your learning style - games, quizzes, scenarios, or tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/games"
              className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Gamepad2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Games</h3>
              <p className="text-gray-600 text-sm mb-4">
                Play fun games to learn safety skills
              </p>
              <div className="text-purple-600 font-semibold flex items-center justify-center">
                Play Now <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link
              href="/quiz"
              className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quiz</h3>
              <p className="text-gray-600 text-sm mb-4">
                Test your knowledge with our quiz
              </p>
              <div className="text-blue-600 font-semibold flex items-center justify-center">
                Take Quiz <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link
              href="/scenarios"
              className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scenarios</h3>
              <p className="text-gray-600 text-sm mb-4">
                Practice real-world situations
              </p>
              <div className="text-green-600 font-semibold flex items-center justify-center">
                Try Scenarios <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link
              href="/tips"
              className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Daily Tips</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get practical safety advice
              </p>
              <div className="text-yellow-600 font-semibold flex items-center justify-center">
                Read Tips <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Topics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Key Safety Topics We Cover
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Learn about the most important aspects of staying safe online
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: AlertTriangle, title: "Cyberbullying", color: "red", description: "How to recognize and respond" },
            { icon: Shield, title: "Privacy Protection", color: "blue", description: "Keep your data secure" },
            { icon: Users, title: "Social Media Safety", color: "green", description: "Safe sharing practices" },
            { icon: BookOpen, title: "Digital Literacy", color: "purple", description: "Navigate the web wisely" },
            { icon: Search, title: "Phishing Detection", color: "yellow", description: "Spot scams and fakes" },
            { icon: MessageSquare, title: "Online Communication", color: "pink", description: "Chat safely with others" },
            { icon: Gamepad2, title: "Gaming Safety", color: "indigo", description: "Protect yourself while gaming" },
            { icon: Lightbulb, title: "Digital Wellbeing", color: "orange", description: "Healthy tech habits" },
          ].map((topic, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer border border-gray-100 group hover:border-blue-300"
            >
              <topic.icon className={`w-10 h-10 text-${topic.color}-600 mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose eSafety AI?
            </h2>
            <p className="text-xl text-gray-600">
              The most comprehensive online safety platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Always Available",
                description: "Get help 24/7 whenever you need it",
              },
              {
                icon: Shield,
                title: "Privacy Protected",
                description: "Your conversations are never stored",
              },
              {
                icon: Brain,
                title: "AI-Powered",
                description: "Advanced technology for accurate answers",
              },
              {
                icon: Users,
                title: "For All Ages",
                description: "Suitable for kids, teens, and adults",
              },
              {
                icon: Award,
                title: "Expert-Backed",
                description: "Information from safety professionals",
              },
              {
                icon: Gamepad2,
                title: "Fun & Engaging",
                description: "Learn through interactive experiences",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
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
            Start your online safety journey today with our AI assistant and interactive tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg text-lg transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-6 h-6 mr-2" />
              Start Chatting Now
            </Link>
            <Link
              href="/games"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-all shadow-lg text-lg transform hover:-translate-y-0.5"
            >
              <Gamepad2 className="w-6 h-6 mr-2" />
              Play Games
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
