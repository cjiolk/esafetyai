import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "eSafety AI - Your Online Safety Assistant",
  description: "AI-powered online safety assistant with web search capabilities. Get instant help with cyberbullying, privacy, social media safety, and more.",
  keywords: ["online safety", "cyberbullying", "privacy", "digital wellbeing", "AI assistant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
