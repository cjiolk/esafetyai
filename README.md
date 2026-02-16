# eSafety AI - Online Safety Assistant 🛡️

An AI-powered website dedicated to online safety education, featuring a custom AI assistant with real-time web search capabilities.

## 🌟 Features

### 🤖 AI Chat Assistant
- **Intelligent Conversations**: Ask any question about online safety and get instant, accurate responses
- **Web Search Integration**: The AI searches the web in real-time for the latest safety information
- **Specialized Knowledge**: Expert guidance on cyberbullying, privacy, social media safety, and more
- **Personalized Advice**: Tailored recommendations based on your specific situation

### 📚 Comprehensive Resources
- **Cyberbullying Prevention**: Learn how to recognize, prevent, and respond to online harassment
- **Privacy Protection**: Keep your personal information safe and secure
- **Social Media Safety**: Navigate platforms safely and build positive online relationships
- **Password Security**: Create strong passwords and protect your accounts
- **Scam Recognition**: Identify and avoid online scams and phishing attempts
- **Digital Wellbeing**: Maintain a healthy balance between online and offline life

### 🎨 Modern Design
- Beautiful, responsive interface that works on all devices
- Intuitive navigation and user-friendly layout
- Accessibility-focused design
- Professional gradient themes and smooth animations

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed on your system

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd esafety-ai
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **AI Integration**: Hugging Face Inference API (free tier)
- **Web Search**: DuckDuckGo API (no API key required)
- **Package Manager**: Bun

## 📁 Project Structure

```
esafety-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── chat/
│   │   │   └── page.tsx          # AI Chat Interface
│   │   ├── resources/
│   │   │   └── page.tsx          # Safety Resources
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts      # AI Chat API
│   │   ├── layout.tsx            # Root Layout
│   │   └── globals.css           # Global Styles
├── public/                        # Static Assets
├── package.json
└── README.md
```

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with clear call-to-action
- Feature highlights showcasing AI capabilities
- Key safety topics overview
- Quick access to chat and resources

### AI Chat (`/chat`)
- Real-time AI conversation interface
- Web search integration indicator
- Clean, modern chat UI
- Persistent conversation history

### Resources (`/resources`)
- Comprehensive safety guides
- Topic-specific information cards
- Emergency resources section
- Direct link to AI assistant

## 🔧 API Routes

### `/api/chat` (POST)
Handles AI chat requests with optional web search integration.

**Request Body:**
```json
{
  "message": "Your question about online safety"
}
```

**Response:**
```json
{
  "response": "AI-generated response",
  "usedSearch": true
}
```

## 🌐 AI Features

### Web Search Integration
The AI automatically determines when to search the web based on keywords like:
- "latest", "recent", "current"
- "news", "update", "today"
- Year references (2024, 2025, 2026)

### Fallback System
If the AI API is unavailable, the system uses a comprehensive rule-based fallback that provides:
- Detailed safety guidance
- Topic-specific advice
- Emergency resources
- Actionable steps

## 🎨 Customization

### Changing Colors
Edit the Tailwind classes in components to match your brand:
- Primary: `blue-600`
- Secondary: `indigo-700`
- Accent colors for different topics

### Adding New Topics
1. Add a new section in [`src/app/resources/page.tsx`](src/app/resources/page.tsx)
2. Update the AI fallback responses in [`src/app/api/chat/route.ts`](src/app/api/chat/route.ts)
3. Add relevant keywords for web search detection

## 🔒 Privacy & Safety

This website is designed with privacy in mind:
- No user data is stored
- No tracking or analytics by default
- All conversations are ephemeral
- Web searches use privacy-focused DuckDuckGo API

## 📝 Development Commands

```bash
bun dev          # Start development server
bun build        # Build for production
bun start        # Start production server
bun lint         # Run ESLint
bun typecheck    # Run TypeScript type checking
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

If you're experiencing serious online safety issues:
- Contact a trusted adult (parent, teacher, counselor)
- Report to local authorities if threats are serious
- Use national crisis hotlines available 24/7
- Report harmful content to platform moderators

## 🙏 Acknowledgments

- Built with Next.js and React
- Icons by Lucide
- AI powered by Hugging Face
- Web search by DuckDuckGo

---

**Remember**: This AI assistant is for educational purposes. For serious safety concerns, always contact appropriate authorities or trusted adults.
