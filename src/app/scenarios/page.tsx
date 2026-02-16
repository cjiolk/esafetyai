"use client";

import { useState } from "react";
import { Users, MessageCircle, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";

type Scenario = {
  id: number;
  title: string;
  situation: string;
  options: {
    text: string;
    isGood: boolean;
    feedback: string;
  }[];
  category: string;
  icon: any;
  color: string;
};

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "The Friend Request",
    category: "Social Media",
    icon: Users,
    color: "blue",
    situation:
      "You receive a friend request from someone you don't know. Their profile has very few photos and only a handful of friends. They message you saying they go to a school nearby and want to be friends.",
    options: [
      {
        text: "Accept the request and start chatting with them",
        isGood: false,
        feedback:
          "This is risky! You don't know this person, and their profile has red flags (few photos, few friends). They could be a fake account or someone with bad intentions. Never accept requests from strangers.",
      },
      {
        text: "Ignore the request and don't respond to the message",
        isGood: true,
        feedback:
          "Great choice! It's safest to ignore friend requests from people you don't know in real life. If you're unsure, you can also block them and tell a trusted adult about the message.",
      },
      {
        text: "Accept the request but don't share any personal information",
        isGood: false,
        feedback:
          "Even if you don't share information directly, accepting the request gives them access to your posts, photos, and friend list. It's better to not accept requests from strangers at all.",
      },
      {
        text: "Block them and tell a parent or trusted adult",
        isGood: true,
        feedback:
          "Excellent! Blocking suspicious accounts and informing a trusted adult is the safest approach. This protects you and helps adults be aware of potential threats.",
      },
    ],
  },
  {
    id: 2,
    title: "The Mean Comments",
    category: "Cyberbullying",
    icon: MessageCircle,
    color: "red",
    situation:
      "Someone from your class has been posting mean comments about you on social media. Other students are starting to like and share these posts. You're feeling upset and embarrassed.",
    options: [
      {
        text: "Post mean comments back about them",
        isGood: false,
        feedback:
          "Fighting back with more mean comments will only make the situation worse and could get you in trouble too. It's important to take the high road and not engage in the same behavior.",
      },
      {
        text: "Take screenshots, block them, and tell a trusted adult",
        isGood: true,
        feedback:
          "Perfect response! Documenting the evidence, blocking the bully, and getting help from adults is the right way to handle cyberbullying. You're protecting yourself and taking appropriate action.",
      },
      {
        text: "Delete your social media accounts",
        isGood: false,
        feedback:
          "While taking a break from social media might help, deleting your accounts lets the bully win and doesn't solve the problem. It's better to address the issue with help from adults.",
      },
      {
        text: "Ignore it and hope it stops",
        isGood: false,
        feedback:
          "Ignoring cyberbullying rarely makes it stop. It's important to take action by documenting it and telling trusted adults who can help address the situation properly.",
      },
    ],
  },
  {
    id: 3,
    title: "The Suspicious Email",
    category: "Phishing",
    icon: AlertCircle,
    color: "yellow",
    situation:
      "You receive an email that looks like it's from your favorite online game. It says your account will be deleted unless you click a link and enter your password within 24 hours. The email looks official but the sender's address is slightly different from the real company.",
    options: [
      {
        text: "Click the link immediately and enter your password",
        isGood: false,
        feedback:
          "This is a phishing scam! Never click suspicious links or enter your password from an email. Real companies won't threaten to delete your account via email. The slightly different email address is a major red flag.",
      },
      {
        text: "Delete the email and log into your account directly through the official website",
        isGood: true,
        feedback:
          "Excellent! This is the safest approach. If there's really an issue with your account, you'll see it when you log in through the official website or app. Never use links from suspicious emails.",
      },
      {
        text: "Forward the email to all your friends to warn them",
        isGood: false,
        feedback:
          "While your intention is good, forwarding phishing emails can spread them further. Instead, delete it and report it to the real company. You can warn friends without forwarding the actual scam email.",
      },
      {
        text: "Report it as phishing/spam and delete it",
        isGood: true,
        feedback:
          "Great job! Reporting phishing emails helps email providers block similar scams. Deleting it removes the temptation to click. You can also report it to the real company being impersonated.",
      },
    ],
  },
  {
    id: 4,
    title: "The Private Photo Request",
    category: "Privacy & Safety",
    icon: Users,
    color: "purple",
    situation:
      "Someone you've been chatting with online for a few weeks asks you to send them a photo of yourself. They say they want to see what you look like and promise not to share it with anyone else.",
    options: [
      {
        text: "Send them a photo since you've been talking for a while",
        isGood: false,
        feedback:
          "This is dangerous! Once you send a photo, you lose control of it. They could share it, manipulate it, or use it inappropriately. Never send photos to people you only know online.",
      },
      {
        text: "Tell them no and stop communicating with them",
        isGood: true,
        feedback:
          "Perfect! Anyone who pressures you for photos is not someone you should trust. Stopping communication protects you from potential exploitation or manipulation.",
      },
      {
        text: "Send a photo but ask them to delete it after viewing",
        isGood: false,
        feedback:
          "Once a photo is sent digitally, you can't control what happens to it. They could save it, screenshot it, or share it regardless of what they promise. Never send personal photos to online contacts.",
      },
      {
        text: "Block them and tell a trusted adult about the request",
        isGood: true,
        feedback:
          "Excellent choice! Blocking them and informing an adult is the safest response. This type of request is a major red flag and adults need to know about it to help protect you.",
      },
    ],
  },
  {
    id: 5,
    title: "The Public Wi-Fi",
    category: "Digital Security",
    icon: AlertCircle,
    color: "green",
    situation:
      "You're at a coffee shop and need to check your bank account balance. There's free public Wi-Fi available. You also need to buy something online using your credit card.",
    options: [
      {
        text: "Use the public Wi-Fi for both tasks since it's convenient",
        isGood: false,
        feedback:
          "Public Wi-Fi is not secure! Hackers can intercept your data on public networks. Never access sensitive information like bank accounts or enter credit card details on public Wi-Fi.",
      },
      {
        text: "Wait until you get home to do these tasks",
        isGood: true,
        feedback:
          "Smart thinking! Waiting to use a secure, private network for sensitive tasks is the safest option. Your financial security is worth the wait.",
      },
      {
        text: "Use your phone's mobile data instead of public Wi-Fi",
        isGood: true,
        feedback:
          "Great solution! Your mobile data connection is much more secure than public Wi-Fi. This is a safe way to access sensitive information when you're not at home.",
      },
      {
        text: "Use the public Wi-Fi but turn on a VPN first",
        isGood: true,
        feedback:
          "Good thinking! A VPN (Virtual Private Network) encrypts your connection, making it much safer to use public Wi-Fi. However, using mobile data or waiting for a secure network is even better for very sensitive tasks.",
      },
    ],
  },
];

