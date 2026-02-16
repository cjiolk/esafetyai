import { NextRequest, NextResponse } from "next/server";

// This API route handles chat requests and integrates web search
export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Determine if we need to search the web
    const needsSearch = shouldSearchWeb(message);
    let searchResults = "";
    
    if (needsSearch) {
      searchResults = await searchWeb(message);
    }

    // Generate AI response
    const aiResponse = await generateAIResponse(message, searchResults, needsSearch);

    return NextResponse.json({
      response: aiResponse,
      usedSearch: needsSearch,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

// Determine if the question requires web search
function shouldSearchWeb(message: string): boolean {
  const searchKeywords = [
    "latest",
    "recent",
    "current",
    "news",
    "update",
    "2024",
    "2025",
    "2026",
    "today",
    "now",
    "trending",
    "new",
  ];
  
  const lowerMessage = message.toLowerCase();
  return searchKeywords.some((keyword) => lowerMessage.includes(keyword));
}

// Search the web using DuckDuckGo API
async function searchWeb(query: string): Promise<string> {
  try {
    // Using DuckDuckGo Instant Answer API (free, no API key needed)
    const searchQuery = encodeURIComponent(query + " online safety");
    const response = await fetch(
      `https://api.duckduckgo.com/?q=${searchQuery}&format=json&no_html=1&skip_disambig=1`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      return "";
    }

    const data = await response.json();
    
    // Extract relevant information
    let results = "";
    
    if (data.AbstractText) {
      results += `Summary: ${data.AbstractText}\n\n`;
    }
    
    if (data.RelatedTopics && data.RelatedTopics.length > 0) {
      results += "Related Information:\n";
      data.RelatedTopics.slice(0, 3).forEach((topic: any) => {
        if (topic.Text) {
          results += `- ${topic.Text}\n`;
        }
      });
    }

    return results || "No specific web results found, but I can still help based on my knowledge.";
  } catch (error) {
    console.error("Search error:", error);
    return "";
  }
}

// Generate AI response using the message and optional search results
async function generateAIResponse(
  message: string,
  searchResults: string,
  usedSearch: boolean
): Promise<string> {
  // Build context-aware response
  const eSafetyContext = `You are an eSafety AI assistant specializing in online safety, cyberbullying prevention, privacy protection, and digital wellbeing. 
Your role is to provide helpful, accurate, and age-appropriate advice about staying safe online.

Key areas you help with:
- Cyberbullying and how to handle it
- Privacy settings and data protection
- Social media safety
- Recognizing online scams and phishing
- Digital wellbeing and screen time
- Reporting harmful content
- Password security
- Safe online communication

Always be supportive, non-judgmental, and provide actionable advice.`;

  let prompt = `${eSafetyContext}\n\nUser question: ${message}\n\n`;
  
  if (usedSearch && searchResults) {
    prompt += `Web search results:\n${searchResults}\n\n`;
    prompt += `Please provide a helpful response incorporating the search results where relevant.\n\n`;
  }
  
  prompt += `Response:`;

  try {
    // Using a free AI API - Hugging Face Inference API with a free model
    // You can replace this with OpenAI, Anthropic, or any other AI service
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 500,
            temperature: 0.7,
            top_p: 0.95,
            return_full_text: false,
          },
        }),
      }
    );

    if (!response.ok) {
      // Fallback to rule-based responses if AI API fails
      return generateFallbackResponse(message, searchResults, usedSearch);
    }

    const data = await response.json();
    let aiText = "";
    
    if (Array.isArray(data) && data[0]?.generated_text) {
      aiText = data[0].generated_text.trim();
    } else if (data.generated_text) {
      aiText = data.generated_text.trim();
    }

    // If AI response is too short or failed, use fallback
    if (!aiText || aiText.length < 50) {
      return generateFallbackResponse(message, searchResults, usedSearch);
    }

    return aiText;
  } catch (error) {
    console.error("AI generation error:", error);
    return generateFallbackResponse(message, searchResults, usedSearch);
  }
}

