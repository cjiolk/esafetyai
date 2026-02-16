import Link from "next/link";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  ExternalLink,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "AI Assistant", href: "/chat" },
      { label: "Interactive Games", href: "/games" },
      { label: "Knowledge Quiz", href: "/quiz" },
      { label: "Practice Scenarios", href: "/scenarios" },
      { label: "Safety Tips", href: "/tips" },
      { label: "Resources", href: "/resources" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Impact", href: "/about#impact" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Data Protection", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const emergencyContacts = [
    { label: "Cyberbullying Hotline", number: "1-800-273-8255" },
    { label: "Internet Safety Helpline", number: "1-800-843-5678" },
    { label: "Crisis Text Line", number: "Text HOME to 741741" },
  ];

  return (
    <footer className="relative mt-20 glass border-t border-white/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <Logo className="w-12 h-12 relative" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">eSafety AI</span>
                <span className="text-xs text-slate-600">Powered by Intelligence</span>
              </div>
            </Link>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The world&apos;s most advanced online safety platform. Empowering users with AI-driven education,
              real-time protection, and interactive learning experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 glass rounded-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover-lift group"
                >
                  <social.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Platform
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Contacts Section */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200/50">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Phone className="w-6 h-6 text-red-600" />
            Emergency Contacts
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {emergencyContacts.map((contact) => (
              <div key={contact.label} className="flex flex-col">
                <span className="text-sm text-slate-600 mb-1">{contact.label}</span>
                <a
                  href={`tel:${contact.number.replace(/\D/g, "")}`}
                  className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  {contact.number}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            If you or someone you know is in immediate danger, please call emergency services (911) right away.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Stay Updated</h3>
            <p className="text-slate-600 mb-4">
              Get the latest safety tips, platform updates, and exclusive content delivered to your inbox.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-600">
              <span>© {currentYear} eSafety AI. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for a safer internet.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                Status
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                API
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                Developers
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
    </footer>
  );
}
