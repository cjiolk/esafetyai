"use client";

import { useState } from "react";
import { Gamepad2, Trophy, Star, Lock, Shield, AlertTriangle, Eye, MessageSquare } from "lucide-react";
import Link from "next/link";

type Game = {
  id: string;
  title: string;
  description: string;
  icon: any;
  difficulty: "Easy" | "Medium" | "Hard";
  color: string;
  locked?: boolean;
};

const games: Game[] = [
  {
    id: "password-master",
    title: "Password Master",
    description: "Create the strongest passwords and learn what makes them secure!",
    icon: Lock,
    difficulty: "Easy",
    color: "blue",
  },
  {
    id: "phishing-detective",
    title: "Phishing Detective",
    description: "Spot fake emails and websites before they trick you!",
    icon: Eye,
    difficulty: "Medium",
    color: "purple",
  },
  {
    id: "privacy-guardian",
    title: "Privacy Guardian",
    description: "Protect your personal information from data collectors!",
    icon: Shield,
    difficulty: "Medium",
    color: "green",
  },
  {
    id: "cyberbully-defender",
    title: "Cyberbully Defender",
    description: "Learn how to respond to and prevent cyberbullying situations!",
    icon: MessageSquare,
    difficulty: "Hard",
    color: "red",
  },
];

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Gamepad2 className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Safety Games
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Learn online safety through fun, interactive games! Test your skills and become a digital safety expert.
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => !game.locked && setSelectedGame(game.id)}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                selectedGame === game.id ? "border-purple-500" : "border-transparent"
              } ${game.locked ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-${game.color}-100 rounded-lg flex items-center justify-center`}>
                    <game.icon className={`w-8 h-8 text-${game.color}-600`} />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      game.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : game.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {game.difficulty}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{game.title}</h3>
                <p className="text-gray-600 mb-6">{game.description}</p>
                {game.locked ? (
                  <div className="flex items-center text-gray-500">
                    <Lock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Complete previous games to unlock</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedGame(game.id)}
                    className={`w-full py-3 bg-gradient-to-r from-${game.color}-600 to-${game.color}-700 text-white rounded-lg font-semibold hover:from-${game.color}-700 hover:to-${game.color}-800 transition-all`}
                  >
                    Play Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Game Modal */}
      {selectedGame && (
        <GameModal
          gameId={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}

      {/* Leaderboard Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h2>
            <p className="text-gray-600">Keep playing to earn more stars and badges!</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-sm text-gray-600">Games Completed</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-6 h-6 text-gray-300" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Stars Earned</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-sm text-gray-600">Total Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GameModal({ gameId, onClose }: { gameId: string; onClose: () => void }) {
  const gameComponents: Record<string, React.ReactElement> = {
    "password-master": <PasswordMasterGame />,
    "phishing-detective": <PhishingDetectiveGame />,
    "privacy-guardian": <PrivacyGuardianGame />,
    "cyberbully-defender": <CyberbullyDefenderGame />,
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {games.find((g) => g.id === gameId)?.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        <div className="p-6">{gameComponents[gameId]}</div>
      </div>
    </div>
  );
}

function PasswordMasterGame() {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);

  const checkPassword = (pwd: string) => {
    const checks = [];
    let points = 0;

    if (pwd.length >= 12) {
      checks.push("✓ Great length (12+ characters)");
      points += 25;
    } else if (pwd.length >= 8) {
      checks.push("⚠ Good length, but 12+ is better");
      points += 15;
    } else {
      checks.push("✗ Too short (needs 8+ characters)");
    }

    if (/[A-Z]/.test(pwd)) {
      checks.push("✓ Contains uppercase letters");
      points += 20;
    } else {
      checks.push("✗ Add uppercase letters");
    }

    if (/[a-z]/.test(pwd)) {
      checks.push("✓ Contains lowercase letters");
      points += 20;
    } else {
      checks.push("✗ Add lowercase letters");
    }

    if (/[0-9]/.test(pwd)) {
      checks.push("✓ Contains numbers");
      points += 20;
    } else {
      checks.push("✗ Add numbers");
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      checks.push("✓ Contains special characters");
      points += 15;
    } else {
      checks.push("✗ Add special characters (!@#$%...)");
    }

    setFeedback(checks);
    setScore(points);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">🎯 Your Mission:</h3>
        <p className="text-blue-800">
          Create the strongest password possible! A strong password should be at least 12 characters long and include uppercase letters, lowercase letters, numbers, and special characters.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter your password:
        </label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            checkPassword(e.target.value);
          }}
          placeholder="Type your password here..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {password && (
        <>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">Password Strength</h4>
              <div className="text-2xl font-bold text-blue-600">{score}/100</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div
                className={`h-4 rounded-full transition-all ${
                  score >= 80
                    ? "bg-green-500"
                    : score >= 50
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <ul className="space-y-2">
              {feedback.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm ${
                    item.startsWith("✓")
                      ? "text-green-700"
                      : item.startsWith("⚠")
                      ? "text-yellow-700"
                      : "text-red-700"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {score === 100 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-2 text-yellow-500" />
              <h4 className="font-bold text-green-900 text-xl mb-2">Perfect Password! 🎉</h4>
              <p className="text-green-800">
                You&apos;ve created an incredibly strong password! Remember to use unique passwords for each account.
              </p>
            </div>
          )}
        </>
      )}

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tips:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Use a passphrase: &quot;MyDog@te3Pizzas!&quot;</li>
          <li>• Never use personal info (birthdays, names)</li>
          <li>• Use a password manager to remember them</li>
          <li>• Change passwords if a site gets hacked</li>
        </ul>
      </div>
    </div>
  );
}

