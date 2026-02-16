export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield outline with gradient */}
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Shield shape */}
      <path
        d="M50 5 L85 20 L85 45 Q85 75 50 95 Q15 75 15 45 L15 20 Z"
        fill="url(#shieldGradient)"
        opacity="0.2"
      />
      <path
        d="M50 5 L85 20 L85 45 Q85 75 50 95 Q15 75 15 45 L15 20 Z"
        stroke="url(#shieldGradient)"
        strokeWidth="3"
        fill="none"
      />
      
      {/* AI Brain/Circuit pattern inside */}
      <circle cx="50" cy="45" r="8" fill="url(#aiGradient)" />
      <circle cx="35" cy="35" r="5" fill="url(#aiGradient)" opacity="0.8" />
      <circle cx="65" cy="35" r="5" fill="url(#aiGradient)" opacity="0.8" />
      <circle cx="35" cy="55" r="5" fill="url(#aiGradient)" opacity="0.8" />
      <circle cx="65" cy="55" r="5" fill="url(#aiGradient)" opacity="0.8" />
      
      {/* Connecting lines */}
      <line x1="42" y1="38" x2="50" y2="45" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="58" y1="38" x2="50" y2="45" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="42" y1="52" x2="50" y2="45" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="58" y1="52" x2="50" y2="45" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}
