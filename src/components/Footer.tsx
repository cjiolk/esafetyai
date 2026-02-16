import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">eSafety AI</span>
            </div>
            <p className="text-sm text-gray-400">
              Your intelligent companion for online safety education and protection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-blue-400 transition-colors">
                  AI Chat
                </Link>
              </li>
              <li>
                <Link href="/games" className="hover:text-blue-400 transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-blue-400 transition-colors">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="hover:text-blue-400 transition-colors">
                  Safety Resources
                </Link>
              </li>
              <li>
                <Link href="/scenarios" className="hover:text-blue-400 transition-colors">
                  Scenarios
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-blue-400 transition-colors">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="font-medium text-white">Crisis Hotline</p>
                  <p>1-800-273-8255</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="font-medium text-white">Email Support</p>
                  <p>help@esafety-ai.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} eSafety AI. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
