"use client";

import { useState } from "react";
import { Brain, CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";
import Link from "next/link";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const quizQuestions: Question[] = [
  {
    question: "What makes a password strong?",
    options: [
      "Your birthday and name",
      "A mix of uppercase, lowercase, numbers, and symbols (12+ characters)",
      "The word 'password123'",
      "Your pet's name",
    ],
    correctAnswer: 1,
    explanation:
      "Strong passwords should be at least 12 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special symbols. Avoid using personal information!",
  },
  {
    question: "What is phishing?",
    options: [
      "A type of fishing sport",
      "A scam where criminals try to trick you into giving personal information",
      "A social media platform",
      "A computer virus",
    ],
    correctAnswer: 1,
    explanation:
      "Phishing is when scammers send fake emails or messages pretending to be from legitimate companies to steal your personal information, passwords, or money.",
  },
  {
    question: "What should you do if someone is cyberbullying you?",
    options: [
      "Respond with mean messages back",
      "Keep it to yourself and don't tell anyone",
      "Block them, save evidence, and tell a trusted adult",
      "Delete your account immediately",
    ],
    correctAnswer: 2,
    explanation:
      "If you're being cyberbullied, block the person, save screenshots as evidence, and tell a trusted adult like a parent, teacher, or counselor. Never respond with aggression.",
  },
  {
    question: "Which information is safe to share publicly on social media?",
    options: [
      "Your home address",
      "Your phone number",
      "Your school name and schedule",
      "Your favorite hobbies and interests (without personal details)",
    ],
    correctAnswer: 3,
    explanation:
      "It's okay to share general interests and hobbies, but never share personal information like your address, phone number, school location, or daily schedule publicly online.",
  },
  {
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Using two passwords",
      "An extra security step that requires a code from your phone or email",
      "Having two email accounts",
      "A type of antivirus software",
    ],
    correctAnswer: 1,
    explanation:
      "Two-factor authentication adds an extra layer of security by requiring both your password AND a code sent to your phone or email. This makes it much harder for hackers to access your accounts.",
  },
  {
    question: "What should you do before clicking a link in an email?",
    options: [
      "Click it immediately",
      "Hover over it to check the actual URL and verify the sender",
      "Forward it to all your friends",
      "Nothing, all links are safe",
    ],
    correctAnswer: 1,
    explanation:
      "Always hover over links to see the actual URL before clicking. Check if the sender's email address is legitimate. If something seems suspicious, don't click!",
  },
  {
    question: "How often should you update your privacy settings on social media?",
    options: [
      "Never, the defaults are fine",
      "Once when you create your account",
      "Regularly, and whenever the platform updates",
      "Only if you get hacked",
    ],
    correctAnswer: 2,
    explanation:
      "You should review your privacy settings regularly and whenever social media platforms update their policies. Platforms often change settings, so it's important to stay on top of who can see your information.",
  },
  {
    question: "What is a digital footprint?",
    options: [
      "The size of your computer screen",
      "The trail of data you leave behind when using the internet",
      "A type of computer virus",
      "Your internet speed",
    ],
    correctAnswer: 1,
    explanation:
      "Your digital footprint is all the information about you that exists online - posts, comments, photos, searches, etc. It can be permanent and affect your future, so think before you post!",
  },
  {
    question: "What should you do if you receive a message from a stranger online?",
    options: [
      "Share your personal information",
      "Meet them in person",
      "Don't respond, block them, and tell a trusted adult",
      "Send them money if they ask",
    ],
    correctAnswer: 2,
    explanation:
      "Never engage with strangers online who contact you unexpectedly. Block them, don't share any personal information, and always tell a trusted adult about the interaction.",
  },
  {
    question: "What is the safest way to use public Wi-Fi?",
    options: [
      "Do all your online banking",
      "Share passwords with others",
      "Avoid accessing sensitive information or use a VPN",
      "Turn off all security settings",
    ],
    correctAnswer: 2,
    explanation:
      "Public Wi-Fi is not secure. Avoid accessing sensitive information like bank accounts. If you must use it, use a VPN (Virtual Private Network) to encrypt your connection.",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl p-8 text-center">
            <Trophy className="w-20 h-20 mx-auto mb-6 text-yellow-500" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Complete! 🎉</h1>
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-2xl text-gray-700 mb-8">
              You scored {percentage}%
            </p>
            
            <div className="mb-8">
              {percentage >= 90 ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-2">Outstanding! 🌟</h3>
                  <p className="text-green-800">
                    You&apos;re an online safety expert! Keep up the great work protecting yourself online.
                  </p>
                </div>
              ) : percentage >= 70 ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Great Job! 👏</h3>
                  <p className="text-blue-800">
                    You have a solid understanding of online safety. Review the topics you missed to become an expert!
                  </p>
                </div>
              ) : percentage >= 50 ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Good Start! 💪</h3>
                  <p className="text-yellow-800">
                    You&apos;re on the right track! Spend more time learning about online safety to improve your score.
                  </p>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">Keep Learning! 📚</h3>
                  <p className="text-red-800">
                    Online safety is important! Review the resources and try the quiz again to improve your knowledge.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              <Link
                href="/games"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Play Games
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Brain className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Online Safety Quiz
            </h1>
            <p className="text-lg text-blue-100">
              Test your knowledge and become a digital safety expert!
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showResult = showExplanation;

              let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
              
              if (!showResult) {
                buttonClass += isSelected
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300 hover:bg-blue-50";
              } else {
                if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-50";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "border-red-500 bg-red-50";
                } else {
                  buttonClass += "border-gray-300 bg-gray-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{option}</span>
                    {showResult && isCorrect && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div
              className={`flex items-start space-x-3 mb-4 ${
                selectedAnswer === question.correctAnswer ? "text-green-700" : "text-red-700"
              }`}
            >
              {selectedAnswer === question.correctAnswer ? (
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className="font-bold text-lg mb-2">
                  {selectedAnswer === question.correctAnswer ? "Correct!" : "Not quite!"}
                </h3>
                <p className="text-gray-700">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        {showExplanation && (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            {currentQuestion < quizQuestions.length - 1 ? "Next Question →" : "See Results →"}
          </button>
        )}
      </section>
    </div>
  );
}