export default function ScenariosPage() {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setShowFeedback(true);
  };

  const handleNextScenario = () => {
    if (selectedScenario !== null && selectedScenario < scenarios.length - 1) {
      setSelectedScenario(selectedScenario + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setSelectedScenario(null);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real-World Scenarios
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Practice making safe decisions in realistic online situations. Learn what to do when faced with common digital challenges.
            </p>
          </div>
        </div>
      </section>

      {selectedScenario === null ? (
        /* Scenario Selection */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose a Scenario to Practice
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <div
                key={scenario.id}
                onClick={() => setSelectedScenario(index)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-indigo-500 p-6"
              >
                <div className={`w-14 h-14 bg-${scenario.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <scenario.icon className={`w-8 h-8 text-${scenario.color}-600`} />
                </div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                    {scenario.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{scenario.situation}</p>
                <div className="mt-4 text-indigo-600 font-semibold text-sm">
                  Start Scenario →
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* Scenario Detail */
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-6">
            <button
              onClick={handleReset}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              ← Back to Scenarios
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Scenario Header */}
            <div className={`bg-gradient-to-r from-${scenarios[selectedScenario].color}-600 to-${scenarios[selectedScenario].color}-700 text-white p-8`}>
              <div className="flex items-center mb-4">
                {(() => {
                  const IconComponent = scenarios[selectedScenario].icon;
                  return <IconComponent className="w-10 h-10 mr-3" />;
                })()}
                <div>
                  <div className="text-sm opacity-90">{scenarios[selectedScenario].category}</div>
                  <h2 className="text-2xl font-bold">{scenarios[selectedScenario].title}</h2>
                </div>
              </div>
            </div>

            {/* Situation */}
            <div className="p-8">
              <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-indigo-600" />
                  The Situation:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {scenarios[selectedScenario].situation}
                </p>
              </div>

              {/* Options */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What would you do?</h3>
                <div className="space-y-3">
                  {scenarios[selectedScenario].options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    const isGood = option.isGood;
                    
                    let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
                    
                    if (!showFeedback) {
                      buttonClass += isSelected
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-300 hover:border-indigo-300 hover:bg-indigo-50";
                    } else if (isSelected) {
                      buttonClass += isGood
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50";
                    } else {
                      buttonClass += "border-gray-200 bg-gray-50 opacity-60";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => !showFeedback && handleOptionSelect(index)}
                        disabled={showFeedback}
                        className={buttonClass}
                      >
                        <div className="flex items-start justify-between">
                          <span className="font-medium text-gray-900 pr-4">{option.text}</span>
                          {showFeedback && isSelected && (
                            isGood ? (
                              <ThumbsUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                            ) : (
                              <ThumbsDown className="w-6 h-6 text-red-600 flex-shrink-0" />
                            )
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback */}
              {showFeedback && selectedOption !== null && (
                <div className="mb-6">
                  <div
                    className={`rounded-lg p-6 ${
                      scenarios[selectedScenario].options[selectedOption].isGood
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <h4
                      className={`font-bold text-lg mb-3 flex items-center ${
                        scenarios[selectedScenario].options[selectedOption].isGood
                          ? "text-green-900"
                          : "text-red-900"
                      }`}
                    >
                      {scenarios[selectedScenario].options[selectedOption].isGood ? (
                        <>
                          <ThumbsUp className="w-6 h-6 mr-2" />
                          Great Choice!
                        </>
                      ) : (
                        <>
                          <ThumbsDown className="w-6 h-6 mr-2" />
                          Not the Best Choice
                        </>
                      )}
                    </h4>
                    <p
                      className={
                        scenarios[selectedScenario].options[selectedOption].isGood
                          ? "text-green-800"
                          : "text-red-800"
                      }
                    >
                      {scenarios[selectedScenario].options[selectedOption].feedback}
                    </p>
                  </div>

                  {/* Show all good options */}
                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">✓ Safe Responses:</h4>
                    <ul className="space-y-2">
                      {scenarios[selectedScenario].options
                        .filter((opt) => opt.isGood)
                        .map((opt, idx) => (
                          <li key={idx} className="text-blue-800 text-sm">
                            • {opt.text}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation */}
              {showFeedback && (
                <div className="flex gap-4">
                  {selectedScenario < scenarios.length - 1 ? (
                    <button
                      onClick={handleNextScenario}
                      className="flex-1 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Next Scenario →
                    </button>
                  ) : (
                    <button
                      onClick={handleReset}
                      className="flex-1 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Back to All Scenarios
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
