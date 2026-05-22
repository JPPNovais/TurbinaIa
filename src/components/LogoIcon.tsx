interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 28, className }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transformOrigin: 'center' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-g" x1="15%" y1="15%" x2="85%" y2="85%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="logo-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#logo-glow)" transform="translate(50,50)">
        <path fill="url(#logo-g)" d="M 3,-5 C 9,-16 13,-30 8,-40 C 4,-46 -4,-43 -6,-34 C -9,-22 -4,-10 3,-5 Z" />
        <path fill="url(#logo-g)" transform="rotate(120)" d="M 3,-5 C 9,-16 13,-30 8,-40 C 4,-46 -4,-43 -6,-34 C -9,-22 -4,-10 3,-5 Z" />
        <path fill="url(#logo-g)" transform="rotate(240)" d="M 3,-5 C 9,-16 13,-30 8,-40 C 4,-46 -4,-43 -6,-34 C -9,-22 -4,-10 3,-5 Z" />
        <circle r="8" fill="url(#logo-g)" />
        <circle r="3.5" fill="rgba(255,255,255,0.85)" />
      </g>
    </svg>
  );
}