function PhishingDetectiveGame() {
  const [currentEmail, setCurrentEmail] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const emails = [
    {
      from: "security@paypa1-alert.com",
      subject: "URGENT: Verify your account now!",
      body: "Your PayPal account has been limited. Click here immediately to verify your identity or your account will be closed within 24 hours!",
      isPhishing: true,
      redFlags: [
        "Suspicious sender domain (paypa1 instead of paypal)",
        "Creates urgency and fear",
        "Threatens account closure",
        "Asks you to click a link",
      ],
    },
    {
      from: "newsletter@amazon.com",
      subject: "Your order #123-4567890 has shipped",
      body: "Good news! Your recent order has been shipped and will arrive in 2-3 business days. Track your package using your account dashboard.",
      isPhishing: false,
      redFlags: [],
    },
    {
      from: "winner@lottery-claim.biz",
      subject: "You've won $1,000,000!",
      body: "Congratulations! You've been selected as the winner of our international lottery. Send us your bank details to claim your prize!",
      isPhishing: true,
      redFlags: [
        "Too good to be true",
        "Asks for bank details",
        "Suspicious domain (.biz)",
        "You didn't enter any lottery",
      ],
    },
  ];

  const currentEmailData = emails[currentEmail];

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === currentEmailData.isPhishing) {
      setScore(score + 1);
    }
  };

  const nextEmail = () => {
    if (currentEmail < emails.length - 1) {
      setCurrentEmail(currentEmail + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Email {currentEmail + 1} of {emails.length}
        </div>
        <div className="text-lg font-bold text-purple-600">Score: {score}/{emails.length}</div>
      </div>

      <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
          <div className="text-sm text-gray-600 mb-1">From: {currentEmailData.from}</div>
          <div className="font-semibold text-gray-900">{currentEmailData.subject}</div>
        </div>
        <div className="p-4 text-gray-700">{currentEmailData.body}</div>
      </div>

      {!answered ? (
        <div className="space-y-3">
          <p className="text-center font-medium text-gray-900">Is this email legitimate or phishing?</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAnswer(false)}
              className="py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              ✓ Legitimate
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              ✗ Phishing
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div
            className={`rounded-lg p-4 ${
              selectedAnswer === currentEmailData.isPhishing
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <h4
              className={`font-bold text-lg mb-2 ${
                selectedAnswer === currentEmailData.isPhishing ? "text-green-900" : "text-red-900"
              }`}
            >
              {selectedAnswer === currentEmailData.isPhishing ? "Correct! 🎉" : "Not quite! 🤔"}
            </h4>
            <p
              className={
                selectedAnswer === currentEmailData.isPhishing ? "text-green-800" : "text-red-800"
              }
            >
              This email is {currentEmailData.isPhishing ? "PHISHING" : "LEGITIMATE"}.
            </p>
          </div>

          {currentEmailData.isPhishing && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h5 className="font-semibold text-yellow-900 mb-2">🚩 Red Flags:</h5>
              <ul className="text-sm text-yellow-800 space-y-1">
                {currentEmailData.redFlags.map((flag, index) => (
                  <li key={index}>• {flag}</li>
                ))}
              </ul>
            </div>
          )}

          {currentEmail < emails.length - 1 ? (
            <button
              onClick={nextEmail}
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Next Email →
            </button>
          ) : (
            <div className="text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Game Complete!</h4>
              <p className="text-gray-600 mb-4">
                You scored {score} out of {emails.length}
              </p>
              <Link
                href="/quiz"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Try the Quiz Next →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PrivacyGuardianGame() {
  return (
    <div className="space-y-6 text-center py-12">
      <Shield className="w-20 h-20 mx-auto text-green-600" />
      <h3 className="text-2xl font-bold text-gray-900">Coming Soon!</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        This game is under development. Check back soon to learn about protecting your privacy online!
      </p>
    </div>
  );
}

function CyberbullyDefenderGame() {
  return (
    <div className="space-y-6 text-center py-12">
      <MessageSquare className="w-20 h-20 mx-auto text-red-600" />
      <h3 className="text-2xl font-bold text-gray-900">Coming Soon!</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        This game is under development. Check back soon to learn how to handle cyberbullying situations!
      </p>
    </div>
  );
}