// Fallback response system with eSafety knowledge
function generateFallbackResponse(
  message: string,
  searchResults: string,
  usedSearch: boolean
): string {
  const lowerMessage = message.toLowerCase();
  
  // Cyberbullying
  if (lowerMessage.includes("cyberbully") || lowerMessage.includes("bullying") || lowerMessage.includes("harassment")) {
    return `I understand you're asking about cyberbullying. Here's what you should know:

**What to do if you're being cyberbullied:**
1. Don't respond to the bully - it often makes things worse
2. Save evidence (screenshots, messages)
3. Block the person on all platforms
4. Report to the platform and tell a trusted adult
5. Remember: it's not your fault

**Prevention tips:**
- Keep your personal information private
- Think before you post
- Be kind online - treat others how you want to be treated
- Use privacy settings on social media

If you're experiencing cyberbullying, please talk to a parent, teacher, or counselor. You can also contact:
- Cyberbullying hotlines in your country
- School counselors
- Local authorities if threats are serious

${usedSearch && searchResults ? `\n**Additional information from the web:**\n${searchResults}` : ""}

Would you like specific advice about a particular situation?`;
  }

  // Privacy
  if (lowerMessage.includes("privacy") || lowerMessage.includes("personal information") || lowerMessage.includes("data")) {
    return `Privacy protection is crucial online! Here are key tips:

**Protect Your Personal Information:**
- Never share your full name, address, phone number, or school name publicly
- Be careful about what you post in photos (location tags, uniforms, etc.)
- Use strong, unique passwords for each account
- Enable two-factor authentication when available

**Social Media Privacy:**
- Set your profiles to private
- Only accept friend/follow requests from people you know
- Review your privacy settings regularly
- Think before you share - once online, it's hard to remove

**What NOT to share online:**
- Home address or location
- Phone number
- Financial information
- Passwords (never share with anyone!)
- Travel plans or when you're home alone

${usedSearch && searchResults ? `\n**Latest information:**\n${searchResults}` : ""}

Need help with privacy settings on a specific platform?`;
  }

  // Social media safety
  if (lowerMessage.includes("social media") || lowerMessage.includes("instagram") || lowerMessage.includes("tiktok") || lowerMessage.includes("snapchat")) {
    return `Social media can be fun, but staying safe is important! Here's how:

**General Social Media Safety:**
- Use privacy settings to control who sees your content
- Be selective about who you connect with
- Think before you post - consider how it might affect you later
- Don't share your location in real-time
- Be skeptical of messages from strangers

**Red Flags to Watch For:**
- Someone asking for personal information
- Requests to move conversation to private messaging
- People who seem too good to be true
- Pressure to share photos or meet in person
- Anyone asking you to keep secrets from parents

**Healthy Social Media Use:**
- Take regular breaks
- Don't compare yourself to others (remember: people show their best moments)
- Unfollow accounts that make you feel bad
- Report inappropriate content

${usedSearch && searchResults ? `\n**Current trends and updates:**\n${searchResults}` : ""}

What specific platform or concern would you like to discuss?`;
  }

  // Passwords
  if (lowerMessage.includes("password") || lowerMessage.includes("account security")) {
    return `Strong passwords are your first line of defense! Here's how to stay secure:

**Creating Strong Passwords:**
- Use at least 12 characters
- Mix uppercase, lowercase, numbers, and symbols
- Avoid personal information (birthdays, names, etc.)
- Don't use common words or patterns
- Use a unique password for each account

**Password Management:**
- Consider using a password manager
- Enable two-factor authentication (2FA)
- Never share your passwords with anyone
- Change passwords if you suspect a breach
- Don't save passwords on shared computers

**Example of a strong password method:**
Create a passphrase: "I love pizza on Fridays!"
Convert to: "1Lov3P!zz@0nFr!d@y5"

${usedSearch && searchResults ? `\n**Latest security recommendations:**\n${searchResults}` : ""}

Need help setting up 2FA or creating a strong password?`;
  }

  // Scams and phishing
  if (lowerMessage.includes("scam") || lowerMessage.includes("phishing") || lowerMessage.includes("fraud") || lowerMessage.includes("suspicious")) {
    return `Great question! Recognizing scams is an important skill. Here's what to watch for:

**Common Online Scams:**
- Phishing emails pretending to be from real companies
- "Too good to be true" offers or prizes
- Fake tech support calls or pop-ups
- Romance scams on social media
- Fake shopping websites

**Warning Signs:**
- Urgent language ("Act now!" "Limited time!")
- Requests for personal information or money
- Poor grammar or spelling
- Suspicious links or email addresses
- Pressure to act quickly

**How to Protect Yourself:**
- Verify the sender before clicking links
- Never give out personal information via email
- Check website URLs carefully (look for https://)
- If it seems too good to be true, it probably is
- When in doubt, ask a trusted adult

**If You Think You've Been Scammed:**
1. Don't panic
2. Tell a parent or guardian immediately
3. Change your passwords
4. Report to the platform and authorities
5. Monitor your accounts

${usedSearch && searchResults ? `\n**Recent scam alerts:**\n${searchResults}` : ""}

Have you encountered something suspicious? I can help you evaluate it.`;
  }

  // General response
  return `Thank you for your question about online safety! 

I'm here to help with topics like:
- **Cyberbullying** - how to handle and prevent it
- **Privacy Protection** - keeping your information safe
- **Social Media Safety** - using platforms responsibly
- **Password Security** - creating strong passwords
- **Scam Recognition** - spotting and avoiding fraud
- **Digital Wellbeing** - healthy online habits

${usedSearch && searchResults ? `I searched the web and found:\n${searchResults}\n\n` : ""}

Could you tell me more specifically what aspect of online safety you'd like to learn about? The more details you provide, the better I can help!

Remember: If you're in immediate danger or experiencing serious threats, please contact local authorities or a trusted adult right away.`;
}
