"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Search, Sparkles, Zap, Shield, Brain } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  isSearching?: boolean;
  timestamp?: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Welcome! I'm your advanced eSafety AI assistant powered by cutting-edge machine learning. I can help you with:\n\n• Online safety & privacy\n• Cyberbullying prevention\n• Social media security\n• Password protection\n• Phishing & scam detection\n• Digital wellbeing\n\nI can also search the web in real-time for the latest safety information. What would you like to learn about today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickPrompts = [
    "How do I create a strong password?",
    "What is phishing and how do I avoid it?",
    "How can I protect my privacy online?",
    "What should I do about cyberbullying?",
  ];

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);
    setIsTyping(true);

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage, timestamp: new Date() }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      
      // Simulate typing delay for better UX
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.response,
            isSearching: data.usedSearch,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I encountered an error. Please try again or rephrase your question.",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="glass border-b border-white/20 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-glow" />
              <div className="relative p-4 glass rounded-2xl">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold gradient-text">AI Safety Assistant</h1>
              <p className="text-slate-600 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Powered by Advanced Machine Learning
              </p>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-xs text-slate-600">Always Available</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text">Real-Time</div>
              <div className="text-xs text-slate-600">Web Search</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text">Instant</div>
              <div className="text-xs text-slate-600">Responses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="glass rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ height: "calc(100vh - 320px)" }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.length === 1 && (
              <div className="mb-6">
                <p className="text-sm text-slate-600 mb-4 text-center">Quick start prompts:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickPrompt(prompt)}
                      className="glass rounded-xl p-4 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all hover-lift text-sm text-slate-700 hover:text-blue-600"
                    >
                      <Zap className="w-4 h-4 inline mr-2 text-blue-600" />
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-4 animate-slide-up ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-blue-600 to-cyan-600"
                      : "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 animate-glow"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-6 h-6 text-white" />
                  ) : (
                    <Bot className="w-6 h-6 text-white" />
                  )}
                </div>
                <div
                  className={`flex-1 max-w-3xl ${
                    message.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {message.isSearching && (
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                      <Search className="w-3 h-3 animate-pulse" />
                      <span>Searched the web for latest info</span>
                    </div>
                  )}
                  <div
                    className={`inline-block px-6 py-4 rounded-2xl shadow-lg ${
                      message.role === "user"
                        ? "bg-gradient-to-br from-blue-600 to-cyan-600 text-white"
                        : "glass"
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
                      {message.content}
                    </p>
                    {message.timestamp && (
                      <p className={`text-xs mt-2 ${message.role === "user" ? "text-blue-100" : "text-slate-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-4 animate-slide-up">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center shadow-lg animate-glow">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-6 py-4 rounded-2xl glass">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="border-t border-white/20 p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about online safety..."
                className="flex-1 px-6 py-4 rounded-2xl glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 shadow-lg"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 flex items-center gap-2 font-semibold shadow-lg"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">Send</span>
                  </>
                )}
              </button>
            </form>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-green-600" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-1">
                <Search className="w-3 h-3 text-blue-600" />
                <span>Real-Time Search</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-600" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
